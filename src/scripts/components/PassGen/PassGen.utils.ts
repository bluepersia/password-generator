import { LETTERS, NUMBERS, SYMBOLS } from "./PassGen.consts.js";
import type { Config } from "./PassGen.types.js";

function generateRandomChar(config: Config, random: () => number): string {
  const allChars = [...LETTERS];

  if (config.useNumbers) allChars.push(...NUMBERS);

  if (config.useSymbols) allChars.push(...SYMBOLS);

  return allChars[Math.floor(random() * allChars.length)];
}

function generateRandomPassword(config: Config): string {
  let result = "";

  for (let i = 0; i < config.length; i++) {
    result += generateRandomChar(config, Math.random);
  }

  return result;
}

function generatePasswords(config: Config): [string, string] {
  const password1 = generateRandomPassword(config);
  const password2 = generateRandomPassword(config);

  return [password1, password2];
}

export { generatePasswords };
