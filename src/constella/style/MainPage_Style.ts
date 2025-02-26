import styled from "styled-components";
import { MobileBreakPoints } from "../constants/MobileConstants.ts";

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100vw;
    overflow-y: auto;
    font-family: '나눔 고딕', -apple-system, 'Apple SD Gothic Neo', '맑은 고딕', 'Nanum Gothic', sans-serif;
    background-color: white;
    color: black;
    
    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        
    }
`

// 상단 메뉴바
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

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        justify-content: center;
    }
`
export const LogoItem = styled.div`
    margin-inline: 50px;
    font-size: 1.3rem;
    font-weight: bold;
    color: mediumpurple;

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        margin-inline: 0;
    }
    
    &:hover {
        cursor: pointer;
    }
`
export const MenuItem = styled.div`
    margin-inline: 10px;

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        display: none;
    }
    
    &:hover {
        cursor: pointer;
        font-weight: bold;
        color: mediumpurple;
    }
`
export const MenuButton = styled.div`
    display: none;

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        display: flex;
        position: absolute;
        height: 100%;
        right: 20px;
        top: 10px;
    }
    
    &:hover {
        cursor: pointer;
    }
`
export const MenuButtonIcon = styled.img`
    display: none;

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        display: flex;
        height: 30px;
    }
`
// 중상단 라이브 여부 확인 컨테이너
export const LiveStatusContainer = styled.div`
    height: auto;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: whitesmoke;
    overflow: visible;
`
export const LiveStatusTitle = styled.div`
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    font-weight: bold;
    display: flex;
    width: 80%;
    margin: 20px;

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        margin: 10px;
        font-size: 1.2rem;
    }

    @media screen and ( max-width: ${ MobileBreakPoints.phone }) {
        margin: 5px;
        font-size: 1rem;
    }
`
export const LiveStatusWrapper = styled.div`
    width: 80%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
    justify-content: center;
    padding: 15px;

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        grid-template-columns: repeat(2, 1fr);
        padding: 0;
        padding-bottom: 10px;
    }

    @media screen and ( max-width: ${ MobileBreakPoints.phone }) {
        grid-template-columns: repeat(1, 1fr);
    }
`
export const LiveStatusCard = styled.div`
    border: 1px solid lightgray;
    background-color: white;
    border-radius: 10px;
    display: flex;
    justify-content: left;

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        justify-content: center;
    }
    
    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`
export const LiveStatusCardThumbnail = styled.div`
    width: 20%;
    margin-left: 15px;
    margin-block: 5px;
    border: 1px solid lightgray;

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        display: none;
    }
`
export const LiveStatusCardImage = styled.img`
    width: 100%;
`
export const LiveStatusCardTextWrapper = styled.div`
    margin-left: 15px;
    margin-block: 5px;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        margin-inline: 0;
        margin-block: 2px;
    }

    @media screen and ( max-width: ${ MobileBreakPoints.phone }) {
        margin: 0;
    }
    
`
export const LiveStatusCardTextName = styled.div`
    font-weight: bold;
    font-size: 1.2rem;

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        font-size: 0.9rem;
    }
`
interface LiveStatusProps {
    isLiveOn: boolean
}
export const LiveStatusCardTextStatus = styled.div<LiveStatusProps>`
    color: ${ props => props.isLiveOn ? "red" : "gray" };
    font-weight: ${ props => props.isLiveOn ? "bold" : "normal" };

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        font-size: 0.8rem;
    }
`

// 중단 캐러셀 컨테이너
export const CarouselContainer = styled.div`
    height: 55vh;
    background-color: lightgray;
    
    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        height: 30vh;
    }
`

// 하단 컨텐츠 컨테이너
export const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
export const ContentWrapper = styled.div`
    height: auto;
    max-height: 100%;
    width: 80%;
    padding-left: 50px;
    overflow-x: auto;
    overflow-y: hidden;
    display: flex;
    flex-direction: column;
    justify-content: center;

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        height: auto;
        padding-left: 0;
    }
    
    &::-webkit-scrollbar {
        height: 8px;
    }
    &::-webkit-scrollbar-track {
        background: white;
        border-radius: 4px;
    }
    &::-webkit-scrollbar-thumb {
        background: lightgray;
        border-radius: 4px;
    }
    &::-webkit-scrollbar-thumb:hover {
        background: gray;
    }
`
export const ContentTitle = styled.div`
    font-size: 1.4rem;
    font-weight: bold;
    margin-block: 15px;

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        font-size: 1.1rem;
        margin-block: 10px;
    }
`
export const ContentListContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        gap: 10px;
    }
`
export const ContentCard = styled.div`
    display: flex;
    flex-direction: column;
    border: 1px solid whitesmoke;
    border-radius: 5px;
    height: 90%;
    margin-bottom: 15px;

    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`
export const ContentCardThumbnail = styled.div`
    height: 70%;
`
export const ContentCardThumbnailImage = styled.img`
    width: auto;
    height: 100%;
    object-fit: cover;
`
export const ContentCardTitle = styled.div`
    font-weight: bold;
    font-size: 1.1rem;
    margin-left: 5px;
    
    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        font-size: 0.9rem;
    }
    
`
export const ContentCardDescription = styled.div`
    margin-left: 5px;

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        font-size: 0.8rem;
    }
`

// 최하단 정보 컨테이너
export const BottomInformationContainer = styled.div`
    width: 100vw;
    height: 15vh;
    background-color: black;
    margin-top: 2vh;
`

// 로딩 화면
export const LoadingContainer = styled.div`
    height: 93vh;
`
export const LoadingContentContainer = styled.div`
    height: 76vh;
    display: flex;
    justify-content: center;
    align-items: center; 
`
export const LoadingIcon = styled.img`
    width: 10%;
`

// 에러 메세지
export const ErrorStatusCard = styled.div`
    display: flex;
    width: 100vw;
    height: 10vh;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-block: 3vh;
    font-weight: bold;
    color: gray;

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        font-size: 0.7rem;
    }
`