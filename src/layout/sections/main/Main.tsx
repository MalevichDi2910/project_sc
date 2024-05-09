import React from 'react';
import sale from './../../../assets/images/sale2.jpg'
import styled from "styled-components";
import {FlexWrapper} from "./../../../components/FlexWrapper";

export const Main = () => {
    return (
        <FlexWrapper direction={'column'} justify={'center'} align={'center'}>
            <a href="https://www.nike.ae/en/sale" target={"_blank"}><StyledImage src={sale} alt={'sale'}/></a>
        </FlexWrapper>
    );
};

const StyledImage = styled.img`
  width: 1684px;
  height: 420px;
  object-fit: cover;
`