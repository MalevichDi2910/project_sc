import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "./../../../components/FlexWrapper";
import jackets from "./../../../assets/images/jackets.webp"
import blazers from "./../../../assets/images/blazers.webp"
import bags from "./../../../assets/images/bags.webp"
import dresses from "./../../../assets/images/dresses.webp"
import denim from "./../../../assets/images/denim.webp"
import shirt from "./../../../assets/images/shirt.webp"
import {CollectionItem} from "./collectionItem/CollectionItem";

export const ShopifySection = () => {
    return (
        <StyledSection>
                <FlexWrapper wrap={'wrap'} justify={'space-between'}>
                    <CollectionItem link={''} src={jackets}/>
                    <CollectionItem link={''} src={blazers}/>
                    <CollectionItem link={''} src={bags}/>
                    <CollectionItem link={''} src={dresses}/>
                    <CollectionItem link={''} src={denim}/>
                    <CollectionItem link={''} src={shirt}/>
                </FlexWrapper>
        </StyledSection>

    );
};

const StyledSection = styled.section`
  min-height: 100vh;
  padding-right: 48px;
  padding-left: 48px;
`


