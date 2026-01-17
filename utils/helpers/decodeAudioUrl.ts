import { Buffer } from "buffer";

const decodeAudioUrl = (encryptedStr: string, key: string): string => {
  const decoded = decodeBase64(encryptedStr);
  const decodedUrl = decoded
    .split("")
    .map((char, i) =>
      String.fromCharCode(char.charCodeAt(0) ^ key.charCodeAt(i % key.length))
    )
    .join("");

  return decodedUrl;
};

const decodeBase64 = (str: string): string => {
  return Buffer.from(str, "base64").toString("utf-8");
};

export default decodeAudioUrl;
