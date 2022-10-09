---
to: src/pages<% if (locals.f){ -%>/<%= locals.f %><% } -%>/<%= h.inflection.camelize(name) %>/selectors.ts
---
import { RootState } from 'types';

export const <%= h.changeCase.camel(name) %>Selector = (state: RootState) => state.<%= h.changeCase.camel(name) %>;
