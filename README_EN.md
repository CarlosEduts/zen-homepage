# 🧑‍💻 ZEN HOMEPAGE [🌍EN]

## Project Documentation

**ZEN HOMEPAGE** is a minimalist browser homepage designed to offer practical tools such as conversions, a calculator, random password generation, custom search, and much more.

### Key Features

- **Conversion Tools:** Conversion of weight and length units.
- **Favorite Management:** Add, list, and delete favorites.
- **Calculator:** Perform simple calculations directly from the input bar.
- **Password Generation:** Create random secure passwords.
- **Custom Search:** Shortcut system for quick searches on various platforms.
- **Wallpaper Customization:** Choose from different backgrounds to personalize your homepage.

---

## Module Details

### 1. Custom Shortcut Search

- **searchTool**: Allows performing searches across various search engines using shortcuts.
  - Input: String in the format `SHORTCUT query` (e.g., `g JavaScript`).
  - Output: URL for the search on the selected engine.

##### Supported Search Engines

| Name           | Shortcut | Base URL                                                                                                         |
| -------------- | -------- | ---------------------------------------------------------------------------------------------------------------- |
| Google         | g        | [https://www.google.com/search?q=](https://www.google.com/search?q=)                                             |
| Bing           | b        | [https://www.bing.com/search?q=](https://www.bing.com/search?q=)                                                 |
| Yahoo          | y        | [https://search.yahoo.com/search?p=](https://search.yahoo.com/search?p=)                                         |
| DuckDuckGo     | d        | [https://duckduckgo.com/?q=](https://duckduckgo.com/?q=)                                                         |
| Baidu          | bd       | [https://www.baidu.com/s?wd=](https://www.baidu.com/s?wd=)                                                       |
| Yandex         | ya       | [https://yandex.com/search/?text=](https://yandex.com/search/?text=)                                             |
| Brave Search   | br       | [https://search.brave.com/search?q=](https://search.brave.com/search?q=)                                         |
| WolframAlpha   | wa       | [https://www.wolframalpha.com/input?i=](https://www.wolframalpha.com/input?i=)                                   |
| YouTube        | yt       | [https://www.youtube.com/results?search_query=](https://www.youtube.com/results?search_query=)                   |
| Twitter        | tw       | [https://twitter.com/search?q=](https://twitter.com/search?q=)                                                   |
| Instagram      | ig       | [https://www.instagram.com/explore/search?q=](https://www.instagram.com/explore/search?q=)                       |
| Facebook       | fb       | [https://www.facebook.com/search/top?q=](https://www.facebook.com/search/top?q=)                                 |
| TikTok         | tt       | [https://www.tiktok.com/search?q=](https://www.tiktok.com/search?q=)                                             |
| LinkedIn       | in       | [https://www.linkedin.com/search/results/all/?keywords=](https://www.linkedin.com/search/results/all/?keywords=) |
| Reddit         | rd       | [https://www.reddit.com/search?q=](https://www.reddit.com/search?q=)                                             |
| GitHub         | gh       | [https://github.com/search?q=](https://github.com/search?q=)                                                     |
| Stack Overflow | so       | [https://stackoverflow.com/search?q=](https://stackoverflow.com/search?q=)                                       |
| Medium         | md       | [https://medium.com/search?q=](https://medium.com/search?q=)                                                     |

##### Default Search

- If no shortcut is used, the search will be performed on Google.

---

### 2. Color Conversion

#### Available Functions

- **hexToRgbTool**: Converts a HEX color to RGB.
  - Input: String in the format `#RRGGBB to rgb`.
  - Output: String in the format `rgb(R, G, B)`.
- **rgbToHexTool**: Converts an RGB color to HEX.
  - Input: String in the format `R, G, B to hex`.
  - Output: String in the format `#RRGGBB`.
- **randomRGBTool**: Generates a random RGB color.
  - Input: String `random rgb`.
  - Output: String in the format `rgb(R, G, B)`.
- **randomHEXTool**: Generates a random HEX color.
  - Input: String `random hex`.
  - Output: String in the format `#RRGGBB`.

#### Dependencies

- Helper functions for conversion: `hexToRgb`, `rgbToHex`, and `randomNum`.

---

### 3. Unit Conversion

#### Available Functions

- **conversionWeightTool**: Converts between weight and length units.
  - Input: String in the format `VALUE SOURCE_UNIT to DESTINATION_UNIT` (e.g., `10 kg to lb`).
  - Output: Converted value and destination unit.

#### Supported Conversions

- **Weight**:
  - Kilograms (kg) to Pounds (lb) and vice versa.
  - Grams (g) to Ounces (oz) and vice versa.
  - Tons (t) to Kilograms (kg) or Pounds (lb) and vice versa.
- **Length**:
  - Meters (m) to Feet (ft) and vice versa.
  - Centimeters (cm) to Inches (in) and vice versa.
  - Kilometers (km) to Miles (mi) and vice versa.

#### Dependencies

- `conversionRates` object: Contains conversion factors for all supported units.

---

### 4. Favorite Management

#### Available Functions

- **addFavoriteUrlTool**: Adds a URL to the favorites list.
  - Input: String `fav add URL` to start the process and `fav add URL y` to confirm.
  - Output: URL added to the favorites list.
- **deleteAllFavoriteUrlTool**: Removes all favorites.
  - Input: String `fav delete all` to start the process and `fav delete all y` to confirm.
  - Output: All favorites are deleted.
- **deleteFavoriteUrlTool**: Removes a favorite by index.
  - Input: String `fav delete INDEX` to start the process and `fav delete INDEX y` to confirm.
  - Output: Favorite removed based on the provided index.
- **seeFavoriteUrlTool**: Lists all stored favorites.
  - Input: String `fav`.
  - Output: List of favorite URLs with their respective indices.

#### Dependencies

- Uses `localStorage` to persist data between sessions.
- Helper function `saveFavorites` to manage updates to the list.

---

### 5. Show Available Wallpapers

- **changeWPTool**: Displays the list of available wallpapers and allows changing.
  - Input: String `wp change`.
  - Output: List of wallpapers with the option to change by pressing Enter.

---

### 6. Calculator

- **calculatorTool**: Performs simple mathematical calculations.
  - Input: String containing a mathematical expression followed by `=` (e.g., `5+5=`).
  - Output: Calculation result and option to copy the value.

---

### 7. Random Password Generation

- **randomPassTool**: Generates a random password with the specified number of characters.
  - Input: String `new pass N` (e.g., `new pass 10`).
  - Output: Generated password and option to copy the value.

---

## How to Contribute

The project is divided into JavaScript modules for easy maintenance and expansion of features:

- **script.js:** Main code that imports and manages the modules.
- **\_\*\_tool.js:** Scripts dedicated to search tools and specific functionalities.

### Steps to Contribute:

1. Fork the project.

2. Add your features as a separate module (e.g., `my_tool.js`).

3. Update `script.js` to integrate your module.

4. Add detailed information about the new shortcut or feature in the documentation.

5. Submit a pull request with your changes.

---

## Project Structure

- **script.js:** Main file that integrates all modules.
- **create_new_item.js:** Manages the creation of items displayed in the interface.
- **[name]\_\_tool.js:** Scripts for specific functionalities (e.g., `conversion_tool.js`, `favorites_tool.js`).
- **assets/**: Directory for resources such as icons and wallpapers.
- **styles/**: Directory containing the CSS styles used in the interface.

---

## Standards and Conventions

- **Input and Output**: All interactions are based on strings with predefined formats to ensure consistency.
- **User Interface**: Each function uses `createNewItem` to display results and relevant messages.
- **Data Validation**: Regular expressions (“regex”) are extensively used to ensure inputs are in the expected format.
