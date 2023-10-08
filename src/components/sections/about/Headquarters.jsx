import styled from 'styled-components'
import Icon from '../../icons/Icon'

import { BREAKPOINTS } from '../../../constants'

const countries = [
  {
    id: 1,
    image: <Icon id="uk" />,
    title: 'United Kingdom',
    street: '68 Asfordby Rd',
    city: 'Alcaston',
    state: 'SY6 1YA',
    phone: '+44 1241 918425',
  },
  {
    id: 2,
    image: <Icon id="canada" />,
    title: 'Canada',
    street: '1528 Eglinton Avenue',
    city: 'Toronto',
    state: 'Ontario M4P 1A6',
    phone: '+1 416 485 2997',
  },
  {
    id: 3,
    image: <Icon id="australia" />,
    title: 'Australia',
    street: '36 Swanston Street',
    city: 'Kewell',
    state: 'Victoria',
    phone: '+61 4 9928 3629',
  },
]

export default function Headquarters() {
  return (
    <Wrapper>
      <Header>Our headquarters</Header>
      <List>
        {countries.map(({ id, image, title, street, city, state, phone }) => (
          <ListItem key={id}>
            <ItemImageWrapper>{image}</ItemImageWrapper>
            <ItemHeader>{title}</ItemHeader>
            <ItemText>{street}</ItemText>
            <ItemText>{city}</ItemText>
            <ItemText>{state}</ItemText>
            <ItemText>{phone}</ItemText>
          </ListItem>
        ))}
      </List>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  margin-bottom: 120px;

  @media (${BREAKPOINTS.tabletAndUp}) {
    margin-bottom: 144px;
  }
  @media (${BREAKPOINTS.desktopAndUp}) {
    margin-bottom: 168px;
  }
`

const Header = styled.h4`
  text-align: center;
  margin-bottom: 72px;
  color: hsl(var(--grey));

  @media (${BREAKPOINTS.tabletAndUp}) {
    text-align: start;
  }

  @media (${BREAKPOINTS.desktopAndUp}) {
    margin-left: 85px;
  }
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 80px;
  align-items: center;

  @media (${BREAKPOINTS.tabletAndUp}) {
    flex-direction: row;
    gap: 0;
  }

  @media (${BREAKPOINTS.desktopAndUp}) {
    margin-left: 85px;
  }
`

const ListItem = styled.li`
  @media (${BREAKPOINTS.tabletAndUp}) {
    flex: 1;
  }
`

const ItemImageWrapper = styled.div`
  height: 50px;
  margin-bottom: 48px;
  display: flex;
  justify-content: center;

  @media (${BREAKPOINTS.tabletAndUp}) {
    display: block;
  }
`

const ItemHeader = styled.h3`
  text-align: center;
  margin-bottom: 22px;

  @media (${BREAKPOINTS.tabletAndUp}) {
    text-align: start;
  }
`

const ItemText = styled.p`
  text-align: center;
  @media (${BREAKPOINTS.tabletAndUp}) {
    text-align: start;
  }
`
