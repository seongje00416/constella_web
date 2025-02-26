import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    font-family: '나눔 고딕', -apple-system, 'Apple SD Gothic Neo', '맑은 고딕', 'Nanum Gothic', sans-serif;
`

export const ContentContainer = styled.div`
    width: 80%;
    min-height: 75vh;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
`
export const LiveCard = styled.div`
    display: flex;
`
export const LiveCardThumbnail = styled.div`
    width: 40%;
`
export const LiveCardImage = styled.img`
    width: 100%;
    height: auto;
`
export const LiveCardTextWrapper = styled.div`
    display: flex;
    flex-direction: column;
`
export const LiveCardTextTitle = styled.div`

`
export const LiveCardTextName = styled.div`

`

export const BottomContainer = styled.div`
    width: 100vw;
    height: 15vh;
    background-color: black;
    margin-top: 2%;
`