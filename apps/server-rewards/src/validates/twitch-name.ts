export const validateTwitchName = (name: string) => {
  return /^[a-zA-Z0-9_]{4,25}(\.[a-zA-Z0-9_]{1,25})?$/.test(name);
};
