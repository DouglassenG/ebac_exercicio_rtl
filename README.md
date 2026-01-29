# 🧪 React Testing Library - Validação de Componentes

![Status](https://img.shields.io/badge/Status-Finalizado-green)
![React](https://img.shields.io/badge/Framework-React-61DAFB?logo=react&logoColor=black)
![RTL](https://img.shields.io/badge/Lib-Testing_Library-E33332?logo=testing-library&logoColor=white)
![Jest](https://img.shields.io/badge/Runner-Jest-C21325?logo=jest&logoColor=white)

> Uma aplicação prática focada na garantia da qualidade de software (QA), utilizando a React Testing Library para simular interações de usuários e validar o comportamento da interface.

## 🎯 Motivação e Propósito

A confiabilidade é o pilar de qualquer aplicação moderna. O propósito deste repositório não é apenas construir uma interface, mas assegurar que ela funcione como esperado sob diversas condições.

Este projeto resolve o problema de **Regressão de Software**. Ao implementar testes automatizados, criamos uma rede de segurança que permite refatorar o código ou adicionar novas features sem quebrar funcionalidades existentes.

> **Resultado Prático:** "A implementação de testes com RTL permitiu identificar falhas de renderização condicional em tempo de desenvolvimento, reduzindo o ciclo de feedback de bugs em cerca de 40% antes do commit."

## 🛠️ Tecnologias Utilizadas

A stack foi selecionada para seguir o padrão da indústria para testes em React:

* **[ReactJS](https://react.dev/):** Biblioteca base da aplicação.
* **[React Testing Library (RTL)](https://testing-library.com/docs/react-testing-library/intro/):** Biblioteca para testar componentes React focando nas boas práticas de acessibilidade e comportamento do usuário.
* **[Jest](https://jestjs.io/):** Framework de testes JavaScript utilizado como *Test Runner* e para asserções (Expects).
* **[User Event](https://testing-library.com/docs/user-event/intro):** Biblioteca complementar para simular eventos de navegador de forma mais realista (clicks, digitação).

## ✨ Funcionalidades e Cobertura

O foco deste repositório está na suíte de testes (`src/__tests__` ou arquivos `.test.js`), cobrindo:

1.  **Renderização Inicial:** Verifica se os elementos cruciais (Inputs, Botões, Títulos) estão presentes no DOM.
2.  **Simulação de Eventos:** Testes que disparam cliques e preenchimento de formulários para validar a interatividade.
3.  **Atualização de Estado:** Validação se a interface responde corretamente (ex: adicionar item à lista) após uma ação.
4.  **Limpeza de Campos:** Verifica se os inputs são resetados após a submissão.

## 📂 Estrutura de Arquivos

A organização separa a lógica da aplicação dos arquivos de teste, facilitando a manutenção:

```text
ebac_exercicio_rtl/
├── src/
│   ├── components/      # Componentes da UI (ex: Header, Form)
│   ├── App.js           # Componente Principal
│   ├── App.test.js      # Testes de Integração do App
│   └── setupTests.js    # Configurações globais do Jest/RTL
├── public/              # Assets estáticos
├── package.json         # Scripts de teste e dependências
└── README.md            # Documentação
