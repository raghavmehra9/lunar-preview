export const isFormIncomplete = <T extends Record<string, any>>(
  formData: T,
  requiredFields: (keyof T)[]
): boolean => {
  return requiredFields.some(
    (field) =>
      formData[field] === "" ||
      formData[field] === undefined ||
      formData[field] === null ||
      (typeof formData[field] === "number" && isNaN(formData[field]))
  );
};
