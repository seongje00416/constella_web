import styled from "styled-components";
import { MobileBreakPoints } from "../constants/MobileConstants.ts";

export const MainContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    font-family: '나눔 고딕', -apple-system, 'Apple SD Gothic Neo', '맑은 고딕', 'Nanum Gothic', sans-serif;
    background-color: white;
    color: black;
`
export const CenterContainer = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`
export const TitleContainer = styled.div`
    width: 100%;
    font-size: 1.5rem;
    font-weight: bold;
    margin-block: 10px;
    color: mediumpurple;

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        font-size: 1.3rem;
    }
`
export const InformationContainer = styled.div`
    width: 100%;
    background-color: whitesmoke;
    border-radius: 10px;
    display: flex;

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        height: 7vh;
    }
`
export const InformationText = styled.div`
    margin: 15px;
    font-size: 1.3rem;
    font-weight: bold;
    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        font-size: 1rem;
    }
    
`
export const CardContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 1%;

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        flex-direction: column;
        align-items: center;
        gap: 5px;
    }
`
export const MemberCard = styled.div`
    width: 20%;
    height: 95%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 1px solid gray;
    border-radius: 15px;
    margin: 15px;

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        width: 90%;
        height: 40vh;
        margin: 10px;
    }
`
export const MemberCardThumbnail = styled.div`
    width: 70%;
    height: 50%;
    margin: 10px;
    display: flex;
    justify-content: center;
    overflow: hidden;

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {  
        height: 70%;
    }
`
export const MemberCardImage = styled.img`
    height: auto;

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        width: auto;
        height: 100%;
    }
`
export const MemberCardName = styled.div`
    height: 25%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        height: 10%;
    }
    
`
export const MemberCardNameText = styled.p`
    font-weight: bold;
    font-size: 1.1rem;
    margin: 0;

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        font-size: 1rem;
    }
`
export const MemberCardNameDescription = styled.p`
    font-size: 0.95rem;
    color: gray;
    margin: 0;

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        font-size: 0.8rem;
    }
`
export const MemberCardMusic = styled.div`
    
`
export const MemberCardMusicThumbnail = styled.div`
    
`
export const MemberCardMusicImage = styled.img`
    width: 100%;
    height: auto;
    object-fit: cover;
    border: 1px solid lightgray;
`
export const MemberCardTitle = styled.div`
    width: 100%;
    height: 15%;
    color: white;
    background-color: mediumpurple;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    font-size: 28px;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        display: none;
    }
`
export const MemberCardSeason = styled.div`
    height: 20%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-size: 24px;
    color: mediumpurple;

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        display: none;
    }
`
// 최하단 정보 컨테이너
export const BottomInformationContainer = styled.div`
    width: 100vw;
    height: 15vh;
    background-color: black;
    margin-top: 2%;
`