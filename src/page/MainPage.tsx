import {
    BottomInformationContainer,
    CarouselContainer,
    ContentCard,
    ContentCardDescription,
    ContentCardThumbnail,
    ContentCardThumbnailImage,
    ContentCardTitle,
    ContentContainer,
    ContentListContainer,
    ContentTitle,
    ContentWrapper,
    LiveStatusCard, LiveStatusCardImage, LiveStatusCardTextName, LiveStatusCardTextStatus, LiveStatusCardTextWrapper,
    LiveStatusCardThumbnail,
    LiveStatusContainer, LiveStatusTitle, LiveStatusWrapper, LoadingContainer, LoadingContentContainer, LoadingIcon,
    MainContainer,
} from "../style/MainPage_Style.ts";

import Carousel from "../component/Carousel.tsx";

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getLiveStatus } from "../service/liveApi.ts";
import { Member } from "../type/Member.ts";
import { Song, getMusicList } from "../service/musicApi.ts";
import { NewMusicList, DebutMusicList, OriginalMusicList } from "../constants/MusicMainCategory.ts";
import { NameCodeToKoreanName } from "../function/ConvertFunction.ts";

// 데이터 타입 정의
interface GlobalData {
    liveState: (string | boolean)[][];
    newMusicList: Song[];
    originalMusicList: Song[];
    debutMusicList: Song[];
}

// 세션 스토리지 관련 유틸리티 함수들
const storage = {
    getData: (): { data: GlobalData | null; lastFetch: number } => {
        const stored = sessionStorage.getItem('mainPageData');
        if (stored) {
            return JSON.parse(stored);
        }
        return { data: null, lastFetch: 0 };
    },
    setData: (data: GlobalData, lastFetch: number) => {
        sessionStorage.setItem('mainPageData', JSON.stringify({ data, lastFetch }));
    }
};

const LiveStatusCards = ({ data }: { data: GlobalData }) => {
    return (
        <>
            {Object.entries(Member)
                .filter(([, member]) => !member.isGraduated)
                .map(([key, member]) => (
                    <LiveStatusCard key={key} onClick={() => window.open("https://chzzk.naver.com/live/" + member.liveKey, "_blank")}>
                        <LiveStatusCardThumbnail>
                            <LiveStatusCardImage src={'https://constella-bucket.s3.ap-northeast-2.amazonaws.com/member/' + member.fullName + '.webp'} />
                        </LiveStatusCardThumbnail>
                        <LiveStatusCardTextWrapper>
                            <LiveStatusCardTextName> {member.name} </LiveStatusCardTextName>
                            <LiveStatusCardTextStatus isLiveOn={!!data.liveState.find(item => item[0] === member.fullName)?.[1]}>
                                {data.liveState.find(item => item[0] === member.fullName)?.[1] ? "LIVE" : "오프라인"}
                            </LiveStatusCardTextStatus>
                        </LiveStatusCardTextWrapper>
                    </LiveStatusCard>
                ))}
        </>
    );
};

// 커스텀 훅: 캐시된 데이터 관리
const useGlobalData = () => {
    const [data, setData] = useState<GlobalData | null>(() => storage.getData().data);
    const [isLoading, setIsLoading] = useState(!storage.getData().data);

    const [isChzzkApiError, setIsChzzkApiError ] = useState(false);

    useEffect(() => {
        const fetchDataIfNeeded = async () => {
            const { data: storedData, lastFetch } = storage.getData();
            const now = Date.now();

            // 마지막 fetch로부터 5분(300000ms)이 지났거나, 데이터가 없는 경우에만 fetch
            if (!storedData || now - lastFetch >= 300000) {
                setIsLoading(true);

                let tempLiveState: [string, boolean][] = [
                    ["ayatsuno_yuni", false],
                    ["shirayuki_hina", false],
                    ["arahashi_tabi", false],
                    ["neneko_mashiro", false],
                    ["akane_lize", false],
                    ["aokumo_rin", false],
                    ["yuzuha_riko", false],
                    ["tenko_shibuki", false],
                    ["hanako_nana", false]
                ];

                try {
                    // 치지직 라이브 방송 여부 가져오기
                    const getLiveState = await getLiveStatus();
                    tempLiveState = [
                        ["ayatsuno_yuni", getLiveState.yuniLive],
                        ["shirayuki_hina", getLiveState.hinaLive],
                        ["arahashi_tabi", getLiveState.tabiLive],
                        ["neneko_mashiro", getLiveState.mashiroLive],
                        ["akane_lize", getLiveState.lizeLive],
                        ["aokumo_rin", getLiveState.rinLive],
                        ["yuzuha_riko", getLiveState.rikoLive],
                        ["tenko_shibuki", getLiveState.shibukiLive],
                        ["hanako_nana", getLiveState.nanaLive]
                    ];
                } catch( error ) {
                    console.error("라이브 데이터를 불러오는 중 오류가 발생했습니다: ", error)
                    setIsChzzkApiError( true );
                }

                try{
                    // 음악 리스트 가져오기
                    const [newMusics, originalMusics, debutMusics] = await Promise.all([
                        getMusicList(20, 0, NewMusicList),
                        getMusicList(20, 0, OriginalMusicList),
                        getMusicList(20, 0, DebutMusicList)
                    ]);

                    const newData: GlobalData = {
                        liveState: tempLiveState,
                        newMusicList: newMusics.content,
                        originalMusicList: originalMusics.content,
                        debutMusicList: debutMusics.content
                    };

                    storage.setData(newData, now);
                    setData(newData);
                } catch (error) {
                    console.error("데이터를 불러오는 중 오류가 발생했습니다:", error);
                    if (storedData) {
                        const fallbackData: GlobalData = {
                            liveState: tempLiveState,
                            newMusicList: storedData.newMusicList,
                            originalMusicList: storedData.originalMusicList,
                            debutMusicList: storedData.debutMusicList
                        };
                        setData(fallbackData);
                    }
                } finally {
                    setIsLoading(false);
                }
            } else {
                setData(storedData);
            }
        };
        fetchDataIfNeeded();
        if( isChzzkApiError ) LiveStatusErrorCard();
        // 5분마다 데이터 갱신
        const intervalId = setInterval(fetchDataIfNeeded, 300000);

        return () => clearInterval(intervalId);
    }, []);

    return { data, isLoading };
};

