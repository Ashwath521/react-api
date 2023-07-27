export default function RandomJWTGen() {
  const characters =
    "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let fakeRandomKey = "";

  for (let i = 0; i < 30; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    fakeRandomKey += characters.charAt(randomIndex);
  }

  return fakeRandomKey;
}
