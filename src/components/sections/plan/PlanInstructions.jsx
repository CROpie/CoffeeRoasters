import styled from 'styled-components'
import { BREAKPOINTS } from '../../../constants'

const instructions = [
  {
    id: '01',
    title: 'Select your coffee',
    text: "Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There's new coffees in all profiles every month for you to try out.",
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

export default function PlanInstructions() {
  return (
    <Wrapper>
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
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding-block: 80px;
  margin-inline: -24px;
  margin-bottom: 120px;
  background: hsl(var(--d-grey));
  border-radius: var(--radius);

  @media (${BREAKPOINTS.tabletAndUp}) {
    padding-top: 97px;
    padding-bottom: 80px;
    margin-inline: -40px;
    margin-bottom: 144px;
  }

  @media (${BREAKPOINTS.desktopAndUp}) {
    padding-block: 100px;
    padding-bottom: 80px;
    margin-inline: 0px;
    padding-left: 85px;
    padding-right: 150px;
    margin-bottom: 168px;
  }
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 56px;
  padding-inline: 24px;

  @media (${BREAKPOINTS.tabletAndUp}) {
    flex-direction: row;
    gap: 0;
    padding-inline: 40px;
  }

  @media (${BREAKPOINTS.tabletAndUp}) {
    gap: 95px;
  }
`
const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  text-align: center;
  @media (${BREAKPOINTS.tabletAndUp}) {
    text-align: left;
    align-items: start;
    gap: 10px;
  }
`
const ItemNumber = styled.h1`
  font-size: 4.5rem;
  color: hsl(var(--orange));

  @media (${BREAKPOINTS.tabletAndUp}) {
    margin-bottom: 42px;
  }
`
const ItemHeading = styled.h3`
  color: hsl(var(--white));
  @media (${BREAKPOINTS.tabletAndUp}) {
    margin-bottom: 38px;
  }
`
const ItemText = styled.p`
  color: hsl(var(--white));
`

const Art = styled.div`
  display: none;

  @media (${BREAKPOINTS.tabletAndUp}) {
    display: flex;
    align-items: center;
    margin-bottom: 48px;

    align-self: stretch;
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
