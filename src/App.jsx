import React from 'react'
import styled from 'styled-components'

import { Header, Footer } from './components/sections/shared'
import { Benefits, Collection, Instructions, Intro } from './components/sections/home'
import { AboutUs, Commitment, Headquarters, Quality } from './components/sections/about'
import { CreatePlan, PlanInstructions, Questionnaire, Modal } from './components/sections/plan'

import { PageContext } from './contexts/Page'
import { BREAKPOINTS } from './constants'

import { RemoveScroll } from 'react-remove-scroll'

export default function App() {
  const [showModal, setShowModal] = React.useState(false)

  const { showPage } = React.useContext(PageContext)

  function checkout() {
    setShowModal(true)
  }

  function closeModal() {
    setShowModal(false)
  }

  return (
    <MaxWidthWrapper>
      <Header />
      <Home page={showPage}>
        <Intro />
        <Collection />
        <Benefits />
        <Instructions />
      </Home>

      <About page={showPage}>
        <AboutUs />
        <Commitment />
        <Quality />
        <Headquarters />
      </About>

      <Plan page={showPage}>
        <CreatePlan />
        <PlanInstructions />
        <Questionnaire checkout={checkout} />
      </Plan>

      <Footer />
      {showModal && (
        <RemoveScroll>
          <Modal closeModal={closeModal} />
        </RemoveScroll>
      )}
    </MaxWidthWrapper>
  )
}

const MaxWidthWrapper = styled.main`
  outline: 2px dotted blue;
  max-width: 1440px;
  padding-top: 32px;
  padding-bottom: 72px;
  padding-inline: 24px;
  margin: 0 auto;
  position: relative;

  @media (${BREAKPOINTS.tabletAndUp}) {
    padding-inline: 40px;
  }

  @media (${BREAKPOINTS.desktopAndUp}) {
    padding-inline: 80px;
  }
`

const Home = styled.section`
  display: none;
  ${(props) => props.page === 'home' && 'display: block'};
`

const About = styled.section`
  display: none;
  ${(props) => props.page === 'about' && 'display: block'};
`

const Plan = styled.section`
  display: none;
  ${(props) => props.page === 'plan' && 'display: block'};
`
