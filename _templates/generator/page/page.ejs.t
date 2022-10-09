---
to: src/pages<% if (locals.f){ -%>/<%= locals.f %><% } -%>/<%= h.inflection.camelize(name) %>/index.tsx
---
import { FC } from 'react';
// import { useAppDispatch } from 'hooks';
// import { useSelector } from 'react-redux';
// import { <%= h.changeCase.camel(name) %>Selector } from './selectors';

import <%= h.inflection.camelize(name) %>Styled from './styles';

const <%= h.inflection.camelize(name) %>: FC = () => {
  // const dispatch = useAppDispatch();
  // const <%= h.changeCase.camel(name) %> = useSelector(<%= h.changeCase.camel(name) %>Selector);
  return <<%= h.inflection.camelize(name) %>Styled>code here</<%= h.inflection.camelize(name) %>Styled>;
};

export default <%= h.inflection.camelize(name) %>;
