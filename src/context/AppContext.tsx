import { createContext, useState } from "react"
import { IChildren, IContext, ISelectedPlants, IZombiesInGame } from "../core/interfaces"



export const context = createContext({} as IContext)

const AppContext = ({ children }: IChildren) => {

    const [selectedPlants, setSelectedPlants] = useState<ISelectedPlants[]>([])
    const [zombieInGame, setZombieInGame] = useState<IZombiesInGame[]>([])


    return (
        
        <context.Provider value={{ selectedPlants , setSelectedPlants , zombieInGame, setZombieInGame}}>
            { children }
        </context.Provider>
    )
    
}

export default AppContext