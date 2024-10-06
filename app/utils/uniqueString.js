export function generateUniqueString(code, length = 12) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = code;
  const charactersLength = characters.length;

  for (let i = 0; i < length; i++) {
    if (result.length <= length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
  }

  return result;
}
