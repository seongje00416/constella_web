import {MainContainer, SitemapMenuItem} from "../style/component/Sitemap_Style.ts";
import {useNavigate} from "react-router-dom";

export const Sitemap = () => {

    const navigate = useNavigate();

    return (
        <MainContainer>
            <SitemapMenuItem onClick={ () => navigate("/music") }> 음악 </SitemapMenuItem>
            <SitemapMenuItem onClick={ () => navigate("/member") }> 멤버 </SitemapMenuItem>
            <SitemapMenuItem onClick={ () => navigate("/album") }> 앨범 </SitemapMenuItem>
            { /* <SitemapMenuItem onClick={ () => navigate("/announce") }> 소식 </SitemapMenuItem> */ }
        </MainContainer>
    )
}

export default Sitemap;