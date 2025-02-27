import {BrowserRouter, Route, Routes, useLocation} from "react-router-dom";
import MenuBar from "../constella/component/MenuBar.tsx"

import MainPage from "../constella/page/MainPage.tsx";
import MemberMainPage from "../constella/page/MemberMainPage.tsx";
import MusicMainPage from "../constella/page/MusicMainPage.tsx";
import AlbumMainPage from "../constella/page/AlbumMainPage.tsx";
import LiveMainPage from "../constella/page/LiveMainPage.tsx";
import AnnouncementMainPage from "../constella/page/AnnouncementMainPage.tsx";

import Sitemap from "../constella/component/Sitemap.tsx";
import PlayPage from "../constella/page/PlayPage.tsx";
import LuckftelMainPage from "../luckftel/page/LuckftelMainPage.tsx";
import LuckftelMenuBar from "../luckftel/component/LuckftelMenuBar.tsx";

const MenuBarWrapper = () => {
    // useLocation()을 통해 현재 주소를 확인하는 기능 추가
    const location = useLocation();
    const isConstella = location.pathname.startsWith('/constella');
    const isLuckftel = location.pathname.startsWith('/luckftel');

    return isConstella ? <MenuBar /> : isLuckftel ? <LuckftelMenuBar /> : null;
};

const Router = () => {
    return (
        <BrowserRouter>
            <MenuBarWrapper />
            <Routes>
                { /* Constella Router */ }
                <Route path="/constella" element={<MainPage />} />
                <Route path="/constella/member" element={ <MemberMainPage /> } />
                <Route path="/constella/music" element={ <MusicMainPage /> } />
                <Route path="/constella/album" element={ <AlbumMainPage /> } />
                <Route path="/constella/live" element={ <LiveMainPage /> } />
                <Route path="/constella/announce" element={ <AnnouncementMainPage /> } />
                <Route path="/constella/play/:id" element={ <PlayPage /> } />
                <Route path="/constella/sitemap" element={ <Sitemap /> } />
                { /* Luckftel Router */ }
                <Route path="/luckftel" element={<LuckftelMainPage /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;