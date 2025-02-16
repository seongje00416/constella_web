import { useState, useEffect } from 'react';
import {
    CarouselContainer,
    IndicatorContainer, IndicatorDot,
    NavButton,
    Slide,
    SlideContainer,
    SlideImage
} from "../style/component/Carousel_Style";
import { NoticeList } from "../constants/CarouselNoticeList.ts";

const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const slides = NoticeList;

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
        }, 5000);

        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <CarouselContainer>
            <SlideContainer currentSlide={currentSlide}>
                {slides.map((slide) => (
                    <Slide key={slide.id} onClick={ () => window.open( slide.link ) }>
                        <SlideImage src={slide.url} alt={slide.alt} />
                    </Slide>
                ))}
            </SlideContainer>

            <NavButton position="left" onClick={prevSlide}>

            </NavButton>
            <NavButton position="right" onClick={nextSlide}>

            </NavButton>

            <IndicatorContainer>
                {slides.map((_, index) => (
                    <IndicatorDot
                        key={index}
                        active={currentSlide === index}
                        onClick={() => setCurrentSlide(index)}
                    />
                ))}
            </IndicatorContainer>
        </CarouselContainer>
    );
};

export default Carousel;