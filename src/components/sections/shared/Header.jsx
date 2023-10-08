// import styled from 'styled-components'
import styled from 'styled-components'
import Icon from '../../icons'
import React from 'react'

import MobileModal from './MobileModal'
import { PageContext } from '../../../contexts/Page'
import { BREAKPOINTS } from '../../../constants'

const links = [
  { page: 'home', text: 'Home' },
  { page: 'about', text: 'About us' },
  { page: 'plan', text: 'Create your plan' },
]

export default function Header() {
  const [showModal, setShowModal] = React.useState(false)
  const { setShowPage } = React.useContext(PageContext)

  function handleClick(page) {
    setShowPage(page)
    setShowModal(false)
  }

  return (
    <Navbar>
      <MobileMenu>
        <Icon id="logo" height="18px" />

        <Button onClick={() => setShowModal(!showModal)}>
          {showModal ? <Icon id="close" /> : <Icon id="hamburger" />}
        </Button>
      </MobileMenu>

      <Menu>
        <Icon id="logo" height="26px" />

        <LinkList>
          {links.map(({ page, text }) => (
            <LinkListItem key={page}>
              <Link onClick={() => handleClick(page)}>{text}</Link>
            </LinkListItem>
          ))}
        </LinkList>
      </Menu>

      {showModal && <MobileModal links={links} handleClick={handleClick} />}
    </Navbar>
  )
}

const Navbar = styled.nav`
  margin-bottom: 40px;

  @media (${BREAKPOINTS.tabletAndUp}) {
    margin-bottom: 53px;
  }

  @media (${BREAKPOINTS.desktopAndUp}) {
    margin-bottom: 44px;
  }
`

const MobileMenu = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (${BREAKPOINTS.tabletAndUp}) {
    display: none;
  }
`

const Menu = styled.nav`
  display: none;

  @media (${BREAKPOINTS.tabletAndUp}) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`

const Button = styled.button`
  color: hsl(var(--dark-grey));
  height: 18px;

  &:hover {
    color: hsl(var(--grey));
  }
`

const LinkList = styled.ul`
  display: flex;
  gap: 32px;

  font-family: 'Barlow', serif;
  color: hsl(var(--grey));
  font-size: 0.75rem;
  font-weight: 700;
  line-height: 0.8;
  letter-spacing: 0.92;
  text-transform: uppercase;
`

const LinkListItem = styled.li`
  cursor: pointer;
`

const Link = styled.a`
  &:hover {
    color: hsl(var(--d-grey));
  }
`
