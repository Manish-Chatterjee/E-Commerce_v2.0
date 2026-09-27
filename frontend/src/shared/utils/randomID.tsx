export function randomID(length: number = 8): string {
  return Math.random()
    .toString(36)
    .substring(2, 2 + length);
}

// export const generateId = (): string => {
//   return Math.random().toString(36).substring(2, 10);
// };
