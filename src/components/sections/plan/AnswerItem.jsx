import styled from 'styled-components'
import { BREAKPOINTS } from '../../../constants'

import { shipmentCost } from '../../../data'

export default function AnswerItem({
  qID,
  aID,
  option,
  description,
  selectedAmountID,
  isselected,
  handleClick,
}) {
  return (
    <AnswerItemWrapper isselected={isselected}>
      <Button onClick={() => handleClick(aID, option)}>
        <AnswerHeading>{option}</AnswerHeading>
        {qID === 5 ? (
          <AnswerText>
            {selectedAmountID
              ? `$${shipmentCost[selectedAmountID - 1][aID - 1]} ${description}`
              : `$__ ${description}`}
          </AnswerText>
        ) : (
          <AnswerText>{description}</AnswerText>
        )}
      </Button>
    </AnswerItemWrapper>
  )
}

const AnswerItemWrapper = styled.li`
  width: 100%;
  & > button {
    ${(props) => props.isselected && `background: hsl(var(--green))`};
  }
  & > button:hover {
    ${(props) => props.isselected && `background: hsl(var(--green))`};
  }

  & > button > h4 {
    ${(props) => props.isselected && `color: hsl(var(--white))`};
  }

  & > button > p {
    ${(props) => props.isselected && `color: hsl(var(--white))`};
  }

  @media (${BREAKPOINTS.tabletAndUp}) {
    height: 100%;
  }
`

const AnswerHeading = styled.h4`
  @media (${BREAKPOINTS.tabletAndUp}) {
    margin-bottom: 24px;
    font-size: 1.5rem;
  }
`

const AnswerText = styled.p`
  font-family: 'Barlow', sans-serif;
  @media (${BREAKPOINTS.desktopAndUp}) {
    font-size: 1rem;
  }
`

const Button = styled.button`
  width: 100%;
  text-align: start;
  background: hsl(var(--l-cream));
  border-radius: var(--radius);
  padding: 24px;

  @media (${BREAKPOINTS.tabletAndUp}) {
    padding-top: 32px;
    padding-inline: 22px;
    padding-bottom: 84px;
    height: 100%;
  }

  @media (${BREAKPOINTS.desktopAndUp}) {
    padding-top: 32px;
    padding-inline: 28px;
    padding-bottom: 84px;
    height: 100%;
  }

  &:hover {
    background: hsl(var(--orange));
  }
`
