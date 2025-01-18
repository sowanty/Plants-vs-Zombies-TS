import {ISelectedPlants} from "../../interfaces"
import plants from "../../services/Plants"

const returnCard = (el: ISelectedPlants , setSelectedPlants: React.Dispatch<React.SetStateAction<ISelectedPlants[]>>) => {

    plants[el.id].isBrightness = true
    
    setSelectedPlants(state => {
        return state.filter((element) => element.id !== el.id)
    })

    
    
}

export default returnCard