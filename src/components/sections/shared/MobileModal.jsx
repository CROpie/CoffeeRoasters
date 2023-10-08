import styled from 'styled-components'

import { RemoveScroll } from 'react-remove-scroll'

export default function MobileModal({ links, handleClick }) {
  return (
    <RemoveScroll>
      <ModalWrapper>
        <ModalContent>
          <MobileLinkList>
            {links.map(({ page, text }) => (
              <MobileLinkListItem key={page}>
                <MobileLink onClick={() => handleClick(page)}>{text}</MobileLink>
              </MobileLinkListItem>
            ))}
          </MobileLinkList>
        </ModalContent>
      </ModalWrapper>
    </RemoveScroll>
  )
}

const ModalWrapper = styled.section`
  position: fixed;
  top: 80px;
  bottom: 0;
  right: 0;
  left: 0;
  background: linear-gradient(0deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 1) 100%);
`

/* replicate MaxWidthWrapper */
const ModalContent = styled.div`
  max-width: 375px;
  padding-left: 24px;
  padding-right: 24px;
  margin: 0 auto;
  position: relative;

  padding-block: 40px;
  background: hsl(var(--white));
`

const MobileLinkList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 32px;

  font-family: 'Fraunces', serif;
  color: hsl(var(--d-grey));
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.333;
  letter-spacing: auto;
  text-align: center;
`

const MobileLinkListItem = styled.li`
  cursor: pointer;
`

const MobileLink = styled.a`
  &:hover {
    color: hsl(var(--grey));
  }
`
