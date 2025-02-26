import axiosInstance, {ApiResponse} from "./axiosInstance.ts";

export type LiveState = {
    yuniLive: boolean;
    hinaLive: boolean;
    tabiLive: boolean;
    mashiroLive: boolean;
    lizeLive: boolean;
    rinLive: boolean;
    shibukiLive: boolean;
    nanaLive: boolean;
    rikoLive: boolean;
}

export const getLiveStatus = async (

): Promise<LiveState> => {
    const response: ApiResponse<LiveState> = await axiosInstance.get(
        '/api/v1/chzzkLive/isLiveOn',
        {}
    )
    return response.data
}