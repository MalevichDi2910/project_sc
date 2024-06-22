import React from 'react';
import styled from "styled-components";

type CollectionItemProps = {
    link: string
    src: string
    title?: string
}

export const CollectionItem = ({link, src}: CollectionItemProps) => {
    return (
        <StyledCollectionItem>
            <Link href={link} target={'_blank'}>
                <Image src={src} alt={''}></Image>
            </Link>
        </StyledCollectionItem>
    );
};

const StyledCollectionItem = styled.div`
  max-width: 790px;
  width: 100%;
`

const Image = styled.img`
  width: 100%;
  height: 500px;
  object-fit: cover;
`

const Link = styled.a`
  padding: 0;
  margin: 0;
  color: inherit;
  background-color: transparent;
`


// const StyledCollectionItem = styled.div`
//   //height: 700px;
//   //width: 840px;
//   //background-size: cover;
//   //background-position: center;
//   //overflow: hidden;
// `
//
// const ImageWrapper = styled.div`
//   background-size: cover;
//   background-position: center;
//   height: 100%;
//   width: 100%;
//   transform: scale(1);
//   transition: transform 8s cubic-bezier(.25, .46, .45, .94);
// `
//
// const ImageZoom = styled.div`
//   opacity: 1;
//   transform: none;
// `