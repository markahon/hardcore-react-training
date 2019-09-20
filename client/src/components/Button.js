import React from "react";

// On olemassa myös theme provider
import styled, { css } from "styled-components";

// Väreille on olemassa polished -kirjasto
// Breakpointteja voi toteuttaa map reducella

export default styled.button`
  border-radius: 5px;
  border: 5px solid rgb(0, 0, 0);
  padding: 1rem;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }

  ${props =>
    props.fire &&
    css`
      display: inline-block;
      position: absolute;
      right: 1rem;
    `}
`;
