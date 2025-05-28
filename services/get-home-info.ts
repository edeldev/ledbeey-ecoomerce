import { home } from "./home";

export async function getHomeInfo() {
  const res = await home("home");
  return res.data;
}
