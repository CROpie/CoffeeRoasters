import styled from 'styled-components'

export const StandardButton = styled.button`
  font-family: 'Fraunces', serif;
  color: hsl(var(--cream));
  background: hsl(var(--green));
  font-size: 1.125rem;
  font-weight: 900;
  line-height: 1.39;
  letter-spacing: auto;

  padding: 15px 31px;
  border-radius: var(--radius);

  &:hover {
    background: hsl(var(--cyan));
  }

  &:disabled {
    background: hsl(var(--l-grey));
  }
`
