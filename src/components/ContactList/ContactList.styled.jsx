import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 25em;
  gap: 0.3em;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Text = styled.p`
  text-shadow: 5px 5px 6px var(--accent2);
`;
