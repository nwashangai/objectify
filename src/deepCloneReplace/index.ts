import { RecursivePartial } from '../types/common-types';

type Primitive = string | number | boolean;
type SourceType = {
  [key: string]: Primitive | SourceType | Primitive[] | SourceType[];
};
type IDeepCloneReplace<T> = RecursivePartial<T> & {
  [key: string]: string | number | boolean | IDeepCloneReplace<T> | undefined;
};

export function merge<T>(target: T, source: SourceType) {
  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (
        source[key] &&
        typeof source[key] === 'object' &&
        !Array.isArray(source[key])
      ) {
        if (!target[key as keyof T]) {
          target[key as keyof T] = {} as unknown as T[keyof T];
        }
        merge(target[key as keyof T], source[key] as SourceType);
      } else if (Array.isArray(source[key])) {
        target[key as keyof T] = [
          ...(source[key] as SourceType[]),
        ] as unknown as T[keyof T];
      } else {
        target[key as keyof T] = source[key] as unknown as T[keyof T];
      }
    }
  }
}

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

// Function takes a possible nested object and a possible nested key value pair and returns a deep clone of the object with the key value pair replaced. If the key does not exist in the object, add it to the new object.
export function deepCloneReplace<T>(obj: T, extraObj?: SourceType): T {
  if (!extraObj) {
    return deepClone(obj);
  }

  const clone = deepClone(obj);

  merge(clone, extraObj);

  return clone;
}
