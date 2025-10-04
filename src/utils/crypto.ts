import { AES, enc } from "crypto-js";

const AESKey = enc.Utf8.parse(process.env.AES_KEY as string);
const AESIV = enc.Utf8.parse(process.env.AES_IV as string);

export const AESEncrypt = (plainText: string, urlSafe = true) => {
  const chiperText = AES.encrypt(plainText, AESKey, { iv: AESIV });
  let base64 = chiperText.toString();

  if (urlSafe) {
    base64 = base64.replace(/\+/g, "-");
    base64 = base64.replace(/\//g, "_");
  }

  return base64;
};

export const AESDecrypt = (chiperText: string, urlSafe = true) => {
  if (urlSafe) {
    chiperText = chiperText.replace(/\-/g, "+");
    chiperText = chiperText.replace(/\_/g, "/");
  }

  const plainText = AES.decrypt(chiperText, AESKey, { iv: AESIV });

  return plainText.toString(enc.Utf8);
};
