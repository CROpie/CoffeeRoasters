import styled from 'styled-components'
import React from 'react'
import { BREAKPOINTS } from '../../../constants'

import AnswerItem from './AnswerItem'
import Icon from '../../icons/Icon'
import { ResponsesContext } from '../../../contexts/Responses'

export default function QuestionItem({
  qID,
  question,
  answers,
  isopen,
  handleClickAccordion,
  openNextAccordion,
}) {
  const { responses, setResponses } = React.useContext(ResponsesContext)

  function handleClick(aID, option) {
    const newResponse = { id: aID, option }
    const newResponses = [...responses]
    newResponses[qID - 1] = newResponse

    setResponses(newResponses)
    openNextAccordion(qID)
  }

  return (
    <QuestionItemWrapper key={qID}>
      <HeadingWrapper onClick={() => handleClickAccordion(qID)} isopen={isopen}>
        <QuestionHeading>{question}</QuestionHeading>
        <IconWrapper isopen={isopen}>
          <Icon id="arrow" />
        </IconWrapper>
      </HeadingWrapper>
      <AnswersList isopen={isopen}>
        {answers.map(({ id: aID, option, description }) => {
          const isSelected = responses[qID - 1]?.id === aID
          const selectedAmountID = responses[2].id

          return (
            <AnswerItem
              key={aID}
              qID={qID}
              aID={aID}
              option={option}
              description={description}
              selectedAmountID={selectedAmountID}
              isselected={isSelected}
              handleClick={handleClick}
            />
          )
        })}
      </AnswersList>
    </QuestionItemWrapper>
  )
}

const AnswersList = styled.ul`
  display: none;
  ${(props) => props.isopen && 'display: flex'};

  flex-direction: column;
  gap: 16px;

  @media (${BREAKPOINTS.tabletAndUp}) {
    display: none;
    ${(props) => props.isopen && 'display: grid'};
    grid-template-columns: 1fr 1fr 1fr;
    gap: 10px;
  }
  @media (${BREAKPOINTS.desktopAndUp}) {
    margin-bottom: 23px;
  }
`

const QuestionItemWrapper = styled.li``
const HeadingWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  align-items: center;
  cursor: pointer;
`

const QuestionHeading = styled.h4`
  color: hsl(var(--grey));
  @media (${BREAKPOINTS.tabletAndUp}) {
    margin-bottom: 40px;
    font-size: 2rem;
  }

  @media (${BREAKPOINTS.desktopAndUp}) {
    margin-bottom: 56px;
  }
`

const IconWrapper = styled.div`
  height: 16px;
  ${(props) => props.isopen && `transform: rotate(180deg)`};
`
