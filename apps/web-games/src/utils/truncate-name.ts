export function truncateName(name: string, maxLength: number) {
  if (name.length <= maxLength) return name;
  return `${name.slice(0, maxLength)}...`;
}
