import {
    LogoItem,
    MenuBarContainer, MenuButton, MenuButtonIcon, MenuItem,
} from '../style/MainPage_Style.ts'
import { useNavigate } from 'react-router-dom';

export const MenuBar = () => {
    const navigate = useNavigate();

    return (
        <MenuBarContainer>
            <LogoItem onClick={ () => navigate("/constella") }> CONSTELLA </LogoItem>
            <MenuItem onClick={ () => navigate("/constella/music") }> 음악 </MenuItem>
            <MenuItem onClick={ () => navigate("/constella/member") }> 멤버 </MenuItem>
            <MenuItem onClick={ () => navigate("/constella/album") }> 앨범 </MenuItem>
            { /* <MenuItem onClick={ () => navigate("/live") }> 방송 </MenuItem> */ }
            { /* <MenuItem onClick={ () => navigate("/announce") }> 소식 </MenuItem> */ }
            <MenuButton onClick={ () => navigate("/constella/sitemap") }>
                <MenuButtonIcon src="https://constella-bucket.s3.ap-northeast-2.amazonaws.com/icon/mobile_menu.png" />
            </MenuButton>
        </MenuBarContainer>
    )
}

export default MenuBar;