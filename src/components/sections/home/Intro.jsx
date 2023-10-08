import styled from 'styled-components'
import { StandardButton } from '../../utils/StandardButton'
import React from 'react'
import { PageContext } from '../../../contexts/Page'

import { BREAKPOINTS } from '../../../constants'

export default function Intro() {
  const { setShowPage } = React.useContext(PageContext)
  return (
    <Wrapper>
      <Heading>Great coffee made simple. </Heading>
      <Text>
        Start your mornings with the world’s best coffees. Try our expertly curated artisan coffees
        from our best roasters delivered directly to your door, at your schedule.
      </Text>
      <Button onClick={() => setShowPage('plan')}>Create your plan</Button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background-image: url(src/assets/home/mobile/image-hero-coffeepress.jpg);
  /* background-size: contain; */
  background-size: cover;
  height: 500px;
  border-radius: var(--radius);
  padding: 100px 24px;
  margin-bottom: 120px;

  @media (${BREAKPOINTS.tabletAndUp}) {
    background-image: url(src/assets/home/tablet/image-hero-coffeepress.jpg);
    padding-inline: 54px;

    margin-bottom: 144px;
  }

  @media (${BREAKPOINTS.desktopAndUp}) {
    background-image: url(src/assets/home/desktop/image-hero-coffeepress.jpg);
    padding-left: 85px;
    padding-right: 702px;
    padding-block: 117px;

    margin-bottom: 136px;

    height: 600px;
  }
`

const Heading = styled.h1`
  text-align: center;
  margin-bottom: 24px;
  @media (${BREAKPOINTS.tabletAndUp}) {
    text-align: left;
  }
`

const Text = styled.p`
  text-align: center;
  margin-bottom: 40px;
  color: hsl(var(--image-grey) / 0.8);
  @media (${BREAKPOINTS.tabletAndUp}) {
    text-align: left;
  }
`

const Button = styled(StandardButton)`
  margin-right: auto;
`
