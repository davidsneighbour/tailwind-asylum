export function normalizeBlogId(id: string): string {
  return id.endsWith('/index') ? id.slice(0, -'/index'.length) : id;
}
