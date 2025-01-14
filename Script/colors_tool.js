import { createNewItem } from "./create_new_item.js";

// Função auxiliar para converter HEX para RGB
const hexToRgb = (hex) => {
  const expandedHex = hex.replace(
    /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
    (m, r, g, b) => `${r}${r}${g}${g}${b}${b}`
  );
  const rgb = expandedHex
    .replace(/^#/, "")
    .match(/.{2}/g)
    .map((x) => parseInt(x, 16));
  return rgb;
};

// Função auxiliar para converter RGB para HEX
const rgbToHex = (rgb) => {
  const rgbArray = rgb.split(",").map((x) => parseInt(x.trim(), 10));
  return `#${rgbArray.map((x) => x.toString(16).padStart(2, "0")).join("")}`;
};

// Função auxiliar para gerar números aleatórios
const randomNum = (max) => Math.round(Math.random() * max);

// Expressões regulares para validações
const HEX_TO_RGB_REGEX =
  /^#?([a-f\d])([a-f\d])?([a-f\d])([a-f\d])?([a-f\d])([a-f\d])?\s?to\s?rgb$/i;
const RGB_TO_HEX_REGEX = /\d{1,3}\s?,\s?\d{1,3}\s?,\s?\d{1,3}\s?to\s?hex/i;
const RANDOM_RGB_REGEX = /random\s?rgb/i;
const RANDOM_HEX_REGEX = /random\s?hex/i;

// Função para converter HEX para RGB
export function hexToRgbTool(inputValue) {
  if (HEX_TO_RGB_REGEX.test(inputValue)) {
    const cleanInput = inputValue.replace(/\s?to\s?rgb$/i, "");
    const rgb = hexToRgb(cleanInput);

    createNewItem({
      title: `HEX to RGB | rgb(${rgb.join(", ")})`,
      subtitle: `Press Enter to copy | rgb(${rgb.join(", ")})`,
      icon: "invert_colors",
      action: "copy",
      data: `rgb(${rgb.join(", ")})`,
    });
  }
}

// Função para converter RGB para HEX
export function rgbToHexTool(inputValue) {
  if (RGB_TO_HEX_REGEX.test(inputValue)) {
    const cleanInput = inputValue.replace(/\s?to\s?hex$/i, "");
    const hex = rgbToHex(cleanInput);

    createNewItem({
      title: `RGB to HEX | ${hex}`,
      subtitle: `Press Enter to copy | ${hex}`,
      icon: "invert_colors",
      action: "copy",
      data: hex,
    });
  }
}

// Função para gerar uma cor RGB aleatória
export function randomRGBTool(inputValue) {
  if (RANDOM_RGB_REGEX.test(inputValue)) {
    const color = `rgb(${randomNum(255)}, ${randomNum(255)}, ${randomNum(
      255
    )})`;

    createNewItem({
      title: `Generate a random RGB color | ${color}`,
      subtitle: `Press Enter to copy | ${color}`,
      icon: "invert_colors",
      action: "copy",
      data: color,
    });
  }
}

// Função para gerar uma cor HEX aleatória
export function randomHEXTool(inputValue) {
  if (RANDOM_HEX_REGEX.test(inputValue)) {
    const color = rgbToHex(
      `${randomNum(255)}, ${randomNum(255)}, ${randomNum(255)}`
    );

    createNewItem({
      title: `Generate a random HEX color | ${color}`,
      subtitle: `Press Enter to copy | ${color}`,
      icon: "invert_colors",
      action: "copy",
      data: color,
    });
  }
}
