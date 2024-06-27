import React from 'react';
import styled from "styled-components";
import {Logo} from "./../../components/logo/Logo";

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Cities>
                <Link href="#" target={'_blank'}>
                    <svg height={'20px'} width={'20px'} version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                         xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" enable-background="new 0 0 64 64"
                         xmlSpace="preserve" fill="#ffffff">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path fill="#ffff"
                                  d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"></path>
                        </g>
                    </svg>
                    <Text>Cairo</Text>
                </Link>
            </Cities>
            <Search placeholder={'Search for places and events'}/>

            <HeaderButton>
                <Link href="#" target={'_blank'}>
                    <svg height={'20px'} width={'20px'} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M11.9694 22C12.5756 22 12.9181 21.4709 13.8945 20.435C15.115 19.1402 16.2918 17.9336 17.1462 17.0272C19.6691 14.3511 20.661 13.3356 21.3649 12.5433C23.2357 10.4378 23.4784 7.51229 22.2097 5.29142C20.6101 2.49159 18.2247 2 16.9421 2C15.6594 2 14.7421 2.49159 13.1221 3.75703L11.9989 4.8084L10.9063 3.75703C9.1489 2.25488 7.87646 2 7.05939 2C6.37842 2 3.5339 2.00043 1.70086 5.29142C0.363371 7.6927 1.0623 10.6507 2.76628 12.5433C3.07139 12.8822 4.32884 14.1998 6.51094 16.572C7.3895 17.5272 8.63263 18.8407 9.54781 19.8382C10.0663 20.4034 11.3631 22 11.9694 22Z"
                                  stroke="#fff" stroke-width="1.5"></path>
                        </g>
                    </svg>
                    <Text>Favorites</Text>
                </Link>
            </HeaderButton>

            <HeaderButton>
                <Link href="#" target={'_blank'}>
                    <svg height={'30px'} width={'30px'} viewBox="0 -0.5 25 25" fill="none"
                         xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M16.5 9C16.5 11.2091 14.7091 13 12.5 13C10.2909 13 8.5 11.2091 8.5 9C8.5 6.79086 10.2909 5 12.5 5C13.5609 5 14.5783 5.42143 15.3284 6.17157C16.0786 6.92172 16.5 7.93913 16.5 9Z"
                                  stroke="#fff" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"></path>
                            <path d="M5.5 18.9999C9.78787 16.3408 15.2121 16.3408 19.5 18.9999" stroke="#fff"
                                  stroke-width="1" stroke-linecap="round"></path>
                        </g>
                    </svg>
                    <Text>Sign in</Text>
                </Link>
            </HeaderButton>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 100%;
  min-height: 48px;
  background-color: #8c61ff;
  position: relative;
  padding-left: 24px;
  padding-right: 0;
`

const Cities = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 24px;
  height: 46px;
  border-left: 1px solid hsla(0, 0%, 100%, .16);
  border-right: 1px solid hsla(0, 0%, 100%, .16);

  &:hover {
    background-color: hsla(0, 0%, 100%, .16);;
  }
`

const Search = styled.input`
  height: 36px;
  border-radius: 18px;
  background-color: #fff;
  border: none;
  width: 560px;
  margin: 0 auto;
  padding-left: 20px;
  font-size: 17px;
  font-weight: normal;
  outline: none;

  &::placeholder {
    text-align: center;
    color: rgba(0, 0, 0, .48);;
  }
`

const Text = styled.span`
  color: snow;
`

const Link = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  padding: 0 12px;
  text-decoration: none;
  font-size: 15px;
  line-height: 16px;
  white-space: nowrap;
`

const HeaderButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-left: 1px solid hsla(0, 0%, 100%, .16);
  border-right: 1px solid hsla(0, 0%, 100%, .16);
  height: 46px;

  &:hover {
    background-color: hsla(0, 0%, 100%, .16);;
  }
`