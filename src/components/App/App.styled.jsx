import styled from '@emotion/styled';

export const AppContainer = styled.div`
  font-size: 1em;
  padding: 2em;
  background-color: var(--background);
  width: 28em;
  border-radius: 1em;
  border: 0.2em solid var(--accent1);
  box-shadow: 0px 0px 18px 5px var(--accent2) inset,
    0px 0px 8px 5px var(--accent1);
  margin: 0 auto;
`;
export const MainTitle = styled.h1`
  font-size: 1.7em;
  margin-bottom: 0.7em;
  text-shadow: 5px 5px 6px var(--accent2);
`;

export const SecondaryTitle = styled.h2`
  font-size: 1.5em;
  margin-bottom: 0.5em;
  text-shadow: 5px 5px 6px var(--accent2);
`;
