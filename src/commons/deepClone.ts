// Function to deep clone an object
export function deepClone<T>(obj: T): T {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    const arrCopy = [];
    for (const item of obj) {
      arrCopy.push(deepClone(item));
    }
    return arrCopy as unknown as T;
  }

  const objCopy: { [K in keyof T]: T[K] } = {} as { [K in keyof T]: T[K] };
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      objCopy[key] = deepClone(obj[key]);
    }
  }

  return objCopy as T;
}
