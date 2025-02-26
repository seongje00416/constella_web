import { getRelatedMusicList } from "../service/musicApi.ts";

export const MusicRecommendInList = async ( object: string, value: string ) => {
    try {
        const response = await getRelatedMusicList(20, 0, object, value);
        return response.content;
    }
    catch (error) {
        console.error("노래 데이터를 불러오는 중 오류가 발생했습니다:", error);
        throw error;
    }
}