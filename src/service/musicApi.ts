import axiosInstance, {ApiResponse} from "./axiosInstance.ts";

export type Song = {
    id: number
    youtubeID: string
    title: string
    singer: string
    album: string
    description: string
    uploaded: string
}
export type PaginationResponse<T> = {
    size: number
    page: number
    total: number
    content: T[]
}
export type SearchMusicRequest = {
    title: string
    singer: string
    album: string
}
export type MusicListResponse = PaginationResponse<Song>

export const getAllMusic = async (
    size: number,
    page: number
): Promise<MusicListResponse> => {
    console.log('Full URL:', axiosInstance.getUri({
        url: '/api/v1/song/musicAll',
        params: { size, page }
    }));

    const response: ApiResponse<MusicListResponse> = await axiosInstance.get(
        '/api/v1/song/musicAll',
        {
            params: { size, page }
        }
    )

    return response.data
}

export const getMusicDetail = async (
    id: number
): Promise<Song> => {
    const response: ApiResponse<Song> = await axiosInstance.get(
        `/api/v1/song/music/${id}`,
    )
    return response.data
}

export const getMusicList = async (
    size: number,
    page: number,
    musicIds: number[]
): Promise<MusicListResponse> => {
    const response: ApiResponse<MusicListResponse> = await axiosInstance.get(
        `/api/v1/song/musicList`,
        {
            params: { size, page, musicIds: musicIds.join(',') }
        }
    )
    console.log( musicIds )
    return response.data;
}

export const getMusic = async (
    size: number,
    page: number,
    title: string,
    singer: string,
    album: string
): Promise<MusicListResponse> => {
    const response: ApiResponse<MusicListResponse> = await axiosInstance.get(
        `/api/v1/song/music/music`,
        {
            params: { size, page, title, singer, album }
        }
    )
    return response.data
}

export const getAlbumMusic = async (
    size: number,
    page: number,
    album: string
): Promise<MusicListResponse> => {
    const response: ApiResponse<MusicListResponse> = await axiosInstance.get(
        '/api/v1/song/albumMusic',
        {
            params: { size, page, album }
        }
    )
    return response.data;
}

export const getRelatedMusicList = async (
    size: number,
    page: number,
    object: string,
    value: string
): Promise<MusicListResponse> => {
    const response: ApiResponse<MusicListResponse> = await axiosInstance.get(
        `/api/v1/song/recommendMusics`,
        {
            params: { size, page, object, value }
        }
    )
    return response.data;
}