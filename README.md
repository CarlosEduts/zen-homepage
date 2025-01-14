# 🧑‍💻 ZEN HOMEPAGE [🌍PT]

## Documentação do Projeto

**ZEN HOMEPAGE** é uma homepage minimalista para navegadores, projetada para oferecer ferramentas práticas como conversões, calculadora, geração de senhas aleatórias, busca personalizada, e muito mais.

### Principais Funcionalidades

- **Ferramentas de conversão:** Conversão de unidades de peso e comprimento.
- **Gerenciamento de favoritos:** Adicionar, listar e deletar favoritos.
- **Calculadora:** Realizar cálculos simples diretamente da barra de entrada.
- **Geração de senhas:** Criar senhas aleatórias seguras.
- **Busca personalizada:** Sistema de atalhos para buscas rápidas em várias plataformas.
- **Personalização de wallpapers:** Escolha entre diferentes fundos para personalizar sua homepage.

---

## Detalhamento dos Módulos

### 1. Busca com Atalhos Personalizados

- **searchTool**: Permite realizar buscas em diversos mecanismos usando atalhos.
  - Entrada: String no formato `ATALHO consulta` (e.g., `g JavaScript`).
  - Saída: URL para a busca no mecanismo escolhido.

##### Motores de Busca Suportados

