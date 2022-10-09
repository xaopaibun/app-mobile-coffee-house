---
to: src/pages<% if (locals.f){ -%>/<%= locals.f %><% } -%>/<%= h.inflection.camelize(name) %>/styles.ts
---
import styled from 'styled-components';

type Props = {};

export default styled.section<Props>`
  && {
  }
`;
