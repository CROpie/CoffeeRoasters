import styled from 'styled-components'
import { BREAKPOINTS } from '../../../constants'

export default function AboutUs() {
  return (
    <Wrapper>
      <Header>About Us</Header>
      <Text>
        Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee
        from around the world. We have since been dedicated to bring the perfect cup - from bean to
        brew - in every shipment.
      </Text>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-image: url(src/assets/about/mobile/image-hero-whitecup.jpg);
  background-size: cover;
  border-radius: var(--radius);
  padding-top: 111px;
  padding-bottom: 87px;
  padding-inline: 24px;
  margin-bottom: 120px;

  @media (${BREAKPOINTS.tabletAndUp}) {
    background-image: url(src/assets/about/tablet/image-hero-whitecup.jpg);
    padding-block: 118px;
    padding-left: 58px;
    padding-right: 233px;
    margin-bottom: 144px;
  }

  @media (${BREAKPOINTS.desktopAndUp}) {
    background-image: url(src/assets/about/desktop/image-hero-whitecup.jpg);
    margin-bottom: 168px;
    padding-block: 137px;
    padding-left: 85x;
    padding-right: 750px;
  }
`

const Header = styled.h2`
  text-align: center;
  margin-bottom: 24px;
  @media (${BREAKPOINTS.tabletAndUp}) {
    text-align: left;
  }
`

const Text = styled.p`
  text-align: center;
  color: hsl(var(--image-grey) / 0.8);
  @media (${BREAKPOINTS.tabletAndUp}) {
    text-align: left;
  }
`
