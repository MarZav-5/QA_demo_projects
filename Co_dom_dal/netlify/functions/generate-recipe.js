// Netlify Function – generate-recipe.js
// Používa OpenAI Responses API (nové unified rozhranie)

import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // 🔒 uložené v Netlify environment variables
});

export default async (request) => {
  try {
    const body = await request.json();
    const ingredients = body.ingredients || [];
    const lang = body.lang || "sk";

    if (!ingredients.length) {
      return Response.json(
        { error: "NO_INGREDIENTS", detail: "Neboli zadané žiadne ingrediencie." },
        { status: 400 }
      );
    }

    // --- Prompt pre OpenAI ---------------------------------------------------
    const prompt = `
Si skúsený šéfkuchár. Vytvor jednoduchý, chutný recept zo zadaných ingrediencií:
${ingredients.join(", ")}.

Odpovedz výlučne v JSON formáte:
{
  "title": "Názov jedla",
  "servings": 2,
  "timeMinutes": 15,
  "ingredients": [
    {"item": "názov suroviny", "amount": "množstvo"},
    ...
  ],
  "steps": ["krok 1", "krok 2", "krok 3"]
}

Použi jazyk: ${lang === "sk" ? "slovenčina" : "angličtina"}.
`;

    // --- Volanie OpenAI API --------------------------------------------------
    const resp = await client.responses.create({
      model: "gpt-4.1-mini", // lacnejší, rýchly model vhodný na text
      input: prompt,
      max_output_tokens: 500,
    });

    const text = resp.output_text || "";
    let data;

    // Pokus o parse čistého JSONu
    try {
      data = JSON.parse(text);
    } catch {
      const match = text.match(/\{[\s\S]*\}/);
      data = match ? JSON.parse(match[0]) : null;
    }

    if (!data) {
      return Response.json(
        { error: "PARSE_ERROR", detail: "Nepodarilo sa spracovať odpoveď modelu." },
        { status: 502 }
      );
    }

    // --- Všetko OK → vráť JSON odpoveď ---------------------------------------
    return Response.json(data, {
      headers: { "Access-Control-Allow-Origin": "*" },
    });

  } catch (e) {
    console.error("Chyba AI volania:", e);

    const msg = String(e?.message || "");
    const isQuota = (e?.status === 429) || /quota|rate limit/i.test(msg);

    if (isQuota) {
      return Response.json(
        { error: "QUOTA", detail: "Prekročený limit alebo chýba kredit (429)." },
        { status: 429 }
      );
    }

    return Response.json(
      { error: "SERVER", detail: msg || "Neznáma chyba servera." },
      { status: 500 }
    );
  }
};
