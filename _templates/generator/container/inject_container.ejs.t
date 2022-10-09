---
inject: true
to: src/containers/index.ts
append: true
skip_if: export { default as <%= h.inflection.camelize(name) %> }
---
export { default as <%= h.inflection.camelize(name) %> } from '.<% if (locals.f){ -%>/<%= locals.f %><% } -%>/<%= h.inflection.camelize(name) %>';