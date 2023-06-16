# Desafio Final do Curso Explorer

## Food Explorer
Este é um projeto/frontend que oferece funcionalidades relacionadas a um sistema de entrega para restaurantes. Faz parte do projeto final do curso Explorer da RocketSeat. Consome a api [rocketfood-backend](https://github.com/susileal/rocketfood-backend)

## Funcionalidades desta versão
  - Menu interativo para um restaurante fictício;
  - Simulando um restaurante de acordo com o layout disponibilizado no Figma;
  - Possui dois tipos de usuário: o admin e o usuário;

 ### 1. Admin, responsável pelo restaurante, poderá:
- Criar;
- Visualizar;
- Editar; e 
- Apagar um prato
  - O Prato deve conter: 
    - imagem;
    - nome;
    - categoria;
    - breve descrição;
    - ingredientes; e 
    - preço. 
- Ao clicar em adicionar prato, o admin receberá uma mensagem de sucesso e será redirecionado para a página principal;
- Obs: O backend cria um usuário admin ao publicar a aplicação: 
    ```
    login: admin@admin.com 
    senha: 123456
    ```

### 2. O Usuário, cliente do restaurante, poderá:
- Se cadastrar na aplicação
- Visualizar todos os pratos cadastrados do restaurante
- Detalhar um prato para ver mais informações sobre ele

## Imagens do sistema

<div align="center">
  <div><strong>1 - Login</strong></div>
  <img src="/src/assets/login.jpg">
</div>

<div align="center">
  <div><strong>2 - Home</strong></div>
  <img src="/src/assets/home.jpg">
</div>

<div align="center">
  <div><strong>3 - Detalhar Prato</strong></div>
  <img src="/src/assets/dish-detail.jpg">
</div>
