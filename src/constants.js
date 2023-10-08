// export const BREAKPOINTS = {
//   tabletAndUp: '48rem',
//   // tabletAndUp: '37.5rem',
//   // tabletAndUp: '46.875rem',
//   desktopAndUp: '59.275rem',
// }

export const BREAKPOINTS = {
  tabletAndUp: 'min-width: 48rem',
  // tabletAndUp: '37.5rem',
  // tabletAndUp: '46.875rem',
  desktopAndUp: 'min-width: 90rem',
}

/*
Don't have to type min-width everywhere with these:


  @media (${BREAKPOINTS.tabletAndUp}) {

<picture>
  <source media={`(${BREAKPOINTS.tabletAndUp})`}

  */
