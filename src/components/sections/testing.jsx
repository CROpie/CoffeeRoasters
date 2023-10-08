import styled from 'styled-components'

import { BREAKPOINTS } from '../../constants'

export default function Testing() {
  return (
    <MaxWidthWrapper>
      <Wrapper>
        <ImageWrapper>
          <source
            media={`(${BREAKPOINTS.tabletAndUp})`}
            srcSet="src/assets/about/tablet/image-commitment.jpg"
          />
          <img src="src/assets/about/mobile/image-commitment.jpg" alt="" />
        </ImageWrapper>
        <InfoWrapper>
          <Header>Our commitment</Header>
          <Text>
            We’re built on a simple mission and a commitment to doing good along the way. We want to
            make it easy for you to discover and brew the world’s best coffee at home. It all starts
            at the source. To locate the specific lots we want to purchase, we travel nearly 60 days
            a year trying to understand the challenges and opportunities in each of these places. We
            collaborate with exceptional coffee growers and empower a global community of farmers
            through with well above fair-trade benchmarks. We also offer training, support farm
            community initiatives, and invest in coffee plant science. Curating only the finest
            blends, we roast each lot to highlight tasting profiles distinctive to their native
            growing region.
          </Text>
        </InfoWrapper>
      </Wrapper>
    </MaxWidthWrapper>
  )
}

const MaxWidthWrapper = styled.main`
  max-width: 768px;
  padding-top: 32px;
  padding-bottom: 72px;
  padding-inline: 24px;
  margin: 0 auto;
  position: relative;
  border: 2px solid black;

  @media (${BREAKPOINTS.tabletAndUp}) {
    padding-inline: 40px;
  }
`

const Wrapper = styled.section`
  border: 2px solid black;
  border-radius: var(--radius);
  margin-bottom: 120px;

  @media (${BREAKPOINTS.tabletAndUp}) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 69px;
    align-items: center;
  }
`
const ImageWrapper = styled.picture`
  display: flex;
  justify-content: center;
  margin-bottom: 48px;
  height: 400px;

  & > img {
    border-radius: var(--radius);
  }

  @media (${BREAKPOINTS.tabletAndUp}) {
    margin-bottom: 0;
    height: 470px;
  }
`

const InfoWrapper = styled.div`
  @media (${BREAKPOINTS.tabletAndUp}) {
    margin-block: 8px;
  }
`

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
