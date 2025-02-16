import {
    LogoItem,
    MenuBarContainer, MenuButton, MenuButtonIcon, MenuItem,
} from '../style/MainPage_Style'
import { useNavigate } from 'react-router-dom';

export const MenuBar = () => {
    const navigate = useNavigate();

    return (
        <MenuBarContainer>
            <LogoItem onClick={ () => navigate("/") }> CONSTELLA </LogoItem>
            <MenuItem onClick={ () => navigate("/music") }> 음악 </MenuItem>
            <MenuItem onClick={ () => navigate("/member") }> 멤버 </MenuItem>
            <MenuItem onClick={ () => navigate("/album") }> 앨범 </MenuItem>
            { /* <MenuItem onClick={ () => navigate("/live") }> 방송 </MenuItem> */ }
            { /* <MenuItem onClick={ () => navigate("/announce") }> 소식 </MenuItem> */ }
            <MenuButton onClick={ () => navigate("/sitemap") }>
                <MenuButtonIcon src="src/assets/icon/mobile_menu.png" />
            </MenuButton>
        </MenuBarContainer>
    )
}

export default MenuBar;