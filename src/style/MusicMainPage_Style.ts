import styled from "styled-components";
import { MobileBreakPoints } from "../constants/MobileConstants.ts";

export const MainContainer = styled.div`
    display: flex;
    width: 100vw;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: '나눔 고딕', -apple-system, 'Apple SD Gothic Neo', '맑은 고딕', 'Nanum Gothic', sans-serif;

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        
    }
`
export const MusicContainer = styled.div`
    width: 80%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    padding: 30px;
    justify-content: center;

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        width: 80%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 5px;
        padding: 0;
    }
`
export const MusicCard = styled.div`
    width: 100%;
    margin: 10px;

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        width: 90%;
    }
    
    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`
export const MusicCardThumbnail = styled.img`
    width: 100%;
    height: auto;
`
export const MusicCardTitle = styled.div`
    font-weight: bold;

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        font-size: 1rem;
    }
`
export const MusicCardSinger = styled.div`
    color: gray;
    
    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        font-size: 1rem;
    }
`
export const PageSelector = styled.div`
    display: flex;
    margin-block: 20px;
    gap: 10px;

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        margin-block: 10px;
        gap: 5px;
    }
`
interface PageProps {
    isCurrent: boolean
}
export const PageButton = styled.div<PageProps>`
    display: flex;
    font-size: 15px;
    justify-content: center;
    align-items: center;
    padding-inline: 10px;
    padding-block: 5px;
    border: 1px solid lightgray;
    border-radius: 10px;
    background-color: ${ props => props.isCurrent ? "lightgray" : "white" };

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        
    }
    
    &:hover {
        cursor: pointer;
    }
`

// 최하단 정보 컨테이너
export const BottomInformationContainer = styled.div`
    width: 100vw;
    height: 15vh;
    background-color: black;
    margin-top: 2%;
`