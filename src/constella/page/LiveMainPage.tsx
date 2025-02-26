import {
    MainContainer,
    ContentContainer,
    BottomContainer,
    LiveCard,
    LiveCardThumbnail, LiveCardImage, LiveCardTextWrapper, LiveCardTextTitle, LiveCardTextName
} from '../style/LiveMainPage_Style.ts'


export const LiveMainPage = () => {



    return (
        <MainContainer>
            <ContentContainer>
                <LiveCard>
                    <LiveCardThumbnail>
                        <LiveCardImage />
                    </LiveCardThumbnail>
                    <LiveCardTextWrapper>
                        <LiveCardTextTitle> </LiveCardTextTitle>
                        <LiveCardTextName> </LiveCardTextName>
                    </LiveCardTextWrapper>
                </LiveCard>
            </ContentContainer>
            <BottomContainer>

            </BottomContainer>
        </MainContainer>
    )
}

export default LiveMainPage;