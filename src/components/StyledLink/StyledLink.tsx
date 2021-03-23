import styled from '@emotion/styled'
import React from 'react'

const StyledA = styled.a`
  color: ${({ theme }) => theme.colors.highlight.css};
  cursor: pointer;
  position: relative;
  text-decoration: none;

  &::before {
    background-color: ${({ theme }) => theme.colors.highlight.css};
    bottom: -2px;
    content: '';
    height: 1px;
    left: -1%;
    position: absolute;
    transition: all 0.32s ease-out;
    width: 0;
  }

  &:hover,
  &:focus {
    border: 0;
    outline: 0;
    &::before {
      width: 102%;
    }
  }
`

type StyledLinkType = {
  href: string
  children: React.ReactNode
}

export const StyledLink = ({ href, children }: StyledLinkType) => (
  <StyledA href={href} target='_blank' rel='noreferrer noopener'>
    {children}
  </StyledA>
)
