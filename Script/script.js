import { calculatorTool } from "./calculator_tool.js";
import {
  hexToRgbTool,
  rgbToHexTool,
  randomRGBTool,
  randomHEXTool,
} from "./colors_tool.js";
import { conversionTool } from "./conversion_rates_tool.js";
import { randomPassTool } from "./random_pass_tool.js";
import {
  addFavoriteUrlTool,
  seeFavoriteUrlTool,
  deleteAllFavoriteUrlTool,
  deleteFavoriteUrlTool,
} from "./favorite_urls_tool.js";
import { changeWPTool } from "./change_wp_tool.js";
import { searchTool } from "./search_too.js";

// Seleção de elementos
const searchBoxInput = document.querySelector(".search-box-input");
const searchBoxResult = document.querySelector(".search-box-result");

// Função para alternar visibilidade
const toggleVisibility = (element, condition) => {
  element.style.display = condition ? "block" : "none";
};

// Lista de ferramentas
const tools = [
  calculatorTool,
  hexToRgbTool,
  rgbToHexTool,
  randomRGBTool,
  randomHEXTool,
  conversionTool,
  randomPassTool,
  addFavoriteUrlTool,
  seeFavoriteUrlTool,
  deleteAllFavoriteUrlTool,
  deleteFavoriteUrlTool,
  changeWPTool,
  searchTool,
];

// Adiciona evento de input
searchBoxInput.addEventListener("input", () => {
  const inputValue = searchBoxInput.value.trim();
  searchBoxResult.textContent = "";

  // Mudar visibilidade do resultado
  toggleVisibility(searchBoxResult, !!inputValue);

  // Executar ferramentas
  tools.forEach((tool) => tool(inputValue));
});
