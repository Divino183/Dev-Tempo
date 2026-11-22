# 🌦️ App de Previsão do Tempo

Aplicativo de previsão do tempo desenvolvido utilizando **React Native**, **Expo**, **StyleSheet** e a **API da OpenWeather**, permitindo realizar buscas pelo nome da cidade ou pela localização atual do celular.

---

## 📱 Funcionalidades

- 🔍 **Busca por cidade:** Pesquise a previsão do tempo de qualquer cidade do mundo pelo nome.
- 📍 **Geolocalização:** Obtenha os dados climáticos automaticamente com base na localização atual do dispositivo.
- 🌡️ **Dados meteorológicos:** Exibição de temperatura atual, sensação térmica, umidade, velocidade do vento e condições climáticas (céu limpo, chuva, nublado, etc.).
- 🎨 **Interface responsiva:** Estilização nativa construída com `StyleSheet`.

---

## 🛠️ Tecnologias Utilizadas

- [React Native](https://reactnative.dev)
- [Expo](https://expo.dev)
- [Expo Location](https://expo.dev) *(para acesso ao GPS)*
- [OpenWeather API](https://openweathermap.org)
- `StyleSheet` (estilização)

---

## 🚀 Como executar o projeto

### Pré-requisitos
Antes de começar, você vai precisar ter instalado em sua máquina:
- [Node.js](https://nodejs.org)
- [Git](https://git-scm.com)
- Aplicativo **Expo Go** instalado no seu celular (Android ou iOS) ou um emulador configurado.
- Uma chave de API gratuita da [OpenWeather](https://openweathermap.org).

### Passo a passo

1. **Clone este repositório:**
   ```bash
   git clone https://github.com/Divino183/Dev-Tempo.git
   ```

2. **Acesse a pasta do projeto:**
   ```bash
   cd nome-do-repositorio
   ```

3. **Instale as dependências:**
   ```bash
   npm install
   ```

4. **Configure as variáveis de ambiente:**
   Crie um arquivo `.env` na raiz do projeto (ou insira no local configurado no seu código) e adicione sua chave e url da API:
   ```env
   EXPO_PUBLIC_OPENWEATHER_KEY_API=sua_chave_aqui
   EXPO_PUBLIC_BASE_URL=ulr da api
   ```

5. **Inicie o servidor do Expo:**
   ```bash
   npm start
   ```

6. **Abra o app:**
   Escaneie o QR Code gerado no terminal usando o aplicativo **Expo Go** (Android) ou a câmera nativa (iOS).

---

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 👨‍💻 Autor

Desenvolvido por **[Divino Gomes](https://github.com/Divino183)**.  
Entre em contato pelo [LinkedIn](https://www.linkedin.com/in/valdivinog/).
