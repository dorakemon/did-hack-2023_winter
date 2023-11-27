export const formatQr = (value: any) => {
  try {
    const json = JSON.parse(value);
    const challenge = json['challenge'] as string;
    const toDid = json['did'] as string;
    return {
      challenge,
      toDid,
    };
  } catch {
    return false;
  }
};
