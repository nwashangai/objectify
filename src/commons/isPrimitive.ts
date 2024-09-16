export function isPrimitive(value: unknown): boolean {
  const type = typeof value;
  return (
    value === null ||
    type === 'boolean' ||
    type === 'number' ||
    type === 'string' ||
    type === 'symbol' ||
    type === 'undefined' ||
    type === 'bigint'
  );
}
