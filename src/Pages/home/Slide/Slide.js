import './Slide.css'
// import { dataSlider } from '../../../data/data_slider'
import SlideItem from './SlideItem'
import { data_categories } from '../../../data/data_categories'

export const Slide = () => {

    // let current = 1;

    // const slideshow = () => {
    //     if(current > Slider.length){
    //         current = 1
    //     } else if (current === 0) {
    //         current = Slider.length
    //     }

    // dataSlider.forEach(slide => {
    //     if(slide[1].split('-')[1]*1 === current)
    // });

    // current++;
    // };
    
    // slideshow()

    // setInterval(() => {
    //     slideshow()
    // },1000);


    return <>
 <SlideItem {...data_categories[0]}/>
    {/* {
        dataSlider.map((item) => {
           return <SlideItem key={item.id} {...item}/>
        })
    } */}

  </>
}
