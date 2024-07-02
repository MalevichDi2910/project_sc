import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "./../../../components/FlexWrapper";
import {Link} from "./../../../components/link/Link.styled";

export const ShopifySectionText = () => {
    return (
        <FlexWrapper justify={'center'} align={'center'}>
            <StyledSection>
                <StyledHeader>
                    <MainTitle>SPRING SUMMER 2024</MainTitle>
                    <Link color={'#1c1b1b'} decoration={'none'} weight={'400'} href={'#'} target={'_blank'}>Discover
                        now</Link>
                </StyledHeader>
            </StyledSection>
        </FlexWrapper>
    );
};

const StyledSection = styled.section`
  padding: 80px 0;
`

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const MainTitle = styled.h2`
  font-weight: 400;
  font-style: normal;
  color: #1c1b1b;
  transition: color .2s ease-in-out;
  letter-spacing: .2em;
  text-transform: uppercase;
  margin-bottom: 20px;
`


