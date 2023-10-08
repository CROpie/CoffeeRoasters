import styled from 'styled-components'
import { StandardButton } from '../../utils/StandardButton'
import React from 'react'
import { PageContext } from '../../../contexts/Page'
import { BREAKPOINTS } from '../../../constants'

const instructions = [
  {
    id: '01',
    title: 'Pick your coffee',
    text: 'Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out.',
  },
  {
    id: '02',
    title: 'Choose the frequency',
    text: 'Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal.',
  },
  {
    id: '03',
    title: 'Receive and enjoy!',
    text: 'We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience.',
  },
]

export default function Instructions() {
  const { setShowPage } = React.useContext(PageContext)
  return (
    <Wrapper>
      <Heading>How it works</Heading>

      <List>
        {instructions.map(({ id, title, text }, index) => (
          <ListItem key={id}>
            <Art>
              <Circle />
              {index !== instructions.length - 1 && <Line />}
            </Art>
            <ItemNumber>{id}</ItemNumber>
            <ItemHeading>{title}</ItemHeading>
            <ItemText>{text}</ItemText>
          </ListItem>
        ))}
      </List>
      <Button onClick={() => setShowPage('plan')}>Create your plan</Button>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-bottom: 120px;

  @media (${BREAKPOINTS.tabletAndUp}) {
    margin-bottom: 144px;
  }

  @media (${BREAKPOINTS.desktopAndUp}) {
    margin-bottom: 200px;
  }
`

const Heading = styled.h4`
  text-align: center;
  margin-bottom: 80px;
  color: hsl(var(--grey));

  @media (${BREAKPOINTS.tabletAndUp}) {
    text-align: start;
    margin-bottom: 40px;
  }
  @media (${BREAKPOINTS.desktopAndUp}) {
    margin-bottom: 80px;
  }
`
const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 56px;
  margin-bottom: 79px;
  @media (${BREAKPOINTS.tabletAndUp}) {
    flex-direction: row;

    gap: 0;
    margin-bottom: 44px;

    @media (${BREAKPOINTS.desktopAndUp}) {
      gap: 95px;
    }
  }
`
const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  text-align: center;

  @media (${BREAKPOINTS.tabletAndUp}) {
    align-items: flex-start;
    gap: 0;
    text-align: left;
  }
`
const ItemNumber = styled.h1`
  font-size: 4.5rem;
  color: hsl(var(--orange));

  @media (${BREAKPOINTS.tabletAndUp}) {
    margin-bottom: 42px;
  }
  @media (${BREAKPOINTS.desktopAndUp}) {
    margin-bottom: 38px;
  }
`
const ItemHeading = styled.h3`
  @media (${BREAKPOINTS.tabletAndUp}) {
    margin-bottom: 38px;
  }
  @media (${BREAKPOINTS.desktopAndUp}) {
    margin-bottom: 42px;
  }
`
const ItemText = styled.p``

const Button = styled(StandardButton)`
  margin: 0 auto;
  @media (${BREAKPOINTS.tabletAndUp}) {
    margin: 0;
  }
`

const Art = styled.div`
  display: none;

  @media (${BREAKPOINTS.tabletAndUp}) {
    display: flex;
    align-items: center;
    margin-bottom: 48px;

    align-self: stretch;
  }
  @media (${BREAKPOINTS.desktopAndUp}) {
    margin-bottom: 83px;
  }
`

const Circle = styled.div`
  border: 3px solid hsl(var(--green));
  height: 31px;

  aspect-ratio: 1 / 1;
  border-radius: 50%;
`

const Line = styled.div`
  border: 1px solid hsl(var(--orange));
  flex: 1;
  height: 1px;
`
