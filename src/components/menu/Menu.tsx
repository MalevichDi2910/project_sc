import React from 'react';
import styled from "styled-components";

type MenuProps = {
    menuItems: string[]
}
export const Menu = ({menuItems}: MenuProps) => {
    return (
        <StyledMenu>
            <Categories>
                {menuItems.map((item, index) => (
                    <LinkItem>
                        <CategoriesItem>
                            <svg height={'40px'} width={'40px'} fill="#e36d49" viewBox="0 0 128 128" id="Layer_1" version="1.1" xmlSpace="preserve"
                                 xmlns="http://www.w3.org/2000/svg"
                                 xmlnsXlink="http://www.w3.org/1999/xlink">
                                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <g>
                                        <path
                                            d="M122.1,84.3h-9.6C111.6,60.5,93.9,41,71,37.2V35c0-3.4-2.8-6.2-6.2-6.2c-3.4,0-6.2,2.8-6.2,6.2v1.7 c-24.8,2.1-44.4,22.5-45.3,47.6H7.6c-0.9,0-1.6,0.8-1.6,1.9c0,1,0.7,1.9,1.6,1.9h7.5h95.5h11.4c0.9,0,1.6-0.8,1.6-1.9 C123.7,85.1,122.9,84.3,122.1,84.3z M17,84.3c1-24.4,21.2-44,45.9-44c24.7,0,44.9,19.6,45.9,44H17z M64.8,32.5 c1.4,0,2.5,1.1,2.5,2.5v1.7c-1.5-0.1-2.9-0.2-4.4-0.2c-0.2,0-0.3,0-0.5,0V35C62.4,33.7,63.5,32.5,64.8,32.5z"></path>
                                        <path
                                            d="M87.2,51c-1-0.2-2,0.4-2.2,1.5c-0.2,1,0.4,2,1.4,2.2c0.3,0.1,6.5,1.5,9.6,10.6c0.3,0.8,1,1.3,1.8,1.3c0.2,0,0.4,0,0.6-0.1 c1-0.3,1.5-1.4,1.2-2.4C95.8,52.8,87.6,51,87.2,51z"></path>
                                    </g>
                                </g>
                            </svg>
                            <span key={index}>{item}</span>
                        </CategoriesItem>
                    </LinkItem>
                ))}
            </Categories>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
  width: 100%;
  height: 108px;
  padding-bottom: 0;
  flex-wrap: wrap;
  box-sizing: border-box;
  overflow-x: hidden;
  overflow-y: hidden;
`

const Categories = styled.div`
  display: flex;
  overflow-x: scroll;
  will-change: transform;
`

const CategoriesItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 12px;
  height: 108px;
  min-width: 170px;
  border-right: 1px solid rgba(0, 0, 0, .08);
  border-bottom: 1px solid rgba(0, 0, 0, .08);
  background-clip: padding-box;
  transition-duration: .12s;
  transition-timing-function: ease-in-out;
  transition-property: background-color;
  text-align: center;

  span {
    margin-top: 4px;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  &:hover {
    background: rgba(0, 0, 0, .04);
  }
`

const LinkItem = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: #000;
`
