import type { Config } from "./PassGen.types.js";
import { generatePasswords } from "./PassGen.utils.js";

export default function PassGen(root: HTMLElement): void {
  const formEl = root.querySelector<HTMLFormElement>("[data-form]")!;
  const password1El = root.querySelector("[data-password-1]")!;
  const password2El = root.querySelector("[data-password-2]")!;

  formEl.addEventListener("submit", submit);

  function submit(e: SubmitEvent): void {
    e.preventDefault();

    if (!(e.target instanceof HTMLFormElement)) return;

    const formData: FormData = new FormData(e.target);

    const config: Config = {
      length: Number(formData.get("pass-length")),
      useNumbers: Boolean(formData.get("use-numbers")),
      useSymbols: Boolean(formData.get("use-symbols")),
    };

    const [password1, password2] = generatePasswords(config);

    password1El.textContent = password1;
    password2El.textContent = password2;
  }
}
