export default async (req) => {
  try {
    const body = await req.json();
    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01"
      },
      body: JSON.stringify(body)
    });
    const data = await response.json();
    return Response.json(data);
  } catch (err) {
    return Response.json({ error: "Function error", detail: err.message }, { status: 500 });
  }
};

export const config = { path: "/.netlify/functions/estimate" };
