import { letters, numbers, symbols } from "./PassGen.consts.js";
import type { Config } from "./PassGen.types";

function generateRandomChar(
  config: Config,
  rnd: () => number = Math.random,
): string {
  const characters = [...letters];

  if (config.useSymbols) {
    characters.push(...symbols);
  }

  if (config.useNumbers) {
    characters.push(...numbers);
  }

  return characters[Math.floor(rnd() * characters.length)];
}

function generateRandomPassword(
  config: Config,
  rnd: () => number = Math.random,
): string {
  let password = "";

  for (let i = 0; i < config.passwordLength; i++) {
    password += generateRandomChar(config, rnd);
  }

  return password;
}

function generateRandomPasswords(
  config: Config,
  rnd: () => number = Math.random,
): [string, string] {
  const password1 = generateRandomPassword(config, rnd);
  const password2 = generateRandomPassword(config, rnd);

  return [password1, password2];
}

export { generateRandomChar, generateRandomPassword, generateRandomPasswords };