export const LiveStatusErrorCard = () => {
    const element = document.getElementById("LiveStatusCardWrapper");
    if( element != null ) {element.innerHTML = "<ErrorStatusCard> 치지직 API에 문제가 생겨 생방송 정보를 조회하지 못했습니다. </ErrorStatusCard>";}
}

export const MainPage = () => {
    const navigate = useNavigate();
    const { data, isLoading } = useGlobalData();

    if (isLoading || !data) {
        return (
            <LoadingContainer>
                <LoadingContentContainer>
                    <LoadingIcon src="https://constella-bucket.s3.ap-northeast-2.amazonaws.com/icon/loading_icon.gif" />
                </LoadingContentContainer>
                <BottomInformationContainer>

                </BottomInformationContainer>
            </LoadingContainer>
        );
    }

    return (
        <MainContainer>
            <CarouselContainer>
                <Carousel />
            </CarouselContainer>
            <LiveStatusContainer>
                <LiveStatusTitle> 치지직 생방송 </LiveStatusTitle>
                <LiveStatusWrapper id="LiveStatusCardWrapper">
                    <LiveStatusCards data={data} />
                </LiveStatusWrapper>
            </LiveStatusContainer>
            <ContentContainer>
                <ContentWrapper>
                    <ContentTitle> 최근 나온 신곡 </ContentTitle>
                    <ContentListContainer>
                        {data.newMusicList.map((music) => (
                            <ContentCard key={music.id} onClick={() => navigate("/play/" + music.id)}>
                                <ContentCardThumbnail>
                                    <ContentCardThumbnailImage src={"https://img.youtube.com/vi/" + music.youtubeID + "/mqdefault.jpg"} />
                                </ContentCardThumbnail>
                                <ContentCardTitle> {music.title} </ContentCardTitle>
                                <ContentCardDescription> { NameCodeToKoreanName( music.singer ) } </ContentCardDescription>
                            </ContentCard>
                        ))}
                    </ContentListContainer>
                </ContentWrapper>
                <ContentWrapper>
                    <ContentTitle> 멤버들의 오리지날 음악들 </ContentTitle>
                    <ContentListContainer>
                        {data.originalMusicList.map((music) => (
                            <ContentCard key={music.id} onClick={() => navigate("/play/" + music.id)}>
                                <ContentCardThumbnail>
                                    <ContentCardThumbnailImage src={"https://img.youtube.com/vi/" + music.youtubeID + "/mqdefault.jpg"} />
                                </ContentCardThumbnail>
                                <ContentCardTitle> {music.title} </ContentCardTitle>
                                <ContentCardDescription> {NameCodeToKoreanName( music.singer )} </ContentCardDescription>
                            </ContentCard>
                        ))}
                    </ContentListContainer>
                </ContentWrapper>
                <ContentWrapper>
                    <ContentTitle> 그녀들의 데뷔곡! </ContentTitle>
                    <ContentListContainer>
                        {data.debutMusicList.map((music) => (
                            <ContentCard key={music.id} onClick={() => navigate("/play/" + music.id)}>
                                <ContentCardThumbnail>
                                    <ContentCardThumbnailImage src={"https://img.youtube.com/vi/" + music.youtubeID + "/mqdefault.jpg"} />
                                </ContentCardThumbnail>
                                <ContentCardTitle> {music.title} </ContentCardTitle>
                                <ContentCardDescription> {NameCodeToKoreanName( music.singer )} </ContentCardDescription>
                            </ContentCard>
                        ))}
                    </ContentListContainer>
                </ContentWrapper>
            </ContentContainer>
            <BottomInformationContainer>
            </BottomInformationContainer>
        </MainContainer>
    );
};

export default MainPage;