import {ISelectedPlants} from "../../interfaces"
import plants from "../../services/Plants"

const selectPlant = (index: number , setSelectedPlants: React.Dispatch<React.SetStateAction<ISelectedPlants[]>>) => {

    plants[index].isBrightness = false
    
    setSelectedPlants(state => {
        return [...state,plants[index]]
    })
    
}

export default selectPlant