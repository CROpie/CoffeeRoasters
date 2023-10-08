import styled from 'styled-components'
import { BREAKPOINTS } from '../../../constants'

export default function CreatePlan() {
  return (
    <Wrapper>
      <Header>Create a plan</Header>
      <Text>
        Build a subscription plan that best fits your needs. We offer an assortment of the best
        artisan coffees from around the globe delivered fresh to your door.
      </Text>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-image: url(src/assets/plan/mobile/image-hero-blackcup.jpg);
  background-size: cover;
  border-radius: var(--radius);
  padding-top: 101px;
  padding-bottom: 136px;
  padding-inline: 24px;
  margin-bottom: 120px;

  @media (${BREAKPOINTS.tabletAndUp}) {
    background-image: url(src/assets/plan/tablet/image-hero-blackcup.jpg);
    padding-block: 127px;
    padding-left: 58px;
    padding-right: 233px;
    margin-bottom: 144px;
  }

  @media (${BREAKPOINTS.desktopAndUp}) {
    background-image: url(src/assets/plan/desktop/image-hero-blackcup.jpg);
    padding-block: 134px;
    padding-left: 85px;
    padding-right: 709px;
    margin-bottom: 168px;
  }
`

const Header = styled.h1`
  text-align: center;
  margin-bottom: 22px;
  @media (${BREAKPOINTS.tabletAndUp}) {
    text-align: start;
  }
`

const Text = styled.p`
  text-align: center;
  color: hsl(var(--image-grey) / 0.8);
  @media (${BREAKPOINTS.tabletAndUp}) {
    text-align: start;
  }
`
