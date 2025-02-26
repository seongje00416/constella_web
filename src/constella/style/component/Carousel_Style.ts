import styled from "styled-components";
import { MobileBreakPoints } from "../../constants/MobileConstants.ts";

export const CarouselContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100vw;  
  background-color: lightgray;
  overflow: hidden;
`;

interface SlideProps {
    currentSlide: number;
}
export const SlideContainer = styled.div<SlideProps>`
  display: flex;
  height: 100%;
  transition: transform 0.5s ease-in-out;
  transform: translateX(-${props => props.currentSlide * 100}%);
`;

export const Slide = styled.div`
    width: 100vw;
    height: 100%;
    flex-shrink: 0;
    display: flex;
    justify-content: center;
    
    &:hover {
        cursor: pointer;
    }
`;

export const SlideImage = styled.img`
  width: auto;
  max-width: 100%;  
  height: 100%;
  object-fit: cover;
`;

interface ButtonProps {
    position: string
}
export const NavButton = styled.button<ButtonProps>`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(255, 255, 255, 0.5);
  padding: 15px;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.75);
  }
  ${props => props.position === 'left' ? 'left: 16px;' : 'right: 16px;'}
`;

export const IndicatorContainer = styled.div`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 8px;
`;

interface IndicatorProps {
    active: boolean;
}
export const IndicatorDot = styled.button<IndicatorProps>`
    border: none;
    background-color: ${props => props.active ? 'white' : 'rgba(255, 255, 255, 0.5)'};
    cursor: pointer;
    transition: background-color 0.3s;
    color: black;

    @media screen and ( max-width: ${ MobileBreakPoints.mobile }) {
        padding: 5px;
    }
`;