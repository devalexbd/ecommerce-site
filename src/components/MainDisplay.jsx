import { useEffect, useState } from 'react'
import '../assets/styles/MainDisplay.css'

export default function MainDisplay({gameData}){
    const [currentSlide, setCurrentSlide] = useState(0)

    useEffect(() => {
        setTimeout(() => {
            if(currentSlide >= (gameData.length - 1)){
                setCurrentSlide(0)
            } else {
                setCurrentSlide(currentSlide + 1)
            }
    
            console.log(`${currentSlide} out of ${gameData.length}`)
        }, 9000)
    }, [currentSlide])

    function carouselForward(){
        if(currentSlide >= (gameData.length - 1)){
            setCurrentSlide(0)
        } else {
            setCurrentSlide(currentSlide + 1)
        }    
    }

    function carouselBackward(){
        if(currentSlide == 0){
            setCurrentSlide(gameData.length - 1)
            console.log(`Setting carousel position to: ${gameData.length - 1}`)
        } else {
            setCurrentSlide(currentSlide - 1)
        }
    }

    return(
        <>
            <div className="maindisplay-container">
                <div className="carousel">
                        <button className="carousel-button prev" onClick={carouselBackward}>&#8249;</button>
                        <button className="carousel-button next" onClick={carouselForward}>&#8250;</button>
                        {gameData.map((game, index) => {
                            return(
                                <>
                                    <div className={`slide ${currentSlide === index ? 'active' : ''}`}>
                                        <img key={index} src={game.game_banner} alt="Game Poster" />
                                    </div>
                                </>
                            )
                        })}
                </div>
            </div>
        </>
    )
}