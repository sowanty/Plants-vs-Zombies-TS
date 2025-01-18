import { ISelectedPlants } from "../../interfaces"
import { THTMLDivElement } from "../../types"

const ValidateCards = ( selectedPlants: ISelectedPlants[],seedBank: THTMLDivElement,sun: number ) => {

    const children = seedBank.current?.children as HTMLCollection

    for (let i = 0; i < selectedPlants.length; i++) {
        if(selectedPlants[i].price > sun) children[i].classList.replace("brightness","brightness-50")
        else children[i].classList.replace("brightness-50","brightness")
    }
  
}

export default ValidateCards