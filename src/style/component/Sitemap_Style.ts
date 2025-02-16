import styled from "styled-components";

export const MainContainer = styled.div`
    height: 93vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const SitemapMenuItem = styled.div`
    width: 70%;
    margin-block: 10px;
    text-align: center;
    font-size: 1.2rem;
    font-weight: bold;
    
    &:hover {
        cursor: pointer;
    }
`