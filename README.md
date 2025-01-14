# 🧑‍💻 ZEN HOMEPAGE [🌍PT]

Versão em inglês: [README_EN.md](/README_EN.md)

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
  - Papéis de parede obtidos de [https://pixabay.com/](https://pixabay.com/)

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

## Licença e Contribuição

- Licença: [LICENSE](./LICENSE)
- Contribuição: [CONTRIBUTING](./CONTRIBUTING.md)
