# AltusBranding

Landing page institucional para AltusBranding, focada em branding estratégico, design e experiência digital.

## Recursos

- SEO otimizado (meta tags, dados estruturados, canonical)
- Estrutura semântica e acessível
- Imagens otimizadas e lazy loading
- Responsividade total (mobile friendly)
- Componentes modernos com animações (Framer Motion)
- Formulário de contato integrado

## Tecnologias

- React 19
- Vite
- Tailwind CSS
- Framer Motion
- React Hook Form + Zod
- React Helmet Async

## Scripts

- `pnpm dev` — inicia o servidor de desenvolvimento
- `pnpm build` — gera build de produção
- `pnpm preview` — visualiza build
- `pnpm lint` — verifica padrões de código

## Estrutura

```
src/
  App.tsx
  main.tsx
  components/
    Hero/
    Header/
    Footer/
    Services/
    Method/
    Differentials/
    Contact/
    About/
    Seo.tsx
```

## Como rodar

1. Instale as dependências:
   ```sh
   pnpm install
   ```
2. Inicie o projeto:
   ```sh
   pnpm dev
   ```
3. Acesse `http://localhost:5173` no navegador.

## Personalização

- Edite os textos e imagens nos componentes em `src/components/`
- Ajuste as meta tags e dados estruturados em `src/components/Seo.tsx`
