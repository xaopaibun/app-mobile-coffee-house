---
to: src/types/services/<%= h.changeCase.camelCase(name) %>.d.ts
skip_if: <%= name %>
---
export interface <%= h.inflection.camelize(name) %> {}

export interface FindAll<%= h.inflection.camelize(name) %>Req {}
export interface FindAll<%= h.inflection.camelize(name) %>Res {}
export interface FindAll<%= h.inflection.camelize(name) %>Err {}

export interface GetOne<%= h.inflection.camelize(name) %>Req {}
export interface GetOne<%= h.inflection.camelize(name) %>Res {}
export interface GetOne<%= h.inflection.camelize(name) %>Err {}

export interface Create<%= h.inflection.camelize(name) %>Req {}
export interface Create<%= h.inflection.camelize(name) %>Res {}
export interface Create<%= h.inflection.camelize(name) %>Err {}

export interface Update<%= h.inflection.camelize(name) %>Req {}
export interface Update<%= h.inflection.camelize(name) %>Res {}
export interface Update<%= h.inflection.camelize(name) %>Err {}

export interface Patch<%= h.inflection.camelize(name) %>Req {}
export interface Patch<%= h.inflection.camelize(name) %>Res {}
export interface Patch<%= h.inflection.camelize(name) %>Err {}

export interface Remove<%= h.inflection.camelize(name) %>Req {}
export interface Remove<%= h.inflection.camelize(name) %>Res {}
export interface Remove<%= h.inflection.camelize(name) %>Err {}
