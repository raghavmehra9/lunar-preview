export const formatMaskedEmail = (email: string): string => {
  if (!email) return "";
  const [localPart, domain] = email.split("@");
  if (!localPart || !domain) return email;

  const localLength = localPart.length;

  if (localLength <= 3) {
    return `${"*".repeat(localLength)}@${domain}`;
  }

  const visibleSection = localPart.slice(3);
  const maskedSection = "***";

  return `${maskedSection}${visibleSection}@${domain}`;
};
