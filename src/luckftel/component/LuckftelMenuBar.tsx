import {
    MenuBarContainer,
    LogoItem,
    MenuItem,
    MenuButtonIcon,
    MenuButton
} from '../style/component/LuckftelMenuBar'
import {useNavigate} from "react-router-dom";

export const LuckftelMenuBar = () => {
    const navigate = useNavigate();

    return (
        <MenuBarContainer>
            <LogoItem onClick={ () => navigate("/luckftel") }> LUCKFTEL </LogoItem>
            <MenuItem onClick={ () => navigate("/luckftel/content") }> 컨텐츠 </MenuItem>
            <MenuItem onClick={ () => navigate("/luckftel/streamer") }> 스트리머 </MenuItem>
            <MenuItem onClick={ () => navigate("/luckftel/season") }> 시즌 </MenuItem>
            <MenuButton onClick={ () => navigate("/luckftel/sitemap") }>
                <MenuButtonIcon src="https://constella-bucket.s3.ap-northeast-2.amazonaws.com/icon/mobile_menu.png" />
            </MenuButton>
        </MenuBarContainer>
    )
}

export default LuckftelMenuBar;