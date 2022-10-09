---
inject: true
to: src/components/index.ts
append: true
after: export
skip_if: export { default as <%= h.inflection.camelize(name) %> }
---
export { default as <%= h.inflection.camelize(name) %> } from '.<% if (locals.f){ -%>/<%= locals.f %><% } -%>/<%= h.inflection.camelize(name) %>';