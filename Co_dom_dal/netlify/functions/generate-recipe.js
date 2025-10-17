// netlify/functions/generate-recipe.js
import OpenAI from "openai";

// Moderný Netlify handler (E S Modules + Response API)
export default async (req, context) => {
  // Povolenie CORS, aby to fungovalo aj z tvojho frontendového kódu
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST, OPTIONS",
        "Access-Control-Allow-Headers": "Content-Type",
      },
    });
  }

  if (req.method !== "POST") {
    return Response.json({ error: "Method Not Allowed" }, { status: 405 });
  }

  // Prečítanie JSON tela požiadavky (zoznam ingrediencií)
  let payload = {};
  try {
    payload = await req.json();
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 });
  }

  const ingredients = (payload.ingredients || [])
    .map((s) => String(s || "").trim())
    .filter(Boolean)
    .slice(0, 4);

  if (ingredients.length < 1) {
    return Response.json(
      { error: "Zadaj aspoň 1 ingredienciu." },
      { status: 400 }
    );
  }

  // Vytvorenie klienta s tvojím OpenAI API kľúčom (z Netlify env)
  const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  // Prompt – inštrukcia pre AI
  const prompt = `
Si šéfkuchár a máš vytvoriť jednoduchý recept z týchto ingrediencií:
${ingredients.join(", ")}.

Vráť výstup IBA ako čistý JSON (bez textu okolo) v tomto formáte:
{
  "title": "názov receptu",
  "servings": 2,
  "timeMinutes": 15,
  "ingredients": [
    {"item":"názov suroviny","amount":"množstvo"},
    {"item":"...","amount":"..."}
  ],
  "steps": [
    "krok 1",
    "krok 2",
    "krok 3"
  ]
}
Jazyk: slovenčina.
`;

  try {
    // Volanie OpenAI Responses API (odporúčaný moderný spôsob)
    const resp = await client.responses.create({
      model: "gpt-4.1-mini", // lacný a rýchly variant
      input: prompt,
      max_output_tokens: 700,
    });

    // Výstup modelu ako čistý text
    const text = resp.output_text || "";

    // Pokus o parsovanie JSON výstupu z textu
    let data;
    try {
      data = JSON.parse(text);
    } catch {
      const m = text.match(/\{[\s\S]*\}/);
      data = m ? JSON.parse(m[0]) : null;
    }

    if (!data) {
      return Response.json(
        { error: "Nepodarilo sa spracovať odpoveď modelu." },
        { status: 500 }
      );
    }

    // Vrátime JSON odpoveď frontend-u
    return Response.json(data, {
      headers: { "Access-Control-Allow-Origin": "*" },
    });
  } catch (e) {
    console.error("Chyba AI volania:", e);
    return Response.json(
      { error: "Server error", detail: String(e?.message || e) },
      { status: 500 }
    );
  }
};
