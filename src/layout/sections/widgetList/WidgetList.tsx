import React from 'react';
import styled from "styled-components";
import wedding from './../../../assets/images/wedding.jpg'
import book from './../../../assets/images/book.jpg'
import summer from './../../../assets/images/summer.jpg'
import games from './../../../assets/images/games.jpg'
import beauty from './../../../assets/images/beauty.jpg'
import kids from './../../../assets/images/kids.jpg'
import {Link} from "./../../../components/link/Link.styled";

export const WidgetList = () => {
    return (
        <StyledWidgetList>
            <PopularWidgetContainer>
            <Title>popular on the site</Title>
            <PopularWidget>
                <Link padding={'2px'} href={''} target={'_blank'}><Image src={wedding} alt=""/></Link>
                <Link padding={'2px'} href={''} target={'_blank'}><Image src={book} alt=""/></Link>
                <Link padding={'2px'} href={''} target={'_blank'}><Image src={summer} alt=""/></Link>
                <Link padding={'2px'} href={''} target={'_blank'}><Image src={games} alt=""/></Link>
                <Link padding={'2px'} href={''} target={'_blank'}><Image src={beauty} alt=""/></Link>
                <Link padding={'2px'} href={''} target={'_blank'}><Image src={kids} alt=""/></Link>
            </PopularWidget>
            </PopularWidgetContainer>
        </StyledWidgetList>
    );
};

const StyledWidgetList = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 12px 0 24px;
  margin: 0 24px;
`

const PopularWidgetContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

const PopularWidget = styled.div`
  display: flex;
  margin: 8px 0;
  flex-wrap: wrap;
  box-sizing: border-box;
`

const Title = styled.div`
  color: rgba(0, 0, 0, .48);
  text-transform: uppercase;
  font-size: 11px;
  line-height: 16px;
  margin-left: 5px;
`

const Image = styled.img`
  width: 200px;
  height: 120px;
  border-radius: 5px;
  object-fit: cover;
`