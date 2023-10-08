import styled from 'styled-components'
import { StandardButton } from '../../utils/StandardButton'
import { BREAKPOINTS } from '../../../constants'

export default function Summary({ responses, isReady, checkout }) {
  function handleClickCreate() {
    // window.scrollTo(0, 0)
    checkout(responses)
  }

  return (
    <SummaryWrapper>
      <TextWrapper>
        <SummaryHeading>Order Summary</SummaryHeading>
        <SummaryText>
          “I drink coffee as <SummarySpan>{responses[0].option}</SummarySpan>, with a{' '}
          <SummarySpan>{responses[1].option}</SummarySpan> type of bean.{' '}
          <SummarySpan>{responses[2].option}</SummarySpan> ground ala{' '}
          <SummarySpan>{responses[3].option}</SummarySpan>, sent to me{' '}
          <SummarySpan>{responses[4].option}</SummarySpan>.”
        </SummaryText>
      </TextWrapper>
      <StyledStandardButton onClick={handleClickCreate} disabled={!isReady}>
        Create my plan!
      </StyledStandardButton>
    </SummaryWrapper>
  )
}

const SummaryWrapper = styled.div``

const TextWrapper = styled.div`
  margin-bottom: 56px;
  padding: 32px 24px;
  background: hsl(var(--d-grey));
  border-radius: var(--radius);

  @media (${BREAKPOINTS.tabletAndUp}) {
    padding: 27px 44px;
    margin-bottom: 40px;
  }
`

const SummaryHeading = styled.p`
  text-transform: uppercase;
  color: hsl(var(--white) / 0.5);
  margin-bottom: 8px;
`

const SummaryText = styled.h4`
  color: hsl(var(--white));
  line-height: 1.667;
`

const SummarySpan = styled.span`
  color: hsl(var(--green));
`

const StyledStandardButton = styled(StandardButton)`
  margin: 0;
  margin-left: auto;
`
