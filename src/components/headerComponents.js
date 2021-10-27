// declaring header components it will be fetched in App.js

import styled from 'styled-components';
export const Header = styled.div`
color:white;
background-color:#21241D;
display: flex;
flex-direction: row;
padding: 20px;
font-size: 30px;
justify-content: space-between;
font-weight: bold;
`

export const AppNameConponent = styled.div`

display: flex;
align-items:center;


`;

export const AppIcon = styled.img`

width:100px;


`;

export const SearchComponent =styled.div`

display: flex;
flex-direction: row;
background-color: white;
padding: 5px;
border-radius: 6px;
`;


export const SearchInput = styled.input`

box-shadow: 0 3px 10px 0 #aaa;
border-radius: 10px 10px 10px;
width: 100%;
outline: none;
font-size: 16px;
margin-left: 15px;
font-weight: bold;
`;

export const Searchbtn = styled.button`

background-color: white;
outline: none;
border: none;
`;
