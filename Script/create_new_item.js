const searchBoxForm = document.querySelector(".search-box-form");
const searchBoxResult = document.querySelector(".search-box-result");

// Seleção do container para troca de papel de parede
const container = document.querySelector(".container");
const localStorageWallpaper =
  window.localStorage.getItem("wallpaper") || "wp_6.jpg";
container.style.backgroundImage = `url(/assets/wallpaper/${localStorageWallpaper})`;

// Constantes para classes
const ITEM_CLASS = "search-box-result-item";
const ITEM_ICON_CLASS = "search-box-result-item-icon";
const ITEM_ICON_SPAN_CLASS = "material-symbols-outlined";
const ITEM_CONTENT_CLASS = "search-box-result-item-content";
const ITEM_TITLE_CLASS = "search-box-result-item-content-h2";
const ITEM_SUBTITLE_CLASS = "search-box-result-item-content-p";

const actionSelectingItem = (itemAction, itemData) => {
  switch (itemAction) {
    case "open":
      window.open(itemData);
      console.log(`Abrindo: ${itemData}`);
      break;
    case "copy":
      navigator.clipboard.writeText(itemData);
      console.log(`Copiado para a área de transferência: ${itemData}`);
      break;
    case "changeWallpaper":
      container.style.backgroundImage = `url(/assets/wallpaper/${itemData})`;
      window.localStorage.setItem("wallpaper", itemData);
      break;
    default:
      console.warn("Ação desconhecida:", itemAction);
  }
};

// Função genérica para criar elementos com classe e conteúdo
const createElement = (tag, className, textContent = "") => {
  const element = document.createElement(tag);
  if (className) element.classList.add(className);
  if (textContent) element.textContent = textContent;
  return element;
};

// Criando Item para visualização da ação
export function createNewItem({ icon, title, subtitle, action, data }) {
  const searchBoxItem = createElement("div", ITEM_CLASS);
  searchBoxItem.dataset.data = data;
  searchBoxItem.dataset.action = action;
  searchBoxItem.onclick = () => {actionSelectingItem(action, data)}

  const searchBoxIcon = createElement("div", ITEM_ICON_CLASS);
  const searchBoxIconSpan = createElement("span", ITEM_ICON_SPAN_CLASS, icon);

  const searchBoxContent = createElement("div", ITEM_CONTENT_CLASS);
  const searchBoxContentH2 = createElement("h2", ITEM_TITLE_CLASS, title);
  const searchBoxContentP = createElement("p", ITEM_SUBTITLE_CLASS, subtitle);

  // Construção da estrutura do item
  searchBoxIcon.appendChild(searchBoxIconSpan);
  searchBoxContent.appendChild(searchBoxContentH2);
  searchBoxContent.appendChild(searchBoxContentP);
  searchBoxItem.appendChild(searchBoxIcon);
  searchBoxItem.appendChild(searchBoxContent);

  searchBoxResult.appendChild(searchBoxItem);
}

// Navegar entre os Itens da pesquisa
let itemIndex = -1;
document.addEventListener("keydown", (event) => {
  const searchBoxItems = document.querySelectorAll(`.${ITEM_CLASS}`);
  if (searchBoxItems.length === 0) return;

  // Atualizar índice do item selecionado
  if (event.key === "ArrowUp") {
    itemIndex = (itemIndex - 1 + searchBoxItems.length) % searchBoxItems.length;
  } else if (event.key === "ArrowDown") {
    itemIndex = (itemIndex + 1) % searchBoxItems.length;
  }

  // Destacar item selecionado
  searchBoxItems.forEach((item, index) => {
    if (index === itemIndex) {
      item.style.background = "var(--primary-color)";
      item.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    } else {
      item.style.background = "none";
    }
  });
});

// Ação ao enviar o formulário
searchBoxForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const searchBoxItems = document.querySelectorAll(`.${ITEM_CLASS}`);
  const selectedItem = searchBoxItems[itemIndex];

  if (!selectedItem) {
    console.warn("Nenhum item selecionado.");
    return;
  }

  const { data: itemData, action: itemAction } = selectedItem.dataset;
  actionSelectingItem(itemAction, itemData);
});
