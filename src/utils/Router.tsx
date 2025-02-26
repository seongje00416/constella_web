import {BrowserRouter, Route, Routes} from "react-router-dom";
import MenuBar from "../constella/component/MenuBar.tsx"

import MainPage from "../constella/page/MainPage.tsx";
import MemberMainPage from "../constella/page/MemberMainPage.tsx";
import MusicMainPage from "../constella/page/MusicMainPage.tsx";
import AlbumMainPage from "../constella/page/AlbumMainPage.tsx";
import LiveMainPage from "../constella/page/LiveMainPage.tsx";
import AnnouncementMainPage from "../constella/page/AnnouncementMainPage.tsx";

import Sitemap from "../constella/component/Sitemap.tsx";
import PlayPage from "../constella/page/PlayPage.tsx";

const Router = () => {
    return (
        <BrowserRouter>
            <MenuBar />
            <Routes>
                <Route path="/constella" element={<MainPage />} />
                <Route path="/constella/member" element={ <MemberMainPage /> } />
                <Route path="/constella/music" element={ <MusicMainPage /> } />
                <Route path="/constella/album" element={ <AlbumMainPage /> } />
                <Route path="/constella/live" element={ <LiveMainPage /> } />
                <Route path="/constella/announce" element={ <AnnouncementMainPage /> } />
                <Route path="/constella/play/:id" element={ <PlayPage /> } />
                <Route path="/constella/sitemap" element={ <Sitemap /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;