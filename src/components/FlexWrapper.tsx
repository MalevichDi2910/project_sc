import styled from "styled-components";

type FlexWrapperProps = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    gap?: string
    borderRight?: string
    borderLeft?: string
}

export const FlexWrapper = styled.div<FlexWrapperProps>`
  display: flex;
  flex-direction: ${({direction}) => direction || 'row'};
  justify-content: ${({justify}) => justify || 'flex-start'};
  align-items: ${({align}) => align || 'stretch'};
  flex-wrap: ${({wrap}) => wrap || 'nowrap'};
  gap: ${({gap}) => gap};
  border-right: ${({borderRight}) => borderRight};
  border-left: ${({borderLeft}) => borderLeft};
`