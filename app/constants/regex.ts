export const REGEX = {
  number: /^[0-9\b]+$/,
  letter: /^[A-Za-z\s]*$/,
  email:
    /^[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+\/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z](?:[a-zA-Z-]*[a-zA-Z])?$/,
  onlyNumber: /^\d*$/,
  onlyLetter: /^[a-zA-ZñÑüÜ]*$/,
  name: /^[a-zA-ZñÑüÜáéíóúÁÉÍÓÚäëïöüÄËÏÖÜ\s]*$/,
};
