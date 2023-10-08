import styled from 'styled-components'
import React from 'react'
import { BREAKPOINTS } from '../../../constants'

import { ResponsesContext } from '../../../contexts/Responses'

import { QuestionItem, Summary } from './'

const questions = [
  {
    id: 1,
    theme: '01 Preferences',
    question: 'How do you drink your coffee?',
    answers: [
      {
        id: 1,
        option: 'Capsule',
        description: 'Compatible with Nespresso systems and similar brewers',
      },
      {
        id: 2,
        option: 'Filter',
        description: 'For pour over or drip methods like Aeropress, Chemex, and V60',
      },
      {
        id: 3,
        option: 'Espresso',
        description: 'Dense and finely ground beans for an intense, flavorful experience',
      },
    ],
  },
  {
    id: 2,
    theme: '02 Bean type',
    question: 'What type of coffee?',
    answers: [
      {
        id: 1,
        option: 'Single origin',
        description: 'Distinct, high quality coffee from a specific family-owned farm',
      },
      {
        id: 2,
        option: 'Decaf',
        description: 'Just like regular coffee, except the caffeine has been removed',
      },
      {
        id: 3,
        option: 'Blended',
        description: 'Combination of two or three dark roasted beans of organic coffees',
      },
    ],
  },
  {
    id: 3,
    theme: '03 Quantity',
    question: 'How much would you like?',
    answers: [
      {
        id: 1,
        option: '250g',
        description: 'Perfect for the solo drinker. Yields about 12 delicious cups.',
      },
      {
        id: 2,
        option: '500g',
        description: 'Perfect option for a couple. Yields about 40 delectable cups.',
      },
      {
        id: 3,
        option: '1000g',
        description: 'Perfect for offices and events. Yields about 90 delightful cups.',
      },
    ],
  },
  {
    id: 4,
    theme: '04 Grind option',
    question: 'Want us to grind them?',
    answers: [
      {
        id: 1,
        option: 'Wholebean',
        description: 'Best choice if you cherish the full sensory experience',
      },
      {
        id: 2,
        option: 'Filter',
        description: 'For drip or pour-over coffee methods such as V60 or Aeropress',
      },
      {
        id: 3,
        option: 'Cafetiére',
        description: 'Course ground beans specially suited for french press coffee',
      },
    ],
  },
  {
    id: 5,
    theme: '05 Deliveries',
    question: 'How often should we deliver?',
    answers: [
      {
        id: 1,
        option: 'Every week',
        description: 'per shipment. Includes free first-class shipping.',
      },
      {
        id: 2,
        option: 'Every 2 weeks',
        description: 'per shipment. Includes free priority shipping.',
      },
      {
        id: 3,
        option: 'Every month',
        description: 'per shipment. Includes free priority shipping.',
      },
    ],
  },
]

const desktopMenu = [
  { id: 1, number: '01', text: 'Preferences' },
  { id: 2, number: '02', text: 'Bean Type' },
  { id: 3, number: '03', text: 'Quantity' },
  { id: 4, number: '04', text: 'Grind Option' },
  { id: 5, number: '05', text: 'Deliveries' },
]

export default function Questionnaire({ checkout }) {
  const { responses } = React.useContext(ResponsesContext)
  const [accordion, setAccordion] = React.useState([true, false, false, false, false])

  const [isReady, setIsReady] = React.useState(false)

  function handleClickAccordion(qID) {
    const newAccordion = [...accordion]
    const currentState = accordion[qID - 1]
    const newState = !currentState
    newAccordion[qID - 1] = newState
    setAccordion(newAccordion)
  }

  function openNextAccordion(qID) {
    const newAccordion = [...accordion]
    newAccordion[qID] = true
    setAccordion(newAccordion)
  }

  // Check to see if every question has been answered
  React.useEffect(() => {
    let notReady = true
    responses.forEach((response) => {
      if (!response.id) {
        notReady = false
      }
    })
    if (!notReady) {
      return
    }
    setIsReady(true)
  }, [responses])

  return (
    <Wrapper>
      <DesktopMenu>
        {desktopMenu.map(({ id, number, text }) => (
          <>
            <MenuItemInfo key={id}>
              <Button>{number}</Button>
              <Button>{text}</Button>
            </MenuItemInfo>

            <Spacer />
          </>
        ))}
      </DesktopMenu>
      <QuestionsListWrapper>
        {questions.map(({ id: qID, question, answers }) => (
          <QuestionItem
            key={qID}
            qID={qID}
            question={question}
            answers={answers}
            isopen={accordion[qID - 1]}
            handleClickAccordion={handleClickAccordion}
            openNextAccordion={openNextAccordion}
          />
        ))}
        <Summary responses={responses} isReady={isReady} checkout={checkout} />
      </QuestionsListWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  position: relative;
  padding-block: 24px;
  margin-bottom: 120px;

  @media (${BREAKPOINTS.tabletAndUp}) {
    margin-bottom: 144px;
  }
  @media (${BREAKPOINTS.desktopAndUp}) {
    margin-bottom: 168px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 0px 125px;
  }
`

const DesktopMenu = styled.div`
  display: none;
  @media (${BREAKPOINTS.desktopAndUp}) {
    display: flex;
    flex-direction: column;
    gap: 24px;
  }
`

const MenuItemInfo = styled.div`
  display: flex;
  gap: 29px;
  color: hsl(var(--d-grey) / 0.5);
  &:hover {
    color: hsl(var(--d-grey) / 0.8);
  }
`

const Button = styled.button`
  font-family: 'Fraunces', serif;
  color: inherit;
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.333;
  letter-spacing: auto;
`

const Spacer = styled.div`
  &:not(:last-of-type) {
    width: 100%;
    border-bottom: 1px solid hsl(var(--l-grey) / 0.3);
  }
`

const QuestionsListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 110px;
  margin-bottom: 144px;

  @media (${BREAKPOINTS.tabletAndUp}) {
    gap: 100px;
  }

  @media (${BREAKPOINTS.desktopAndUp}) {
    gap: 88px;
    margin-bottom: 88px;
  }
`
