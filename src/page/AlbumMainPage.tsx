import {
    MainContainer,
    ContentContainer,
    BottomContainer,
    AlbumCard,
    AlbumCardCover,
    AlbumCardImage,
    AlbumCardTitle,
    AlbumCardGroup,
    AlbumCardSinger,
    ModalOverlay,
    ModalCloseButton,
    ModalContent,
    ModalImageContainer,
    ModalImage,
    ModalInfo,
    ModalMusicListContainer,
    ModalMusicListCard,
    ModalContentAlbumInfoWrapper,
    ModalMusicListCardThumbnail,
    ModalMusicListCardImage,
    ModalMusicListCardTextWrapper,
    ModalMusicListCardTextTitle,
    ModalMusicListCardTextDescription
} from "../style/AlbumMainPage_Style.ts";
import { albumList } from "../constants/AlbumList.ts";
import { useState } from "react";
import {getAlbumMusic} from "../service/musicApi.ts";
import { NameCodeToKoreanName } from "../function/ConvertFunction.ts";
import { useNavigate } from "react-router-dom";

export const AlbumMainPage = () => {
    const [selectedAlbum, setSelectedAlbum] = useState<[string, string, string, string] | null>(null);
    const [ modalMusicList, setModalMusicList] = useState<[number, string, string[], string][] | null>(null);

    const navigate = useNavigate();

    const handleAlbumClick = (album: [string, string, string, string]) => {
        loadIncludedMusicList( album[3] );
        setSelectedAlbum(album);
    };

    const closeModal = () => {
        setSelectedAlbum(null);
    };

    // 모달 외부 클릭 시 닫기
    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    const loadIncludedMusicList = ( album: string ) => {
        const setMusic = async () => {
            try {
                const response = await getAlbumMusic( 20, 0, album );
                const modalMusics:[number, string, string[], string][] = [];
                for( let i = 0; i < response.content.length; i++ ) {
                    if( i === 0 ) modalMusics.push( [response.content[i].id, response.content[i].title, [ NameCodeToKoreanName( response.content[i].singer ) ], response.content[i].youtubeID ] );
                    else {
                        if( response.content[i-1].title === response.content[i].title ) {
                            modalMusics[modalMusics.length - 1][2].push( NameCodeToKoreanName( response.content[i].singer ) );
                        }
                        else modalMusics.push( [response.content[i].id, response.content[i].title, [NameCodeToKoreanName( response.content[i].singer )], response.content[i].youtubeID ] );
                    }
                }
                setModalMusicList( modalMusics );
            } catch (error) {
                console.error("노래 데이터를 불러오는 중 오류가 발생했습니다:", error);
            }
        };
        setMusic();
    }

    return (
        <MainContainer>
            <ContentContainer>
                {albumList.map(([id, title, singer, group]) => (
                    <AlbumCard key={id} onClick={ () => handleAlbumClick( [id, title, singer, group] ) }>
                        <AlbumCardCover>
                            <AlbumCardImage src={"https://constella-bucket.s3.ap-northeast-2.amazonaws.com/album/" + id + ".webp" } />
                        </AlbumCardCover>
                        <AlbumCardGroup>{group}</AlbumCardGroup>
                        <AlbumCardTitle>{title}</AlbumCardTitle>
                        <AlbumCardSinger>{singer}</AlbumCardSinger>
                    </AlbumCard>
                ))}
            </ContentContainer>
            {selectedAlbum && (
                <ModalOverlay onClick={handleOverlayClick}>
                    <ModalCloseButton onClick={closeModal}>×</ModalCloseButton>
                    <ModalContent>
                        <ModalContentAlbumInfoWrapper>
                            <ModalImageContainer>
                                <ModalImage src={`https://constella-bucket.s3.ap-northeast-2.amazonaws.com/album/${selectedAlbum[0]}.webp`} />
                            </ModalImageContainer>
                            <ModalInfo>
                                <AlbumCardGroup>{selectedAlbum[3]}</AlbumCardGroup>
                                <AlbumCardTitle>{selectedAlbum[1]}</AlbumCardTitle>
                                <AlbumCardSinger>{selectedAlbum[2]}</AlbumCardSinger>
                            </ModalInfo>
                        </ModalContentAlbumInfoWrapper>
                        <ModalMusicListContainer>
                            {
                                modalMusicList != null ?
                                    modalMusicList.map( (music) => (
                                    <ModalMusicListCard onClick={ () => navigate( "/play/" + music[0] )}>
                                        <ModalMusicListCardThumbnail>
                                            <ModalMusicListCardImage src={`https://img.youtube.com/vi/${music[3]}/mqdefault.jpg`} />
                                        </ModalMusicListCardThumbnail>
                                        <ModalMusicListCardTextWrapper>
                                            <ModalMusicListCardTextTitle> { music[1] } </ModalMusicListCardTextTitle>
                                            <ModalMusicListCardTextDescription>
                                            {
                                                music[2].map( (singer) => (
                                                     singer + ", "
                                                ))
                                            }
                                            </ModalMusicListCardTextDescription>
                                        </ModalMusicListCardTextWrapper>
                                    </ModalMusicListCard>
                                )) : ""
                            }
                        </ModalMusicListContainer>
                    </ModalContent>
                </ModalOverlay>
            )}
            <BottomContainer>

            </BottomContainer>
        </MainContainer>
    )
}

export default AlbumMainPage;