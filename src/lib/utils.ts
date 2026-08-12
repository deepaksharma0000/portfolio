export function cn(...parts: Array<string | false | null | undefined>): string {
  return parts.filter(Boolean).join(" ");
}

export function isPlaceholderUrl(url?: string): boolean {
  if (!url) return true;
  return url.includes("UPDATE_");
}
