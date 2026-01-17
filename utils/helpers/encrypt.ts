import "react-native-get-random-values";
import CryptoJS from "crypto-js";

const secretKey = process.env.EXPO_PUBLIC_CRYPTO_SECRET_KEY;

function encryptObjectId(objectId: string): string {
  if (secretKey) {
    const encrypted = CryptoJS.AES.encrypt(objectId, secretKey).toString();
    return encrypted.replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/, "");
  }
  return objectId;
}

export default encryptObjectId;
