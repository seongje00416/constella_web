import {
    BottomInformationContainer,
    MainContainer,
    MusicCard,
    MusicCardSinger,
    MusicCardThumbnail,
    MusicCardTitle,
    MusicContainer,
    PageButton,
    PageSelector,
} from "../style/MusicMainPage_Style.ts"
import { useEffect, useState } from "react";
import { getAllMusic, Song } from "../service/musicApi.ts";
import { useNavigate } from "react-router-dom";
import { NameCodeToKoreanName } from "../function/ConvertFunction.ts";

export const MusicMainPage = () => {

    const [ musicList, setMusicList ] = useState<Song[]>([]);
    const [ page, setPage ] = useState(0);

    const maxPage = 8;

    const navigate = useNavigate();

    useEffect(() => {
        const fetchMusic = async () => {
            try {
                const response = await getAllMusic(20, page);

                if (response && response.content) {
                    setMusicList(response.content);
                } else {
                    console.error('응답 데이터 구조가 예상과 다릅니다:', response);
                }
            } catch (error) {
                console.error("노래 데이터를 불러오는 중 오류가 발생했습니다:", error);
            }
        };
        fetchMusic();
    }, [ page, getAllMusic ]);

    return (
        <MainContainer>
            <MusicContainer>
                {
                    musicList.map((music) => (
                    <MusicCard key={music.id} onClick={ () => navigate("/constella/play/" + music.id) } >
                        <MusicCardThumbnail
                            src={`https://img.youtube.com/vi/${music.youtubeID}/mqdefault.jpg`}
                        />
                        <MusicCardTitle>{music.title}</MusicCardTitle>
                        <MusicCardSinger>{ NameCodeToKoreanName(music.singer) }</MusicCardSinger>
                    </MusicCard>
                ))
                }
            </MusicContainer>
            <PageSelector>
                {(() => {
                    const buttons = [];
                    for (let i = 0; i <= maxPage; i++) {
                        buttons.push(
                            <PageButton key={i} onClick={ () => setPage(i)} isCurrent={ page == i }>
                                {i+1}
                            </PageButton>
                        );
                    }
                    return buttons;
                })()}
            </PageSelector>
            <BottomInformationContainer>

            </BottomInformationContainer>
        </MainContainer>
    )
}

export default MusicMainPage;