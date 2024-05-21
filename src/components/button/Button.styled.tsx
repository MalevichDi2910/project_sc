import styled, {css} from "styled-components";

type StyledBtnPropsType = {
    color?: string
    fontSize?: string
    variant: 'primary' | 'outlined'
    active?: boolean
}
export const StyledBtn = styled.button<StyledBtnPropsType>`
  border: none;
  border-radius: 10px;
  padding: 10px 20px;
  font-size: ${props => props.fontSize || '2rem'};;
  font-weight: bold;

  //primary
  ${props => props.variant === 'primary' && css<StyledBtnPropsType>`
    background-color: ${props => props.color || "blueviolet"};
    color: snow;

    &:hover {
      background-color: lightpink;
    }
  `} 
          //outlined
  ${props => props.variant === 'outlined' && css<StyledBtnPropsType>`
    border: 2px solid ${props => props.color || "blueviolet"};
    color: ${props => props.color || "blueviolet"};
    background-color: transparent;

    &:hover {
      border-color: lightpink;
      color: lightpink;
      background-color: transparent;
    }
  `} 
    //active
  ${props => props.active && css<StyledBtnPropsType>`
    box-shadow: 5px 5px 5px 5px rgba(102, 55, 140, 0.47);
  `}
`