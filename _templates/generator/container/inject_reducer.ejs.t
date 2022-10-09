---
inject: true
to: src/store/reducers.ts
append: true
skip_if: export { default as <%= h.changeCase.camel(name) %>Container }
---
export { default as <%= h.changeCase.camel(name) %>Container } from 'containers<% if (locals.f){ -%>/<%= locals.f %><% } -%>/<%= h.inflection.camelize(name) %>/slice';