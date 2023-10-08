import styled from 'styled-components'
import Icon from '../../icons/Icon'
import { BREAKPOINTS } from '../../../constants'

const benefits = [
  {
    id: 1,
    image: <Icon id="bean" />,
    title: 'Best quality',
    text: 'Discover an endless variety of the world’s best artisan coffee from each of our roasters.',
  },
  {
    id: 2,
    image: <Icon id="gift" />,
    title: 'Exclusive benefits',
    text: 'Special offers and swag when you subscribe, including 30% off your first shipment.',
  },
  {
    id: 3,
    image: <Icon id="truck" />,
    title: 'Free shipping ',
    text: 'We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.',
  },
]

export default function Benefits() {
  return (
    <Wrapper>
      <InfoWrapper>
        <Heading>Why choose us?</Heading>
        <Text>
          A large part of our role is choosing which particular coffees will be featured in our
          range. This means working closely with the best coffee growers to give you a more
          impactful experience on every level.
        </Text>
      </InfoWrapper>
      <List>
        {benefits.map(({ id, image, title, text }) => (
          <ListItem key={id}>
            <ItemImageWrapper>{image}</ItemImageWrapper>
            <ItemInfoWrapper>
              <ItemHeading>{title}</ItemHeading>
              <ItemText>{text}</ItemText>
            </ItemInfoWrapper>
          </ListItem>
        ))}
      </List>
      <DarkerBackground />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  position: relative;
  padding-top: 64px;
  margin-bottom: 120px;

  @media (${BREAKPOINTS.tabletAndUp}) {
    padding-top: 56px;
    margin-bottom: 144px;
    padding-inline: 57px;
  }
  @media (${BREAKPOINTS.desktopAndUp}) {
    padding-top: 100px;
    padding-inline: 85px;
    margin-bottom: 200px;
  }
`

const InfoWrapper = styled.div`
  margin-bottom: 64px;
  padding-inline: 24px;

  @media (${BREAKPOINTS.tabletAndUp}) {
    margin-inline: 17px;
    margin-bottom: 70px;
  }
  @media (${BREAKPOINTS.desktopAndUp}) {
    margin-bottom: 86px;
    padding-inline: 0;
    margin-inline: 285px;
  }
`

const DarkerBackground = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  bottom: 40%;
  left: 0;
  right: 0;
  background: hsl(var(--d-grey));
  border-radius: var(--radius);

  @media (${BREAKPOINTS.desktopAndUp}) {
    bottom: 20%;
  }
`

const Heading = styled.h2`
  text-align: center;
  margin-bottom: 24px;
`

const Text = styled.p`
  text-align: center;
  color: hsl(var(--image-grey) / 0.8);
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
  position: relative;
  padding-inline: 24px;

  @media (${BREAKPOINTS.desktopAndUp}) {
    flex-direction: row;
  }
`

const ListItem = styled.li`
  background: hsl(var(--green));
  padding-top: 72px;
  padding-bottom: 51px;
  display: flex;
  flex-direction: column;
  gap: 56px;
  align-items: center;
  border-radius: var(--radius);

  @media (${BREAKPOINTS.tabletAndUp}) {
    flex-direction: row;
    padding-top: 41px;
    padding-bottom: 41px;
    padding-left: 70px;
    padding-right: 48px;
  }

  @media (${BREAKPOINTS.desktopAndUp}) {
    flex-direction: column;
    align-items: center;
    padding-top: 72px;
    padding-left: 48px;
    padding-right: 48px;
    padding-bottom: 48px;
  }
`

const ItemImageWrapper = styled.div`
  height: 72px;
  @media (${BREAKPOINTS.tabletAndUp}) {
    height: 56px;
    aspect-ratio: 1 / 1;
  }
  @media (${BREAKPOINTS.desktopAndUp}) {
    height: 72px;
  }
`

const ItemInfoWrapper = styled.div`
  color: hsl(var(--image-grey));
  padding-inline: 21.5px;
  @media (${BREAKPOINTS.tabletAndUp}) {
    padding-inline: 0;
  }
`

const ItemHeading = styled.h4`
  color: inherit;
  text-align: center;
  margin-bottom: 24px;
  @media (${BREAKPOINTS.tabletAndUp}) {
    text-align: left;
    margin-bottom: 16px;
  }
  @media (${BREAKPOINTS.desktopAndUp}) {
    text-align: center;
    margin-bottom: 24px;
  }
`

const ItemText = styled.p`
  color: inherit;
  text-align: center;
  @media (${BREAKPOINTS.tabletAndUp}) {
    text-align: left;
  }
  @media (${BREAKPOINTS.desktopAndUp}) {
    text-align: center;
  }
`
