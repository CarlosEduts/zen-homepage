import { createNewItem } from "./create_new_item.js";

const wallpapers = [
  "bridge.jpg",
  "clouds.jpg",
  "dog-art.jpg",
  "floral.jpg",
  "flowers.jpg",
  "grass.jpg",
  "plouzane.jpg",
  "seascape.jpg",
  "sheets.jpg",
  "stairs.jpg"
];

// Mostrar Wallpapers disponíveis
export function changeWPTool(inputValue) {
  if (/wp\schange/gimy.test(inputValue)) {
    wallpapers.map((wallpaper) => {
      const item = {
        title: `Wallpaper | ${wallpaper}`,
        subtitle: `Press Enter to change`,
        icon: "wallpaper",
        action: "changeWallpaper",
        data: wallpaper,
      };
      createNewItem(item);
    });
  }
}
