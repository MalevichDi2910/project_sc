import React from 'react';
import {Icon} from "./../../components/iconsButton/Icon";
import styled from "styled-components";
import {FlexWrapper} from "./../../components/FlexWrapper";

type FooterProps = {
    link: string
    color: string
    iconId: string
}
export const Footer = ({link, color, iconId}: FooterProps) => {
    return (
        <StyledFooter>
            <FlexWrapper direction={'column'} justify={'space-between'}>
                <Container>
                    <FlexWrapper direction={'column'} gap={'20px'}>
                        <SocialLink href={''} target={'_blank'}>CONTACT</SocialLink>
                        <SocialLink href={''} target={'_blank'}>SIGN UP</SocialLink>
                    </FlexWrapper>
                    <FlexWrapper justify={'flex-end'}>
                        <SocialList>
                            <SocialItem>
                                <SocialLink href={''} target={'_blank'}>
                                    <Icon variant={'svgTag'} color={'#7e7e7e'} iconId={'facebook'}></Icon>
                                </SocialLink>
                            </SocialItem>
                            <SocialItem>
                                <SocialLink href={''} target={'_blank'}>
                                    <Icon variant={'svgTag'} color={'#7e7e7e'} iconId={'instagram'}></Icon>
                                </SocialLink>
                            </SocialItem>
                            <SocialItem>
                                <SocialLink href={''} target={'_blank'}>
                                    <Icon variant={'svgTag'} color={'#7e7e7e'} iconId={'facebook'}></Icon>
                                </SocialLink>
                            </SocialItem>
                        </SocialList>
                    </FlexWrapper>
                </Container>

                {/*<a href="https://www.facebook.com/" target={'_blank'}>*/}
                {/*    <Icon variant={'svgTag'} color={'#7e7e7e'} iconId={'facebook'}></Icon>*/}
                {/*</a>*/}
                {/*<a href="https://www.instagram.com/" target={'_blank'}>*/}
                {/*    <Icon variant={'svgTag'} color={'#7e7e7e'} iconId={'instagram'}></Icon>*/}
                {/*</a>*/}
                {/*<a href="https://web.whatsapp.com/" target={'_blank'}>*/}
                {/*    <Icon variant={'svgTag'} color={'#7e7e7e'} iconId={'whatsApp'}></Icon>*/}
                {/*</a>*/}

                {/*<Copyright>© 2024 Ads jewelry</Copyright>*/}
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  background-color: #111111;
  height: 35vh;
  padding-top: 45px;
  padding-right: 150px;
  padding-left: 150px;
`

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1200px;
`

const SocialList = styled.ul`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  cursor: pointer;
  list-style: none;
  padding: 0;
`
const SocialItem = styled.li`

`

const SocialLink = styled.a`
  text-decoration: none;
  transition-delay: 0s;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  text-transform: uppercase;
`

const Copyright = styled.small`
  color: #757575;
`