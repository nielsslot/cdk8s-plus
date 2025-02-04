export function undefinedIfEmpty<T>(obj: T): T | undefined {
  if (typeof(obj) === 'string' && obj === '') { return undefined; }
  if (Array.isArray(obj) && obj.length === 0) { return undefined; }
  if (typeof(obj) === 'object' && (Object.keys(obj).length === 0 || Object.values(obj).filter(x => x).length === 0)) { return undefined; }
  return obj;
}

export function filterUndefined(obj: any): any {
  const ret: any = {};
  for (const [k, v] of Object.entries(obj)) {
    if (v !== undefined) {
      ret[k] = v;
    }
  }
  return ret;
}
