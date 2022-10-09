---
inject: true
to: src/store/reducers.ts
append: true
skip_if: export { default as <%= h.changeCase.camel(name) %> }
---
export { default as <%= h.changeCase.camel(name) %> } from 'pages<% if (locals.f){ -%>/<%= locals.f %><% } -%>/<%= h.inflection.camelize(name) %>/slice';