import {
    BottomContainer,
    ContentContainer,
    ContentVideoFrame,
    InformationContainer,
    InformationDescriptionAlbum,
    InformationDescriptionText, InformationDescriptionTextString,
    InformationDescriptionTitle,
    InformationDescriptionWrapper,
    InformationRelatedCard,
    InformationRelatedCardText, InformationRelatedCardTextDescription, InformationRelatedCardTextTitle,
    InformationRelatedCardThumbnail, InformationRelatedCardThumbnailImage, InformationRelatedTitle,
    InformationRelatedWrapper,
    MainContainer
} from '../style/PlayPage_Style'
import {useParams, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import {getMusicDetail, getSingWith} from "../service/musicApi.ts";
import { NameCodeToKoreanName } from "../function/ConvertFunction.ts";
import { Song } from "../service/musicApi.ts"
import { MusicRecommendInList } from "../function/MusicRecommendFunction.ts";

export const PlayPage = () => {

    const { id } = useParams();
    const navigate = useNavigate();

    const [ youtubeID, setYoutubeID ] = useState<string>("");
    const [ title, setTitle ] = useState<string>("");
    const [ singer, setSinger ] = useState<string>("");
    const [ album, setAlbum] = useState<string>("");
    const [ description, setDescription ] = useState<string>("");

    const [ recommends, setRecommends ] = useState<Song[]>([]);

    useEffect(() => {
        if (!id || isNaN(Number(id))) {
            console.error("유효하지 않은 ID입니다.");
            return;
        }

        const abortController = new AbortController();
        let isSubscribed = true;

        const fetchMusic = async () => {
            try {
                // 재생할 음악에 대한 정보 세팅
                const response = await getMusicDetail(Number(id));

                if (!isSubscribed) return;

                // 가수가 2명 이상일 경우
                if( response.album === "Cover" ) {
                    setSinger(NameCodeToKoreanName( response.singer ));
                }
                else {
                    const singWith = await getSingWith( response.youtubeID );
                    const singers:string[] = singWith.split(",");

                    let artists = "";
                    for( let i = 1; i < singers.length; i++ ) {
                        artists += NameCodeToKoreanName( singers[i] ) + ", "
                    }
                    setSinger(artists);
                }

                setYoutubeID(response.youtubeID);
                setTitle(response.title);

                setAlbum(response.album);
                setDescription(response.description);

                const result = await MusicRecommendInList("singer", response.singer);

                if (!isSubscribed) return;
                setRecommends(result);
            } catch (error: unknown) {
                if (!isSubscribed) return;

                if (error instanceof Error) {
                    if (error.name === 'AbortError') {
                        return;
                    }
                    console.error("노래 데이터를 불러오는 중 오류가 발생했습니다:", error.message);
                } else {
                    console.error("알 수 없는 오류가 발생했습니다.");
                }
            }
        };

        fetchMusic();

        return () => {
            isSubscribed = false;
            abortController.abort();
        };
    }, [id]);
    return (
        <MainContainer>
            <ContentContainer>
                <ContentVideoFrame
                    src={`https://www.youtube.com/embed/${youtubeID}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen>
                </ContentVideoFrame>
            </ContentContainer>
            <InformationContainer>
                <InformationDescriptionWrapper>
                    <InformationDescriptionAlbum> { album } </InformationDescriptionAlbum>
                    <InformationDescriptionTitle> { title } </InformationDescriptionTitle>
                    <InformationDescriptionText> { singer } </InformationDescriptionText>
                    <InformationDescriptionTextString>
                        { description }
                    </InformationDescriptionTextString>
                </InformationDescriptionWrapper>
                <InformationRelatedWrapper>
                    <InformationRelatedTitle> 추천 음악 </InformationRelatedTitle>
                    {
                        recommends
                            .filter(music => music.album === "Cover")
                            .map( (music) => (
                            <InformationRelatedCard onClick={ () => navigate( "/play/" + music.id ) }>
                                <InformationRelatedCardThumbnail>
                                    <InformationRelatedCardThumbnailImage src={"https://img.youtube.com/vi/" + music.youtubeID + "/mqdefault.jpg"} />
                                </InformationRelatedCardThumbnail>
                                <InformationRelatedCardText>
                                    <InformationRelatedCardTextTitle> { music.title } </InformationRelatedCardTextTitle>
                                    <InformationRelatedCardTextDescription> { NameCodeToKoreanName( music.singer ) } </InformationRelatedCardTextDescription>
                                </InformationRelatedCardText>
                            </InformationRelatedCard>
                        ))
                    }
                </InformationRelatedWrapper>
            </InformationContainer>
            <BottomContainer>

            </BottomContainer>
        </MainContainer>
    )
}

export default PlayPage;