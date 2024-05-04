import styled from "styled-components";

type LinkProps = {
    color?: string
    size?: string
    weight?: string
    decoration?: string
    height?: string
    padding?: string
}

export const Link = styled.a<LinkProps>`
  cursor: pointer;
  background-color: transparent;
  padding: ${({padding}) => padding || '0'};;
  text-decoration: ${({decoration}) => decoration || 'underline'};
  color: ${({color}) => color || 'black'};
  font-size: ${({color}) => color || '2rem'};
  font-weight: ${({weight}) => weight || 'bold'};
  line-height: ${({height}) => height || '1.65'};
`

