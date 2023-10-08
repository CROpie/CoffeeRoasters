import React from 'react'
import styled from 'styled-components'
import { StandardButton } from '../../utils/StandardButton'
import { ResponsesContext } from '../../../contexts/Responses'
import Icon from '../../icons/Icon'
import { BREAKPOINTS } from '../../../constants'

export default function Modal({ closeModal }) {
  const { responses } = React.useContext(ResponsesContext)

  React.useEffect(() => {
    function handleKeyDown(event) {
      if (event.code === 'Escape') {
        closeModal()
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [closeModal])

  const shipmentCost = [
    [7.2, 9.6, 12],
    [13, 17.5, 22],
    [22, 32, 42],
  ]

  let cost = 0
  let monthCost = 0
  const sizeIndex = responses[2].id - 1
  const frequencyIndex = responses[4].id - 1
  cost = shipmentCost[sizeIndex][frequencyIndex]

  if (frequencyIndex === 0) {
    monthCost = cost * 4
  } else if (frequencyIndex === 1) {
    monthCost = cost * 2
  } else {
    monthCost = cost
  }

  console.log(cost)

  return (
    <Wrapper>
      <ModalContent>
        <Heading>Order Summary</Heading>
        <IconWrapper onClick={closeModal}>
          <Icon id="close" />
        </IconWrapper>
        <SummaryText>
          “I drink coffee as <SummarySpan>{responses[0].option}</SummarySpan>, with a{' '}
          <SummarySpan>{responses[1].option}</SummarySpan> type of bean.{' '}
          <SummarySpan>{responses[2].option}</SummarySpan> ground ala{' '}
          <SummarySpan>{responses[3].option}</SummarySpan>, sent to me{' '}
          <SummarySpan>{responses[4].option}</SummarySpan>.”
        </SummaryText>
        <Text>
          Is this correct? You can proceed to checkout or go back to plan selection if something is
          off. Subscription discount codes can also be redeemed at the checkout.
        </Text>
        <MobileButton>Checkout - ${monthCost.toFixed(2)} / mo</MobileButton>
        <CostWrapper>
          <Cost>${monthCost.toFixed(2)} / mo</Cost>
          <Button>Checkout</Button>
        </CostWrapper>
      </ModalContent>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background: hsl(0deg 0% 0% / 0.6);
`

const ModalContent = styled.div`
  position: relative;
  background: hsl(var(--white));
  margin-block: 35px;
  margin-left: 24px;
  margin-right: 39px;
  padding-inline: 24px;
  padding-bottom: 24px;

  @media (${BREAKPOINTS.tabletAndUp}) {
    margin-inline: 114px;
    padding-inline: 56px;
    padding-bottom: 56px;
    margin-bottom: 0;
    margin-top: 100px;
    min-width: 33vw;
    max-width: 50vw;
    margin-top: 100px;
    margin-inline: auto;
  }

  @media (${BREAKPOINTS.desktopAndUp}) {
    min-width: 33vw;
    max-width: 50vw;
    margin-top: 214px;
    margin-inline: auto;
  }
`

const Heading = styled.h3`
  background: hsl(var(--d-grey));
  color: hsl(var(--white));
  padding: 28px 24px;
  margin-left: -24px;
  margin-right: -24px;
  @media (${BREAKPOINTS.tabletAndUp}) {
    margin-left: -56px;
    margin-right: -56px;
    padding-top: 48px;
    padding-bottom: 40px;
    padding-inline: 56px;
  }
`

const IconWrapper = styled.button`
  height: 16px;
  position: absolute;
  color: hsl(var(--white));
  top: 8px;
  right: 8px;

  &:hover {
    color: hsl(var(--grey));
  }
  @media (${BREAKPOINTS.tabletAndUp}) {
    height: 24px;
    top: 16px;
    right: 16px;
  }
`

const SummaryText = styled.h4`
  color: hsl(var(--grey));
  line-height: 1.667;
  padding-top: 40px;

  @media (${BREAKPOINTS.tabletAndUp}) {
    padding-top: 57px;
    margin-bottom: 7px;
  }
`

const SummarySpan = styled.span`
  color: hsl(var(--green));
`

const Text = styled.p`
  margin-bottom: 24px;
  @media (${BREAKPOINTS.tabletAndUp}) {
    margin-bottom: 47px;
  }
`

const MobileButton = styled(StandardButton)`
  width: 100%;
  display: block;
  @media (${BREAKPOINTS.tabletAndUp}) {
    display: none;
  }
`

const CostWrapper = styled.div`
  display: none;
  @media (${BREAKPOINTS.tabletAndUp}) {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
    gap: 13px;
  }
`

const Cost = styled.h2`
  color: hsl(var(--d-grey));
`

const Button = styled(StandardButton)`
  width: 100%;
`
