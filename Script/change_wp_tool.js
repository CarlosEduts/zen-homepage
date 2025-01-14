import { createNewItem } from "./create_new_item.js";

const wallpapers = [
  "wp_1.jpg",
  "wp_2.jpg",
  "wp_3.jpg",
  "wp_4.jpg",
  "wp_5.jpg",
  "wp_6.jpg",
  "wp_7.jpg",
  "wp_8.jpg",
];

// Mostrar Wallpapers disponíveis
export function changeWPTool(inputValue) {
  if (/wp\schange/gmy.test(inputValue)) {
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
