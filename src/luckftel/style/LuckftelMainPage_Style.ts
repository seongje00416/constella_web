import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
`

export const CarouselContainer = styled.div`
    width: 100%;
    height: auto;
    padding-bottom: 40%;
    position: relative;
    background-color: gray;

    & > * {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`

export const VideoContainer = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    padding-left: 50px;
    padding-top: 15px;
`
export const VideoCategoryTitle = styled.div`
    
`
export const VideoCard = styled.div`
    display: flex;
    flex-direction: column;
`
export const VideoThumbnail = styled.div`
    
`
export const VideoTitle = styled.div`
    
`