import styled from 'styled-components'

import { BREAKPOINTS } from '../../../constants'
/*
        <source
          media={`(${BREAKPOINTS.tabletAndUp})`}
          srcSet="src/assets/about/tablet/image-commitment.jpg"
        />*/
export default function Commitment() {
  return (
    <Wrapper>
      {/* <ImageWrapper>
        <img src="src/assets/about/mobile/image-commitment.jpg" alt="" />
      </ImageWrapper> */}
      <ImageWrapper>
        <source
          media={`(${BREAKPOINTS.desktopAndUpAndUp})`}
          srcSet="src/assets/about/desktop/image-commitment.jpg"
        />
        <source
          media={`(min-width: 56.25rem)`}
          srcSet="src/assets/about/tablet/image-commitment.jpg"
        />
        <img src="src/assets/about/mobile/image-commitment.jpg" alt="" />
      </ImageWrapper>
      <InfoWrapper>
        <Header>Our commitment</Header>
        <Text>
          We’re built on a simple mission and a commitment to doing good along the way. We want to
          make it easy for you to discover and brew the world’s best coffee at home. It all starts
          at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a
          year trying to understand the challenges and opportunities in each of these places. We
          collaborate with exceptional coffee growers and empower a global community of farmers
          through with well above fair-trade benchmarks. We also offer training, support farm
          community initiatives, and invest in coffee plant science. Curating only the finest
          blends, we roast each lot to highlight tasting profiles distinctive to their native
          growing region.
        </Text>
      </InfoWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  border-radius: var(--radius);
  margin-bottom: 120px;

  @media (${BREAKPOINTS.tabletAndUp}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 69px;
    margin-bottom: 144px;
  }

  @media (${BREAKPOINTS.desktopAndUp}) {
    gap: 125px;
    margin-bottom: 168px;
  }
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 400px;
  margin-bottom: 48px;

  & > img {
    border-radius: var(--radius);
  }

  /* @media (${BREAKPOINTS.tabletAndUp}) {
    margin-bottom: 0;
    height: 470px;
  } */
  @media (min-width: 56.25rem) {
    margin-bottom: 0;
    height: 470px;
  }

  @media (${BREAKPOINTS.desktopAndUp}) {
    height: 520px;
  }
`

const InfoWrapper = styled.div``

const Header = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  color: hsl(var(--d-grey));
  font-size: 2rem;
  @media (${BREAKPOINTS.tabletAndUp}) {
    text-align: left;
  }
`

const Text = styled.p`
  text-align: center;
  @media (${BREAKPOINTS.tabletAndUp}) {
    text-align: left;
  }
`
