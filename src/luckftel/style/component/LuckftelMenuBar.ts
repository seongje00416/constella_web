import styled from "styled-components";

export const MenuBarContainer = styled.div`
    display: flex;
    position: sticky;
    align-items: center;
    background-color: white;
    color: black;
    width: 100vw;
    height: 50px;
    top: 0;
    z-index: 10;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    font-family: "Tahoma", sans-serif;
`
export const LogoItem = styled.div`
    margin-inline: 50px;
    font-size: 1.3rem;
    font-weight: bold;
    color: pink;
    
    &:hover {
        cursor: pointer;
    }
`
export const MenuItem = styled.div`
    margin-inline: 10px;
    
    &:hover {
        cursor: pointer;
        font-weight: bold;
        color: lightpink;
    }
`
export const MenuButton = styled.div`
    display: none;
    
    &:hover {
        cursor: pointer;
    }
`
export const MenuButtonIcon = styled.img`
    display: none;
    
`