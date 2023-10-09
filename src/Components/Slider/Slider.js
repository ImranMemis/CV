import "./slider.css";
import dataSlider from "./dataSlider";
import BtnSlider from "./BtnSlider";
import {useState} from "react";

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(1);

    const nextSlide = () =>{
        if(slideIndex !== dataSlider.length){
            setSlideIndex(slideIndex+1);
        }else if(slideIndex === dataSlider.length){
            setSlideIndex(1);
        }
    }

    const prevSlide = () =>{
        if(slideIndex !== 1){
            setSlideIndex(slideIndex -1);
        }else if(slideIndex === 1){
            setSlideIndex(dataSlider.length);
        }
    }

    return  (<div className="container-slider">
        {dataSlider.map((obj, index) =>  {
          return (
              <div className={slideIndex === index+1 ? "slide active-anim" : "slide"} key={obj.id}>
                  <img alt={"alt"} src={process.env.PUBLIC_URL + `/Images/img${index+1}.png`}/>
              </div>
          )
        })}
        <BtnSlider moveSlide={nextSlide} direction = {"next"}/>
        <BtnSlider moveSlide={prevSlide} direction = {"prev"}/>

    </div>)
}

export  default Slider;