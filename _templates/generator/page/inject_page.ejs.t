---
inject: true
to: src/pages/index.ts
append: true
after: export
skip_if: export { default as <%= h.inflection.camelize(name) %>Page }
---
export { default as <%= h.inflection.camelize(name) %>Page } from '.<% if (locals.f){ -%>/<%= locals.f %><% } -%>/<%= h.inflection.camelize(name) %>';