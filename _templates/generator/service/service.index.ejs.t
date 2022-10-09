---
inject: true
to: src/services/index.ts
after: export
append: true
skip_if: export * from './<%= h.changeCase.camelCase(name) %>.service';
---
export * from './<%= h.changeCase.camelCase(name) %>.service';