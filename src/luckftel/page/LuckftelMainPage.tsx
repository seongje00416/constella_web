import {
    CarouselContainer,
    MainContainer, VideoCard, VideoContainer, VideoThumbnail, VideoTitle
} from '../style/LuckftelMainPage_Style'

export const LuckftelMainPage = () => {
    return (
        <MainContainer>
            <CarouselContainer>

            </CarouselContainer>
            <VideoContainer>
                <VideoTitle> 럭튜브 인기 동영상 </VideoTitle>
                <VideoCard>
                    <VideoThumbnail>

                    </VideoThumbnail>
                    <VideoTitle> 나히다, 만나보았습니다. </VideoTitle>
                </VideoCard>
            </VideoContainer>
        </MainContainer>
    )
}

export default LuckftelMainPage;