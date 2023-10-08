import styled from 'styled-components'
import Icon from '../../icons/Icon'
import React from 'react'
import { PageContext } from '../../../contexts/Page'
import { BREAKPOINTS } from '../../../constants'

const links = [
  { page: 'home', text: 'Home' },
  { page: 'about', text: 'About us' },
  { page: 'plan', text: 'Create your plan' },
]

const socialLinks = [{ page: 'facebook' }, { page: 'twitter' }, { page: 'instagram' }]

export default function Footer() {
  const { setShowPage } = React.useContext(PageContext)

  function handleClick(page) {
    setShowPage(page)
  }
  return (
    <Wrapper>
      <IconWrapper>
        <Icon id="logo" />
      </IconWrapper>
      <LinkList>
        {links.map(({ page, text }) => (
          <LinkListItem key={page}>
            <Link onClick={() => handleClick(page)}>{text}</Link>
          </LinkListItem>
        ))}
      </LinkList>

      <SocialList>
        {socialLinks.map(({ page }) => (
          <SocialListItem key={page}>
            <Social>
              <Icon id={page} />
            </Social>
          </SocialListItem>
        ))}
      </SocialList>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
  padding-block: 55px;
  background: hsl(var(--d-grey));
  display: grid;
  gap: 50px;

  @media (${BREAKPOINTS.tabletAndUp}) {
    display: block;
  }
  @media (${BREAKPOINTS.desktopAndUp}) {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-inline: 85px;
    padding-block: 47px;
  }
`

const IconWrapper = styled.div`
  height: 24px;
  color: hsl(var(--white));
  display: flex;
  justify-content: center;
  @media (${BREAKPOINTS.tabletAndUp}) {
    margin-bottom: 32px;
  }
  @media (${BREAKPOINTS.desktopAndUp}) {
    margin-bottom: 0;
  }
`

const LinkList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  color: hsl(var(--grey));

  font-size: 0.75rem;
  font-size: clamp(0.9375rem, 0.91rem + 0.14vw, 1rem);
  font-weight: 700;
  line-height: 1.25;
  letter-spacing: 0.92px;

  text-transform: uppercase;

  @media (${BREAKPOINTS.tabletAndUp}) {
    margin-bottom: 65px;
    flex-direction: row;
    justify-content: center;
    gap: 33px;
  }
  @media (${BREAKPOINTS.desktopAndUp}) {
    margin-bottom: 0;
  }
`

const LinkListItem = styled.li`
  cursor: pointer;
`

const Link = styled.a`
  &:hover {
    color: hsl(var(--white));
  }
`

const SocialList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 24px;
`

const SocialListItem = styled.li`
  cursor: pointer;
`

const Social = styled.a`
  color: hsl(var(--cream));
  &:hover {
    color: hsl(var(--orange));
  }
`
