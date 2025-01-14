import { createNewItem } from "./create_new_item.js";

const randomPass = (length) => {
  const char =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  let newPassword = "";

  for (let i = 0; i < length; i++) {
    newPassword += char.charAt(Math.floor(Math.random() * char.length)); // O método charAt() retorna o caractere especificado a partir de uma string.
  }
  return newPassword;
};

// Senha aleatória
export function randomPassTool(inputValue) {
  if (/new\s?pass\s?[0-9]{1,2}$/gimy.test(inputValue)) {
    const pass = randomPass(inputValue.replace(/new\s?pass\s?/gi, ""));

    const item = {
      title: `Password generated | ${pass}`,
      subtitle: `Press Enter to copy | ${pass}`,
      icon: "password",
      action: "copy",
      data: pass,
    };
    createNewItem(item);
  }
}
