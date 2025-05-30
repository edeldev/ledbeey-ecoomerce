import { BASE_URL, STRAPI_TOKEN } from "@/static/const";

export async function query(url: string) {
  const res = await fetch(`${BASE_URL}/api/${url}`, {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch: ${res.statusText}`);
  }

  return res.json();
}
