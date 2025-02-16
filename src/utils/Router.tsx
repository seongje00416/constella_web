import {BrowserRouter, Route, Routes} from "react-router-dom";
import MenuBar from "../component/MenuBar.tsx"

import MainPage from "../page/MainPage.tsx";
import MemberMainPage from "../page/MemberMainPage.tsx";
import MusicMainPage from "../page/MusicMainPage.tsx";
import AlbumMainPage from "../page/AlbumMainPage.tsx";
import LiveMainPage from "../page/LiveMainPage.tsx";
import AnnouncementMainPage from "../page/AnnouncementMainPage.tsx";

import Sitemap from "../component/Sitemap.tsx";
import PlayPage from "../page/PlayPage.tsx";

const Router = () => {
    return (
        <BrowserRouter>
            <MenuBar />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/member" element={ <MemberMainPage /> } />
                <Route path="/music" element={ <MusicMainPage /> } />
                <Route path="/album" element={ <AlbumMainPage /> } />
                <Route path="/live" element={ <LiveMainPage /> } />
                <Route path="/announce" element={ <AnnouncementMainPage /> } />
                <Route path="/play/:id" element={ <PlayPage /> } />
                <Route path="/sitemap" element={ <Sitemap /> } />
            </Routes>
        </BrowserRouter>
    )
}

export default Router;