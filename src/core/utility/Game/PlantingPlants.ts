import { THTMLDivElement, TSetStateBoolean, TSetStateNumber, TSetStateString } from "../../types"
import block from "../../services/Block"
import SetHpForPlants from "./SetHpForPlants"
import SetTimerForPlants from "./SetTimerForPlants"
import { IBlock } from "../../interfaces"

const PlantingPlants = (index: number , selectedPlantImage: string ,setSelectedPlantImaget: TSetStateString,setBlockArray: React.Dispatch<React.SetStateAction<IBlock[]>>,setSun: TSetStateNumber,currentPlantPrice: number,setIsExistPlant: TSetStateBoolean,parentBlocks: THTMLDivElement ,container: THTMLDivElement) => {

    const children = parentBlocks.current?.children as HTMLCollection
    const parent = container.current as HTMLDivElement
    parent.style.cursor = 'default'

    if(selectedPlantImage !== "" && block[index].isFill == false) {
        
        block[index].isFill = true
        block[index].img = selectedPlantImage
        setSelectedPlantImaget("")
        setSun(state => state - currentPlantPrice)
        setIsExistPlant(true)
        SetTimerForPlants(selectedPlantImage,children,index)
        SetHpForPlants(selectedPlantImage,children,index)

    }
    
}

export default PlantingPlants