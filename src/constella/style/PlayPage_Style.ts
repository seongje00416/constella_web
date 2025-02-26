import styled from "styled-components";
import {MobileBreakPoints} from "../constants/MobileConstants.ts";

export const MainContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    font-family: '나눔 고딕', -apple-system, 'Apple SD Gothic Neo', '맑은 고딕', 'Nanum Gothic', sans-serif;
    background-color: white;
    color: black;
`

// 중단 영상 재생 컨테이너
export const ContentContainer = styled.div`
    width: 100%;
    height: 75vh;
    display: flex;
    justify-content: center;
    background-color: black;

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        height: 40vh;
    }
`
export const ContentVideoFrame = styled.iframe`
    width: auto;
    height: 100%;
    aspect-ratio: 16/9;
    border: 0;

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        width: 100%;
        height: auto;
    }
`

// 하단 영상 정보 컨테이너
export const InformationContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 1%;
    overflow-y: scroll;

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        flex-direction: column;
        align-items: center;
    }
`
export const InformationDescriptionWrapper = styled.div`
    width: 70%;
    height: auto;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        width: 90%;
    }
`
export const InformationDescriptionTitle = styled.div`
    font-weight: bold;
`
export const InformationDescriptionText = styled.div`
    color: gray;
`
export const InformationDescriptionTextString = styled.div`
    color: gray;
    margin-right: 50px;
    white-space: pre-wrap;
    word-break: break-word;  // 긴 텍스트의 경우 적절히 줄바꿈
    line-height: 1.5;        // 줄 간격 조정
    border-top: 1px solid lightgray;
    margin-top: 10px;
`
export const InformationDescriptionAlbum = styled.div`
    
    &:hover {
        cursor: pointer;
        color: mediumpurple;
    }
`
export const InformationRelatedWrapper = styled.div`
    width: 25%;
    height: auto;
    border: 1px solid lightgray;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 15px;

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        width: 90%;
    }
`
export const InformationRelatedCard = styled.div`
    width: 90%;
    height: 15%;
    display: flex;
    margin-block: 15px;
    
    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`
export const InformationRelatedCardThumbnail = styled.div`
    width: 40%;
    height: 90%;
`
export const InformationRelatedCardThumbnailImage = styled.img`
    width: 100%;
    height: auto;
`
export const InformationRelatedCardText = styled.div`
    width: 55%;
    height: 90%;
    display: flex;
    flex-direction: column;
`
export const InformationRelatedCardTextTitle = styled.div`
    font-weight: bold;
    margin-left: 10px;
`
export const InformationRelatedCardTextDescription = styled.div`
    margin-left: 10px;
`
export const InformationRelatedTitle = styled.div`
    font-weight: bold;
    font-size: 1.2rem;
    margin-top: 15px;
    margin-bottom: 15px;
    width: 90%;
`

// 최하단 정보 컨테이너
export const BottomContainer = styled.div`
    width: 100%;
    height: 15vh;
    background-color: black;
`