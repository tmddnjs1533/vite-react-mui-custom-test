# [Vite](https://vitejs.dev/)에서 제공하는 [CRA](http://create-react-app.dev/)의 드롭다운 교체

### 원본 소스

[uchihamalolan/vite-react-ts](https://github.com/uchihamalolan/vite-react-ts)

---
### 사용법

1. [degit](https://github.com/Rich-Harris/degit) 받는다 (degit 안 받았을 경우)

```bash
npm install -g degit
```
2. 템플릿 받는다

```bash
npx degit tmddnjs1533/vite-react-mui-custom-test react-app-name
```

3. `npm install` 안될경우

```bash
npm install --legacy-peer-deps
```

---

### 커밋 컨벤션 참고

원래 commit message 앞에 feat: 붙여야 커밋됨.(지금은 삭제함)
[Conventional Commits](https://www.conventionalcommits.org/ko/v1.0.0/)


---
아래부터는 원본 소스의 README

# Drop-in Replacement for [CRA](http://create-react-app.dev/) but powered by [Vite](https://vitejs.dev/)

### Things in CRA, supported here:

- Import SVG's directly as React Component via SVGR
- Unit Testing via Jest & React Testing Library
- ESLint Rules & Prettier
- Tailwind
- Absolute imports within `src` directory

---


### Extra Additions

- Conventional Commits using `Commitlint`
- Run Lint Checks, TS Checks, Formatting & Unit Tests in Pre-commit via `lintstaged` & `husky`

---

### Usage (with [degit](https://github.com/Rich-Harris/degit))

```bash
degit uchihamalolan/vite-react-ts your-app-name
```

---

### Tech Stack - Overview

- Vite
- React - Typscript
  - react-error-boundary
- pnpm

---

### Editor Config

- vscode settings & extension recommendations
- `.editorconfig` file

---

### Lint and Formatting

- Eslint & Prettier Configured
- Lints
  - react
  - react hooks
  - typescript
  - jsx-a11y

---

### Testing

- Jest + React Testing Library (plus some plugins)

---

### Styling

- TailwindCSS v3

---

# Other Recommended Libraries:

### Forms

- React Hook Form
- Zod (for validations)

### CSS-in-js

- Emotion
- Complie Time Atomic CSS-in-Js
  - Stylex (Facebook, not Open Source yet)
  - Linaria
  - Compiled (still in beta)

### Routing

- React-Router-Dom
- React Location

### Date Manipulation

- Dayjs
- date-fns
- Luxon

### HTTP Client

- Ky
- Axios

### Global Store (full-blown / lite-version)

- Redux Toolkit / Zustand
- Recoil / Jotai
- Mobx / Valtio
- xstate / robot

### Server State

- React Query
- SWR
- RTKQuery

<!-- ### Eslint Plugins
- [eslint-plugin-jest-dom](https://testing-library.com/docs/ecosystem-eslint-plugin-jest-dom)
- [typescript-eslint](https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin) -->
