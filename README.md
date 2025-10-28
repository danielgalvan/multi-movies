# 🎬 Multi Movies

Este projeto foi criado com [Create React App](https://github.com/facebook/create-react-app).

---

## ⚙️ Configuração do Ambiente

### 1. Instalar o Node.js
Baixe e instale o Node.js pelo site oficial:  
[https://nodejs.org/pt](https://nodejs.org/pt)

Após a instalação, verifique se está tudo certo:
```bash
node -v
npm -v
```

### 2. Instalar o Yarn (opcional, mas recomendado)
```bash
npm install -g yarn
```

### 3. Criar um novo projeto React
```bash
npx create-react-app nome-do-projeto
```

### 4. Rodar o projeto
```bash
npm start
```

O aplicativo será iniciado no modo de desenvolvimento e aberto em [http://localhost:3000](http://localhost:3000).

### 5. Adicionar suporte a rotas
Para utilizar o React Router no seu projeto:
```bash
npm install react-router-dom
```

### 6. Instalar o Axios
O Axios é uma biblioteca para realizar requisições HTTP (como GET, POST, PUT, DELETE) de forma simples no React.

Para instalá-lo, execute:
```bash
npm install axios
```

### 7. Instalar o React Toastify
O **React Toastify** é uma biblioteca para exibir notificações elegantes e personalizáveis no React, de forma simples e prática.

Para instalá-la, execute:
```bash
npm install react-toastify
```

Após a instalação, importe e configure o `ToastContainer` no seu componente principal (geralmente `App.js`):

```javascript
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const notificar = () => toast.success('Operação realizada com sucesso!');

  return (
    <div>
      <button onClick={notificar}>Mostrar Notificação</button>
      <ToastContainer />
    </div>
  );
}

export default App;
```

---

## 📜 Scripts Disponíveis

No diretório do projeto, você pode executar:

### `npm start`
Executa o aplicativo em modo de desenvolvimento.  
Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador.

A página será recarregada automaticamente quando houver alterações.  
Também poderão aparecer erros de lint no console.

### `npm test`
Inicia o executor de testes no modo interativo.  
Veja mais sobre [execução de testes](https://facebook.github.io/create-react-app/docs/running-tests).

### `npm run build`
Gera a versão de produção do aplicativo na pasta `build`.  
O React será empacotado e otimizado para o melhor desempenho.

Os arquivos são minificados e os nomes incluem hashes para cache.  
O app estará pronto para ser implantado em produção.

Veja mais em [implantação](https://facebook.github.io/create-react-app/docs/deployment).

### `npm run eject`
**Atenção:** esta é uma operação sem retorno!  
Depois de usar `eject`, não será possível voltar atrás.

Esse comando copia todas as configurações e dependências (webpack, Babel, ESLint etc.) diretamente para o projeto, permitindo personalização total.  
Os demais comandos continuarão funcionando, mas apontarão para os arquivos copiados.

> 💡 Normalmente não é necessário usar `eject`.  
> A configuração padrão atende bem à maioria dos projetos pequenos e médios.

---

## 📚 Saiba Mais

- [Documentação do Create React App](https://facebook.github.io/create-react-app/docs/getting-started)  
- [Documentação do React](https://reactjs.org/)  
- [Divisão de Código (Code Splitting)](https://facebook.github.io/create-react-app/docs/code-splitting)  
- [Análise do Tamanho do Bundle](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)  
- [Como Criar um PWA (Progressive Web App)](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)  
- [Configuração Avançada](https://facebook.github.io/create-react-app/docs/advanced-configuration)  
- [Implantação (Deployment)](https://facebook.github.io/create-react-app/docs/deployment)  
- [Erros ao minificar com npm run build](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
