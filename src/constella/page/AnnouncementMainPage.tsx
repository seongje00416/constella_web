import {
    AnnouncementTitle,
    BottomContainer,
    ContentContainer,
    MainContainer,
    MemberCard,
    MemberCardImage,
    MemberCardPost,
    MemberCardPostDate,
    MemberCardPostTitle,
    MemberCardPostWrapper,
    MemberCardPostWriter,
    MemberCardThumbnail
} from "../style/AnnoucementMainPage_Style.ts";
import { Member } from '../constants/MemberConstants.ts'

export const AnnouncementMainPage = () => {
    return (
        <MainContainer>
            <ContentContainer>
                <AnnouncementTitle> 스텔라이브 소식 몰아보기 </AnnouncementTitle>
                {Object.entries(Member)
                    .map(( [key, value]) => {
                    if( key == "AIRI_KANNA" ) return;
                    const imageFileName:string = key
                        .toLowerCase()
                        .replace(/\s+/g, '_')
                        .replace(/[()]/g, '');
                    return (
                        <MemberCard key={value}>
                            <MemberCardThumbnail>
                                <MemberCardImage src={`src/assets/member/${imageFileName}.webp`} />
                            </MemberCardThumbnail>
                            <MemberCardPostWrapper>
                                <MemberCardPost>
                                    <MemberCardPostTitle>2월 25일 방송</MemberCardPostTitle>
                                    <MemberCardPostWriter>{value}</MemberCardPostWriter>
                                    <MemberCardPostDate>2025.02.25</MemberCardPostDate>
                                </MemberCardPost>
                            </MemberCardPostWrapper>
                        </MemberCard>
                    );
                })}
            </ContentContainer>
            <BottomContainer>

            </BottomContainer>
        </MainContainer>
    )
}

export default AnnouncementMainPage;