| Nome           | Atalho | URL Base                                                                                                         |
| -------------- | ------ | ---------------------------------------------------------------------------------------------------------------- |
| Google         | g      | [https://www.google.com/search?q=](https://www.google.com/search?q=)                                             |
| Bing           | b      | [https://www.bing.com/search?q=](https://www.bing.com/search?q=)                                                 |
| Yahoo          | y      | [https://search.yahoo.com/search?p=](https://search.yahoo.com/search?p=)                                         |
| DuckDuckGo     | d      | [https://duckduckgo.com/?q=](https://duckduckgo.com/?q=)                                                         |
| Baidu          | bd     | [https://www.baidu.com/s?wd=](https://www.baidu.com/s?wd=)                                                       |
| Yandex         | ya     | [https://yandex.com/search/?text=](https://yandex.com/search/?text=)                                             |
| Brave Search   | br     | [https://search.brave.com/search?q=](https://search.brave.com/search?q=)                                         |
| WolframAlpha   | wa     | [https://www.wolframalpha.com/input?i=](https://www.wolframalpha.com/input?i=)                                   |
| YouTube        | yt     | [https://www.youtube.com/results?search_query=](https://www.youtube.com/results?search_query=)                   |
| Twitter        | tw     | [https://twitter.com/search?q=](https://twitter.com/search?q=)                                                   |
| Instagram      | ig     | [https://www.instagram.com/explore/search?q=](https://www.instagram.com/explore/search?q=)                       |
| Facebook       | fb     | [https://www.facebook.com/search/top?q=](https://www.facebook.com/search/top?q=)                                 |
| TikTok         | tt     | [https://www.tiktok.com/search?q=](https://www.tiktok.com/search?q=)                                             |
| LinkedIn       | in     | [https://www.linkedin.com/search/results/all/?keywords=](https://www.linkedin.com/search/results/all/?keywords=) |
| Reddit         | rd     | [https://www.reddit.com/search?q=](https://www.reddit.com/search?q=)                                             |
| GitHub         | gh     | [https://github.com/search?q=](https://github.com/search?q=)                                                     |
| Stack Overflow | so     | [https://stackoverflow.com/search?q=](https://stackoverflow.com/search?q=)                                       |
| Medium         | md     | [https://medium.com/search?q=](https://medium.com/search?q=)                                                     |

##### Busca Padrão

- Caso nenhum atalho seja usado, a busca será realizada no Google.

---

### 2. Conversão de Cores

#### Funções Disponíveis

- **hexToRgbTool**: Converte uma cor HEX para RGB.
  - Entrada: String no formato `#RRGGBB to rgb`.
  - Saída: String no formato `rgb(R, G, B)`.
- **rgbToHexTool**: Converte uma cor RGB para HEX.
  - Entrada: String no formato `R, G, B to hex`.
  - Saída: String no formato `#RRGGBB`.
- **randomRGBTool**: Gera uma cor RGB aleatória.
  - Entrada: String `random rgb`.
  - Saída: String no formato `rgb(R, G, B)`.
- **randomHEXTool**: Gera uma cor HEX aleatória.
  - Entrada: String `random hex`.
  - Saída: String no formato `#RRGGBB`.

#### Dependências

- Funções auxiliares para conversão: `hexToRgb`, `rgbToHex`, e `randomNum`.

---

### 3. Conversão de Medidas

#### Funções Disponíveis

- **conversionWeightTool**: Realiza conversões entre unidades de peso e comprimento.
  - Entrada: String no formato `VALOR UNIDADE_ORIGEM to UNIDADE_DESTINO` (e.g., `10 kg to lb`).
  - Saída: Valor convertido e unidade de destino.

#### Conversões Suportadas

- **Peso**:
  - Quilogramas (kg) para Libras (lb) e vice-versa.
  - Gramas (g) para Onças (oz) e vice-versa.
  - Toneladas (t) para Quilogramas (kg) ou Libras (lb) e vice-versa.
- **Comprimento**:
  - Metros (m) para Pés (ft) e vice-versa.
  - Centímetros (cm) para Polegadas (in) e vice-versa.
  - Quilômetros (km) para Milhas (mi) e vice-versa.

#### Dependências

- Objeto `conversionRates`: Contém os fatores de conversão para todas as unidades suportadas.

---

### 4. Gerenciamento de Favoritos

#### Funções Disponíveis

- **addFavoriteUrlTool**: Adiciona uma URL aos favoritos.
  - Entrada: String `fav add URL` para iniciar o processo e `fav add URL y` para confirmar.
  - Saída: URL adicionada à lista de favoritos.
- **deleteAllFavoriteUrlTool**: Remove todos os favoritos.
  - Entrada: String `fav delete all` para iniciar o processo e `fav delete all y` para confirmar.
  - Saída: Todos os favoritos são excluídos.
- **deleteFavoriteUrlTool**: Remove um favorito pelo índice.
  - Entrada: String `fav delete INDEX` para iniciar o processo e `fav delete INDEX y` para confirmar.
  - Saída: Favorito removido com base no índice fornecido.
- **seeFavoriteUrlTool**: Lista todos os favoritos armazenados.
  - Entrada: String `fav`.
  - Saída: Lista de URLs favoritas com seus respectivos índices.

#### Dependências

- Uso do `localStorage` para persistir dados entre sessões.
- Função auxiliar `saveFavorites` para gerenciar atualizações na lista.

---

### 5. Mostrar Wallpapers Disponíveis

- **changeWPTool**: Exibe a lista de wallpapers disponíveis e permite trocar.
  - Entrada: String `wp change`.
  - Saída: Lista de wallpapers com a opção de trocar ao pressionar Enter.

---

### 6. Calculadora

- **calculatorTool**: Realiza cálculos matemáticos simples.
  - Entrada: String contendo uma expressão matemática seguida de `=` (e.g., `5+5=`).
  - Saída: Resultado do cálculo e opção de copiar o valor.

---

### 7. Geração de Senhas Aleatórias

- **randomPassTool**: Gera uma senha aleatória com o número de caracteres especificado.
  - Entrada: String `new pass N` (e.g., `new pass 10`).
  - Saída: Senha gerada e opção de copiar o valor.

---

## Como colaborar

O projeto está separado em módulos JavaScript para facilitar a manutenção e expansão das funcionalidades:

- **script.js:** Código principal que importa e gerencia os módulos.
- **\_\*\_tool.js:** Scripts dedicados às ferramentas de busca e funcionalidades específicas.

### Passos para colaborar:

1. Faça um **fork** do projeto.
2. Adicione suas funcionalidades no formato de um módulo separado (ex.: `minha_tool.js`).
3. Atualize o `script.js` para integrar seu módulo.
4. Adicione informações detalhadas sobre o novo atalho ou funcionalidade na documentação.
5. Envie um **pull request** com suas alterações.

---

## Estrutura do Projeto

- **script.js:** Arquivo principal que integra todos os módulos.
- **create_new_item.js:** Gerenciador de criação de itens exibidos na interface.
- **[nome]\_\_tool.js:** Scripts para funcionalidades específicas (ex.: `conversion_tool.js`, `favorites_tool.js`).
- **assets/**: Diretório para recursos como ícones e wallpapers.
- **styles/**: Diretório com os estilos CSS utilizados na interface.

---

## Padrões e Convenções

- **Entrada e Saída**: Todas as interações são baseadas em strings com formatos predefinidos para garantir consistência.
- **Interface de Usuário**: Cada função usa `createNewItem` para exibir os resultados e mensagens relevantes.
- **Validação de Dados**: Expressões regulares (“regex”) são usadas extensivamente para garantir que as entradas estejam no formato esperado.

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
