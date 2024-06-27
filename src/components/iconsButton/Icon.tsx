import iconsSprite from "../../assets/icons/iconsSprite.svg";
import {StyledIcon, StyledSvg} from "../../components/iconsButton/Icon.styled";

type IconsButtonProps = {
    iconId: string
    color: string
    variant: 'svgTag'
    width?: string
    height?: string
    viewBox?: string
}
export const Icon = ({iconId, color, variant, width = '', height = '', viewBox}: IconsButtonProps) => {
    return (
            <StyledIcon variant={variant}>
                <StyledSvg color={color} fill="" height={height || '50'} width={width || '50'} version="1.1" id="Layer_1"
                     xmlns="http://www.w3.org/2000/svg"
                     xmlnsXlink="http://www.w3.org/1999/xlink" viewBox={viewBox || "-143 145 512 512"} xmlSpace="preserve"
                     stroke="">
                    <use xlinkHref={`${iconsSprite}#${iconId}`}/>
                </StyledSvg>
            </StyledIcon>
    )
}