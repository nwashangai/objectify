type ObjType = {
  [key: string]: string | number | boolean | null | undefined | ObjType;
};

const extractDifferences = (source: ObjType, target: ObjType): ObjType => {
  const diff: ObjType = {};
  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
      if (
        typeof source[key] === 'object' &&
        source[key] !== null &&
        !Array.isArray(source[key])
      ) {
        const nestedDiff = extractDifferences(
          source[key] as ObjType,
          target[key] as ObjType
        );
        if (Object.keys(nestedDiff).length > 0) {
          diff[key] = nestedDiff;
        }
      } else if (source[key] !== target[key]) {
        diff[key] = source[key];
      }
    }
  }
  return diff;
};

export function getDifference(
  obj1: ObjType,
  obj2: ObjType,
  flag = 1
): ObjType | null {
  let result: ObjType = {};

  if (flag === -1) {
    result = extractDifferences(obj2, obj1);
  } else if (flag === 1) {
    result = extractDifferences(obj1, obj2);
  } else if (flag === 0) {
    const diff1 = extractDifferences(obj1, obj2);
    const diff2 = extractDifferences(obj2, obj1);
    for (const key in diff1) {
      if (Object.prototype.hasOwnProperty.call(diff2, key)) {
        delete diff1[key];
        delete diff2[key];
      }
    }
    result = { ...diff1, ...diff2 };
  }

  return Object.keys(result).length > 0 ? result : null;
}
