---
inject: true
to: src/types/services/index.d.ts
append: true
after: export
skip_if: export * from './<%= h.changeCase.camelCase(name) %>';
---
export * from './<%= h.changeCase.camelCase(name) %>';