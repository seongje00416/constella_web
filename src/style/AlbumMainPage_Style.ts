import styled from "styled-components";
import { MobileBreakPoints } from "../constants/MobileConstants.ts";

export const MainContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: '나눔 고딕', -apple-system, 'Apple SD Gothic Neo', '맑은 고딕', 'Nanum Gothic', sans-serif;
`

export const ContentContainer = styled.div`
    display: grid;
    max-width: 80%;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    gap: 5%;
    padding: 15px;
    margin-bottom: 5%;

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        grid-template-columns: repeat(1, minmax(200px, 1fr));
        min-height: 350vh;
        gap: 10px;
    }
`
export const AlbumCard = styled.div`
    display: flex;
    width: 100%;
    max-height: 60vh;
    flex-direction: column;
    aspect-ratio: 1;
    
    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`
export const AlbumCardCover = styled.div`
    width: 100%;
    height: auto;
    aspect-ratio: 1;
    overflow: hidden;
`
export const AlbumCardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
export const AlbumCardGroup = styled.div`
    margin-top: 10px;
    color: mediumpurple;
`
export const AlbumCardTitle = styled.div`
    margin-top: 5px;
    font-weight: bold;
    font-size: 1.2rem;
`
export const AlbumCardSinger = styled.div`
    margin-top: 5px;
    color: gray;

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        margin-bottom: 10px;
    }
`
export const BottomContainer = styled.div`
    width: 100vw;
    height: 15vh;
    background-color: black;
    margin-top: 2%;
`

// Modal
export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`

export const ModalContent = styled.div`
    background-color: white;
    padding: 30px;
    border-radius: 15px;
    width: 80%;
    max-width: 800px;
    max-height: 90vh;
    overflow-y: auto;
    display: flex;
    gap: 30px;
    flex-direction: column;

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        max-height: 70vh;
    }
`
export const ModalContentAlbumInfoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        flex-direction: column;
    }
`

export const ModalImageContainer = styled.div`
    flex: 1;
    max-width: 400px;

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        max-width: 300px;
    }
`

export const ModalImage = styled.img`
    width: 100%;
    aspect-ratio: 1;
    object-fit: cover;
`

export const ModalInfo = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 20px;

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        border-bottom: 1px dotted lightgray;
    }
`

export const ModalCloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
    color: white;
`
export const ModalMusicListContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 20px;

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        align-items: center;
    }
`
export const ModalMusicListCard = styled.div`
    display: flex;
    width: 80%;

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`
export const ModalMusicListCardThumbnail = styled.div`
    width: 30%;
    height: auto;

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        width: 90%;
    }
`
export const ModalMusicListCardImage = styled.img`
    width: 100%;
    height: auto;
`
export const ModalMusicListCardTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px;
`
export const ModalMusicListCardTextTitle = styled.div`
    font-weight: bold;
    font-size: 1.2rem;

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        font-size: 1rem;
    }
`
export const ModalMusicListCardTextDescription = styled.div`
    color: gray;

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        font-size: 0.9rem;
    }
`