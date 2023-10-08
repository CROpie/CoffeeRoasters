import styled from 'styled-components'
import { BREAKPOINTS } from '../../../constants'

export default function Quality() {
  return (
    <Wrapper>
      <ContentWrapper>
        <ImageWrapper>
          <source
            media={`(${BREAKPOINTS.desktopAndUp})`}
            srcSet="src/assets/about/desktop/image-quality.jpg"
          />
          <source
            media={`(${BREAKPOINTS.tabletAndUp})`}
            srcSet="src/assets/about/tablet/image-quality.jpg"
          />
          <img src="src/assets/about/mobile/image-quality.jpg" alt="" />
        </ImageWrapper>

        <InfoWrapper>
          <Header>Uncompromising quality</Header>
          <Text>
            Although we work with growers who pay close attention to all stages of harvest and
            processing, we employ, on our end, a rigorous quality control program to avoid
            over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date
            and batch number. Our goal is to roast consistent, user-friendly coffee, so that brewing
            is easy and enjoyable.
          </Text>
        </InfoWrapper>
      </ContentWrapper>
      <Background />
    </Wrapper>
  )
}

const Wrapper = styled.section`
  padding-bottom: 61px;
  margin-bottom: 120px;
  position: relative;

  @media (${BREAKPOINTS.tabletAndUp}) {
    margin-bottom: 144px;
    padding-bottom: 67px;
  }

  @media (${BREAKPOINTS.desktopAndUp}) {
    margin-bottom: 168px;
    /* padding-inline: 85px; */
  }
`
const ContentWrapper = styled.div`
  margin-inline: 24px;
  @media (${BREAKPOINTS.desktopAndUp}) {
    display: flex;
    flex-direction: row-reverse;
    gap: 125px;
    padding-inline: 85px;
    margin-inline: 0;
  }
`

const ImageWrapper = styled.picture`
  display: flex;
  justify-content: center;
  height: 156px;
  margin-bottom: 64px;

  & > img {
    border-radius: var(--radius);
  }

  @media (${BREAKPOINTS.tabletAndUp}) {
    height: 320px;
    margin-inline: 57px;
  }
  @media (${BREAKPOINTS.desktopAndUp}) {
    height: 474px;
    padding-inline: 0;
    margin-inline: 0;
    /* margin-left: 750px;
    margin-right: 85px; */
  }
`

const InfoWrapper = styled.div`
  @media (${BREAKPOINTS.tabletAndUp}) {
    padding-inline: 74px;
  }
  @media (${BREAKPOINTS.desktopAndUp}) {
    margin-top: 176px;
    padding-inline: 0;
  }
`

const Background = styled.div`
  position: absolute;
  z-index: -1;
  top: 10%;
  bottom: 0;
  left: 0;
  right: 0;
  background: hsl(var(--d-grey));
  border-radius: var(--radius);

  @media (${BREAKPOINTS.tabletAndUp}) {
    top: 20%;
  }
  @media (${BREAKPOINTS.desktopAndUp}) {
    top: 15%;
  }
`

const Header = styled.h2`
  text-align: center;
  margin-bottom: 24px;

  @media (${BREAKPOINTS.desktopAndUp}) {
    text-align: left;
  }
`

const Text = styled.p`
  text-align: center;
  color: hsl(var(--cream) / 0.8);
  @media (${BREAKPOINTS.desktopAndUp}) {
    text-align: left;
  }
`
