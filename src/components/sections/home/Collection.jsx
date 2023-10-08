import styled from 'styled-components'
import { BREAKPOINTS } from '../../../constants'

const coffees = [
  {
    id: 1,
    image: 'src/assets/home/desktop/image-gran-espresso.png',
    name: 'Gran Espresso',
    text: 'Light and flavorful blend with cocoa and black pepper for an intense experience',
  },
  {
    id: 2,
    image: 'src/assets/home/desktop/image-planalto.png',
    name: 'Planalto',
    text: 'Brazilian dark roast with rich and velvety body, and hints of fruits and nuts',
  },
  {
    id: 3,
    image: 'src/assets/home/desktop/image-piccollo.png',
    name: 'Piccollo',
    text: 'Mild and smooth blend featuring notes of toasted almond and dried cherry',
  },
  {
    id: 4,
    image: 'src/assets/home/desktop/image-danche.png',
    name: 'Danche',
    text: 'Ethiopian hand-harvested blend densely packed with vibrant fruit notes',
  },
]
export default function Collection() {
  return (
    <Wrapper>
      <Header>Our Collection</Header>
      <List>
        {coffees.map(({ id, image, name, text }) => (
          <ListItem key={id}>
            <ImageWrapper>
              <img src={image} alt={name} />
            </ImageWrapper>
            <div>
              <ItemHeading>{name}</ItemHeading>
              <ItemText>{text}</ItemText>
            </div>
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
    margin-bottom: 200px;
  }
`

const Header = styled.h1`
  color: hsl(var(--l-grey));
  text-transform: lowercase;
  text-align: center;
  margin-bottom: 13px;
`

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 48px;

  @media (${BREAKPOINTS.desktopAndUp}) {
    flex-direction: row;
    gap: 30px;
    justify-content: center;
  }
`

const ListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  @media (${BREAKPOINTS.tabletAndUp}) {
    flex-direction: row;
    gap: 36px;
    padding-inline: 58px;
  }
  @media (${BREAKPOINTS.desktopAndUp}) {
    flex-direction: column;
    gap: 72px;
    padding-inline: 0px;
  }
`

const ImageWrapper = styled.div`
  height: 151px;

  @media (${BREAKPOINTS.tabletAndUp}) {
    height: 193px;
  }
`

const ItemHeading = styled.h4`
  text-align: center;
  @media (${BREAKPOINTS.tabletAndUp}) {
    text-align: left;
  }
  @media (${BREAKPOINTS.desktopAndUp}) {
    text-align: center;
    margin-bottom: 24px;
  }
`

const ItemText = styled.p`
  text-align: center;
  @media (${BREAKPOINTS.tabletAndUp}) {
    text-align: left;
  }
  @media (${BREAKPOINTS.desktopAndUp}) {
    text-align: center;
  }
`
