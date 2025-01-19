import { ISelectedPlants } from "../../interfaces";
import { THTMLDivElement, TSetStateNumber, TSetStateString } from "../../types";
import NotEnoughSun from "./NotEnoughSun";

const clickCards = (sun: number , element: ISelectedPlants , selectedPlantImage: TSetStateString , setCurrentPlantPrice: TSetStateNumber , sunParent: THTMLDivElement , container: THTMLDivElement) => {

    
    if(sun >= element.price) {
        const parent = container.current as HTMLDivElement
        parent.style.cursor = `url(/src/assets/images/plants/${element.img}-cursor.png),auto`
        selectedPlantImage(element.img)
    }
    else NotEnoughSun(sunParent)
    setCurrentPlantPrice(element.price)
    
}

export default clickCards