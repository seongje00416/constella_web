import styled from "styled-components";

export const MainContainer = styled.div`
    font-family: '나눔 고딕', -apple-system, 'Apple SD Gothic Neo', '맑은 고딕', 'Nanum Gothic', sans-serif;
`
// 중단 컨텐츠 컨테이너
export const ContentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
export const MemberCard = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    height: 25vh;
    border: 1px solid lightgray;
    margin-top: 30px;
    border-radius: 10px;
`
export const MemberCardThumbnail = styled.div`
    width: 30%;
    margin: 15px;
    border: 1px solid lightgray;
`
export const MemberCardImage = styled.img`
    width: 100%;
    height: auto;
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
`
export const MemberCardPostWrapper = styled.div`
    display: flex;
    width: 65%;
    flex-direction: column;
    margin: 15px;
    overflow-y: auto;
    overflow-x: hidden;
    gap: 10px;
`
export const AnnouncementTitle = styled.div`
    font-size: 1.5rem;
    font-weight: bold;
    margin-top: 20px;
`
export const MemberCardPost = styled.div`
    display: flex;
    font-size: 1rem;
`
export const MemberCardPostTitle = styled.p`
    margin: 0;
    flex: 5;
`
export const MemberCardPostWriter = styled.p`
    margin: 0;
    flex: 1;
`
export const MemberCardPostDate = styled.p`
    margin: 0;
    flex: 1;
`


// 하단 정보 컨테이너
export const BottomContainer = styled.div`
    width: 100vw;
    height: 15vh;
    background-color: black;
    margin-top: 2%;
`