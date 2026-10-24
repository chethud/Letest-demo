/** Demo-only client hash — not suitable for production auth. */
export function demoHash(value: string): string {
  let hash = 2166136261;
  for (let i = 0; i < value.length; i += 1) {
    hash ^= value.charCodeAt(i);
    hash = Math.imul(hash, 16777619);
  }
  return `demo_${(hash >>> 0).toString(16)}`;
}
