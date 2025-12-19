export async function globalSearch(query) {
  if (!query || query.length < 2) return [];

  const base = import.meta.env.VITE_WIX_API_BASE;
  const res = await fetch(`${base}/_functions/search?q=${encodeURIComponent(query)}`);
  if (!res.ok) throw new Error("Search failed");
  return (await res.json()).items;
}
