import { createNewItem } from "./create_new_item.js";

const engines = [
  { nome: "Google", url_base: "https://www.google.com/search?q=", atalho: "g" },
  { nome: "Bing", url_base: "https://www.bing.com/search?q=", atalho: "b" },
  {
    nome: "Yahoo",
    url_base: "https://search.yahoo.com/search?p=",
    atalho: "y",
  },
  { nome: "DuckDuckGo", url_base: "https://duckduckgo.com/?q=", atalho: "d" },
  { nome: "Baidu", url_base: "https://www.baidu.com/s?wd=", atalho: "bd" },
  {
    nome: "Yandex",
    url_base: "https://yandex.com/search/?text=",
    atalho: "ya",
  },
  {
    nome: "Brave Search",
    url_base: "https://search.brave.com/search?q=",
    atalho: "br",
  },
  {
    nome: "WolframAlpha",
    url_base: "https://www.wolframalpha.com/input?i=",
    atalho: "wa",
  },
  { nome: "ChatGPT", url_base: "https://chat.openai.com/?q=", atalho: "gpt" },
  {
    nome: "YouTube",
    url_base: "https://www.youtube.com/results?search_query=",
    atalho: "yt",
  },
  { nome: "Twitter", url_base: "https://twitter.com/search?q=", atalho: "tw" },
  {
    nome: "Instagram",
    url_base: "https://www.instagram.com/explore/search?q=",
    atalho: "ig",
  },
  {
    nome: "Facebook",
    url_base: "https://www.facebook.com/search/top?q=",
    atalho: "fb",
  },
  {
    nome: "TikTok",
    url_base: "https://www.tiktok.com/search?q=",
    atalho: "tt",
  },
  {
    nome: "LinkedIn",
    url_base: "https://www.linkedin.com/search/results/all/?keywords=",
    atalho: "in",
  },
  {
    nome: "Reddit",
    url_base: "https://www.reddit.com/search?q=",
    atalho: "rd",
  },
  { nome: "GitHub", url_base: "https://github.com/search?q=", atalho: "gh" },
  {
    nome: "Stack Overflow",
    url_base: "https://stackoverflow.com/search?q=",
    atalho: "so",
  },
  { nome: "Medium", url_base: "https://medium.com/search?q=", atalho: "md" },
];

// Função para construir URL de busca
const buildSearchUrl = (engine, inputValue) => {
  const query = inputValue
    .trim()
    .replace(new RegExp(`^${engine.atalho}\\s+`, "i"), "")
    .replace(/ /g, "+");
  return `${engine.url_base}${query}`;
};

// Buscar na internet com atalhos
export function searchTool(inputValue) {
  engines.forEach(({ nome, url_base, atalho }) => {
    const regex = new RegExp(`^${atalho}\\s`, "i");
    if (regex.test(inputValue.trim())) {
      const url = buildSearchUrl({ nome, url_base, atalho }, inputValue);

      const item = {
        title: `Search on ${nome} | ${inputValue.replace(regex, "").trim()}`,
        subtitle: `Search on ${nome} | ${url}`,
        icon: "public",
        action: "open",
        data: url,
      };

      createNewItem(item);
    }
  });

  // Busca padrão
  const patternUrl = `https://www.google.com/search?q=${inputValue.replace(
    / /g,
    "+"
  )}`;
  const item = {
    title: `Search on Google | ${inputValue}`,
    subtitle: `Google | ${patternUrl}`,
    icon: "language",
    action: "open",
    data: patternUrl,
  };
  createNewItem(item);
}
