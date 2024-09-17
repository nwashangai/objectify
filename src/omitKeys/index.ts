type PlainObject = { [key: string]: unknown };

// Helper function to check if a key should be omitted
const shouldOmit = (keyPath: string, keysToOmit: string[]): boolean => {
  return keysToOmit.some(key => key === keyPath);
};

// Recursive function to omit keys
const omitRecursive = (
  currentObj: PlainObject,
  currentPath: string,
  keysToOmit: string[]
): unknown => {
  if (currentObj === null || typeof currentObj !== 'object') {
    return currentObj;
  }

  if (Array.isArray(currentObj)) {
    return currentObj.reduce((prev: PlainObject[], item, index) => {
      const newPath = currentPath ? `${currentPath}.${index}` : `${index}`;

      if (shouldOmit(newPath, keysToOmit)) {
        return prev;
      } else {
        return [...prev, omitRecursive(item, newPath, keysToOmit)];
      }
    }, []);
  }

  const newObj: PlainObject = {};

  for (const key in currentObj) {
    if (Object.prototype.hasOwnProperty.call(currentObj, key)) {
      const newPath = currentPath ? `${currentPath}.${key}` : key;
      if (!shouldOmit(newPath, keysToOmit)) {
        newObj[key] = omitRecursive(
          currentObj[key] as PlainObject,
          newPath,
          keysToOmit
        );
      }
    }
  }

  return newObj;
};

export function omitKeys<T extends PlainObject | null>(
  obj: T | unknown[],
  keysToOmit: string[]
): T {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  return omitRecursive(obj as PlainObject, '', keysToOmit) as T;
}
