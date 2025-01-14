import { createNewItem } from "./create_new_item.js";

// Fazer calculos
export function calculatorTool(inputValue) {
  if (/=/gmy.test(inputValue)) {
    const calc = eval(inputValue.replace(/=/g, "")) || "";

    const item = {
      title: calc,
      subtitle: `Press Enter to copy | ${calc}`,
      icon: "calculate",
      action: "copy",
      data: calc,
    };

    createNewItem(item);
  }
}
