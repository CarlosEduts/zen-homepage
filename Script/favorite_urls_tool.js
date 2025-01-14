import { createNewItem } from "./create_new_item.js";

// Carregar favoritos do localStorage
let favorites = JSON.parse(window.localStorage.getItem("favorites")) || [];

// Função auxiliar para salvar favoritos no localStorage
const saveFavorites = () => {
  window.localStorage.setItem("favorites", JSON.stringify(favorites));
};

// Adicionar um favorito - "fav add (url)"
export function addFavoriteUrlTool(inputValue) {
  // Informar que será adicionado ao pressionar "y"
  if (/fav\sadd\s?https?:.{5,}[^y]$/gimy.test(inputValue)) {
    const favorite = inputValue.replace(/fav\sadd\s?/gi, "").trim();

    createNewItem({
      title: `Press "y" to add to favorites`,
      subtitle: `Favorite | ${favorite}`,
      icon: "star",
      action: "",
      data: favorite,
    });
  }

  // Adicionar favorito ao pressionar "y"
  if (/fav\sadd\s?https?:.{5,}\s?y$/gimy.test(inputValue)) {
    const favorite = inputValue
      .replace(/fav\sadd\s?/gi, "")
      .replace(/y$/gi, "")
      .trim();
    favorites.push(favorite);
    saveFavorites();

    createNewItem({
      title: `New favorite created | ${favorite}`,
      subtitle: `Favorite created successfully`,
      icon: "star",
      action: "",
      data: favorite,
    });
  }
}

// Deletar todos os favoritos - "fav delete all"
export function deleteAllFavoriteUrlTool(inputValue) {
  // Informar que será deletado ao pressionar "y"
  if (/fav\sdelete\s?all$/gimy.test(inputValue)) {
    createNewItem({
      title: `Press "y" to delete all your favorites`,
      subtitle: `All favorites will be deleted`,
      icon: "delete",
      action: "",
      data: "",
    });
  }

  // Deletar todos os favoritos ao pressionar "y"
  if (/fav\sdelete\s?all\s?y$/gimy.test(inputValue)) {
    favorites = [];
    saveFavorites();

    createNewItem({
      title: `All favorites have been deleted.`,
      subtitle: `All favorites have been deleted.`,
      icon: "delete",
      action: "",
      data: "",
    });
  }
}

// Deletar favorito pelo índice - "fav delete (index)"
export function deleteFavoriteUrlTool(inputValue) {
  // Informar que será deletado ao pressionar "y"
  if (/fav\sdelete\s?\d+$/gimy.test(inputValue)) {
    const index = parseInt(
      inputValue.replace(/fav\sdelete\s?/gi, "").trim(),
      10
    );

    createNewItem({
      title: `Press "y" to delete the favorite at index ${index}`,
      subtitle: `Press "y" to delete the favorite at index ${index}`,
      icon: "delete",
      action: "",
      data: "",
    });
  }

  // Deletar favorito ao pressionar "y"
  if (/fav\sdelete\s?\d+\s?y$/gimy.test(inputValue)) {
    const index = parseInt(
      inputValue.replace(/fav\sdelete\s?/gi, "").trim(),
      10
    );

    if (index >= 0 && index < favorites.length) {
      const deletedFavorite = favorites.splice(index, 1);
      saveFavorites();

      createNewItem({
        title: `Your favorite at index ${index} has been deleted`,
        subtitle: `Deleted: ${deletedFavorite}`,
        icon: "delete",
        action: "",
        data: "",
      });
    } else {
      createNewItem({
        title: `Invalid index`,
        subtitle: `No favorite found at index ${index}`,
        icon: "error",
        action: "",
        data: "",
      });
    }
  }
}

// Ver todos os favoritos - "fav"
export function seeFavoriteUrlTool(inputValue) {
  if (/^fav$/gimy.test(inputValue)) {
    if (favorites.length === 0) {
      createNewItem({
        title: `No favorites found`,
        subtitle: `Your favorites list is empty`,
        icon: "star_outline",
        action: "",
        data: "",
      });
    } else {
      favorites.forEach((favorite, index) => {
        createNewItem({
          title: `${favorite}`,
          subtitle: `Index: ${index}`,
          icon: "star",
          action: "open",
          data: favorite,
        });
      });
    }
  }
}
