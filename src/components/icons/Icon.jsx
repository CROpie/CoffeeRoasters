import styled from 'styled-components'
import Logo from './Logo'
import Hamburger from './Hamburger'
import Bean from './Bean'
import Gift from './Gift'
import Truck from './Truck'
import Facebook from './Facebook'
import Twitter from './Twitter'
import Instagram from './Instagram'
import Australia from './Australia'
import Canada from './Canada'
import UK from './UK'
import Arrow from './Arrow'
import Close from './Close'

const icons = {
  logo: Logo,
  hamburger: Hamburger,
  bean: Bean,
  gift: Gift,
  truck: Truck,
  facebook: Facebook,
  twitter: Twitter,
  instagram: Instagram,
  australia: Australia,
  canada: Canada,
  uk: UK,
  arrow: Arrow,
  close: Close,
}

const Icon = ({ id, height, color, size, strokeWidth, ...delegated }) => {
  const Component = icons[id]

  if (!Component) {
    throw new Error(`No icon found for ID: ${id}`)
  }

  return (
    <Wrapper height={height} strokeWidth={strokeWidth} {...delegated}>
      <Component color={color} size={size} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  height: ${(p) => (p.height ? p.height : '100%')};

  & > svg {
    display: block;
    stroke-width: ${(p) => (p.strokeWidth !== undefined ? p.strokeWidth + 'px' : undefined)};
  }
`

export default Icon
