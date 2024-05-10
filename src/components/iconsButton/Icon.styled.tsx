import styled, {css} from "styled-components";
import {ComponentPropsWithRef, ElementType} from "react";

type StyledIconProps = {
    variant: 'svgTag'
}

type SvgIconProps<T extends ElementType = 'svg'>= {
    color: string
} & ComponentPropsWithRef<T>

export const StyledIcon = styled.button<StyledIconProps>`
  border: none;
  height: 30px;
  width: 30px;
  border-radius: 50%;
  cursor: pointer;
  padding: 0;
  
  // svg
  ${({variant}) => variant === 'svgTag' && css<StyledIconProps>`
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
  ` }
`

export const StyledSvg = styled.svg<SvgIconProps>`
  cursor: pointer;
  fill: ${({ color}) => color};
  
  &:hover {
    fill: snow;
  }
`