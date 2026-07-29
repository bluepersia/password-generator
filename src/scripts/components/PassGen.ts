import { generateRandomPasswords } from "./PassGen.utils.js";
import type { Config } from "./PassGen.types";

export default function PassGen(root: HTMLElement): void {
  const formEl: HTMLFormElement =
    root.querySelector<HTMLFormElement>("[data-form]")!;

  const password1El: HTMLElement = root.querySelector("[data-password-1]")!;
  const password2El: HTMLElement = root.querySelector("[data-password-2]")!;

  const outputEl: HTMLElement = root.querySelector("[data-output]")!;

  formEl.addEventListener("submit", handleSubmit);

  function handleSubmit(e: SubmitEvent): void {
    e.preventDefault();

    if (!(e.target instanceof HTMLFormElement)) return;

    const formData: FormData = new FormData(e.target);

    const config: Config = {
      useSymbols: Boolean(formData.get("use-symbols")),
      useNumbers: Boolean(formData.get("use-numbers")),
      passwordLength: Number(formData.get("password-length")),
    };

    const [password1, password2] = generateRandomPasswords(config);

    renderPasswords(password1, password2);
  }

  function renderPasswords(password1: string, password2: string): void {
    password1El.textContent = password1;
    password2El.textContent = password2;
    outputEl.focus();
  }
}
