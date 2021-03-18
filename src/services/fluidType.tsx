import { SerializedStyles, css } from '@emotion/react'

export const fluidType = (
  minVW: string,
  maxVW: string,
  minFontSize: string,
  maxFontSize: string
): SerializedStyles => {
  return css`
    font-size: ${minFontSize};
    @media (minwidth: ${minVW}) {
      font-size: calc(
        ${minFontSize} + ${parseFloat(maxFontSize) - parseFloat(minFontSize)} *
          ((100vw - ${minVW}) / ${parseFloat(maxVW) - parseFloat(minVW)})
      );
    }
    @media (min-width: ${maxVW}) {
      font-size: ${maxFontSize};
    }
  `
}
