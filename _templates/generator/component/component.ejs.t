---
to: src/components<% if (locals.f){ -%>/<%= locals.f %><% } -%>/<%= h.inflection.camelize(name) %>/index.tsx
---
import { FC } from 'react';

import <%= h.inflection.camelize(name) %>Styled from './styles';

type Props = {};

const <%= h.inflection.camelize(name) %>: FC<Props> = () => {
  return <<%= h.inflection.camelize(name) %>Styled>code here</<%= h.inflection.camelize(name) %>Styled>;
};

export default <%= h.inflection.camelize(name) %>;
