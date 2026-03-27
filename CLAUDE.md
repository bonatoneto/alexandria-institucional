@AGENTS.md

# Diretrizes de Desenvolvimento

## Princípios Gerais (SOLID no Frontend)

- **Single Responsibility**: cada componente faz uma única coisa. Componentes de UI não buscam dados.
- **Open/Closed**: componentes recebem dados via props/composição, não hardcodam comportamento.
- **Liskov Substitution**: tipos e interfaces devem ser consistentes — se um componente aceita `HeaderProps`, qualquer dado que satisfaça esse contrato deve funcionar.
- **Interface Segregation**: props tipadas com apenas o que o componente precisa. Não passe o documento inteiro se só precisa de `.data`.
- **Dependency Inversion**: componentes dependem de abstrações (tipos do Prismic, interfaces), não de implementações concretas.

## Padrão de Data Fetching (Prismic + Next.js App Router)

- **Buscar dados em `page.tsx` ou `layout.tsx`** (Server Components na camada de rota).
- **Passar dados como props** para componentes filhos.
- **Nunca buscar dados dentro de componentes de UI** — componentes devem ser puros e receber tudo via props.
- Usar `createClient()` apenas em pages/layouts.

## Componentes

- Tipar props com `type` (não `interface`, exceto quando extensão é necessária).
- Extrair o tipo dos dados do Prismic diretamente: `Content.HeaderDocument["data"]`.
- Componentes de UI são funções síncronas. Componentes async são apenas pages/layouts.
- Não usar `export default` com arrow functions — preferir `export default function`.

## Estrutura de Pastas

```
src/
├── app/          # Rotas, layouts, pages (data fetching aqui)
├── components/   # Componentes de UI (sem data fetching)
├── slices/       # Slices do Prismic (gerados pelo Slice Machine)
└── prismicio.ts  # Client Prismic
```

## Estilo e Formatação

- ESLint + Prettier configurados — respeitar as regras existentes.
- Import ordering via `eslint-plugin-import-helpers`.
- Aspas duplas, ponto e vírgula, trailing comma.
