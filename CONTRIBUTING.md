# Contribuindo [🌍PT]

Agradeco seu interesse em contribuir para o **ZEN HOMEPAGE**! Este guia contém informações sobre como você pode ajudar a melhorar o projeto.

## Como Contribuir

### Relatar Problemas

Se você encontrou um problema, por favor, crie uma [issue](https://github.com/usuario/repositorio/issues) com uma descrição clara.

### Fazer Fork e Submeter um Pull Request

1. Faça um **fork** do repositório
2. Crie uma branch para sua alteração:
   ```bash
   git checkout -b minha-alteracao
   ```
3. Faça suas modificações e commit:
   ```bash
   git commit -m "Descrição clara do que foi feito"
   ```
4. Envie sua branch para o seu fork:
   ```bash
   git push origin minha-alteracao
   ```
5. Abra um Pull Request explicando suas alterações.

### Como Adicionar Funcionalidades

O projeto está separado em módulos JavaScript para facilitar a manutenção e expansão das funcionalidades. Para adicionar uma nova funcionalidade:

1. Crie um módulo separado para sua funcionalidade (exemplo: `minha_tool.js`).
2. Atualize o `script.js` para integrar seu módulo.
3. Adicione informações detalhadas sobre o novo atalho ou funcionalidade na documentação.

### Estrutura do Projeto

- **script.js:** Arquivo principal que integra todos os módulos.
- **create_new_item.js:** Gerenciador de criação de itens exibidos na interface.
- **[nome]\_\_tool.js:** Scripts para funcionalidades específicas (ex.: `conversion_tool.js`, `favorites_tool.js`).
- **assets/**: Diretório para recursos como ícones e wallpapers.
- **styles/**: Diretório com os estilos CSS utilizados na interface.

---

# Contributing [🌍EN]

Thank you for your interest in contributing to **ZEN HOMEPAGE**! This guide contains information on how you can help improve the project.

## How to Contribute

### Report Issues

If you find an issue, please create an [issue](https://github.com/usuario/repositorio/issues) with a clear description.

### Fork and Submit a Pull Request

1. Fork the repository.
2. Create a branch for your change:
   ```bash
   git checkout -b my-change
   ```
3. Make your modifications and commit:
   ```bash
   git commit -m "Clear description of what was done"
   ```
4. Push your branch to your fork:
   ```bash
   git push origin my-change
   ```
5. Open a Pull Request explaining your changes.

### How to Add Features

The project is divided into JavaScript modules to make maintenance and expansion easier. To add a new feature:

1. Create a separate module for your feature (e.g., `my_tool.js`).
2. Update `script.js` to integrate your module.
3. Add detailed information about the new shortcut or feature in the documentation.

### Project Structure

- **script.js:** Main file that integrates all modules.
- **create_new_item.js:** Item creation manager for the interface.
- **[name]\_\_tool.js:** Scripts for specific functionalities (e.g., `conversion_tool.js`, `favorites_tool.js`).
- **assets/**: Directory for resources like icons and wallpapers.
- **styles/**: Directory with CSS styles used in the interface.
