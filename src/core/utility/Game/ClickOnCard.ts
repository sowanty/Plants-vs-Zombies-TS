import { ISelectedPlants } from "../../interfaces";
import { THTMLDivElement } from "../../types";
import NotEnoughSun from "./NotEnoughSun";

const clickCards = (sun: number , element: ISelectedPlants , selectedPlantImage: React.Dispatch<React.SetStateAction<string>>,setCurrentPlantPrice: React.Dispatch<React.SetStateAction<number>>,sunParent: THTMLDivElement , container: THTMLDivElement) => {

    const parent = container.current as HTMLDivElement
    parent.style.cursor = `url(/src/assets/images/plants/${element.img}-cursor.png),auto`

    if(sun >= element.price) selectedPlantImage(element.img)
    else NotEnoughSun(sunParent)
    setCurrentPlantPrice(element.price)
    
}

export default clickCards