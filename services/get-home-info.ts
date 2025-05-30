import { query } from "./strapi";

export async function getHomeInfo() {
  const res = await query("home");
  return res.data;
}
