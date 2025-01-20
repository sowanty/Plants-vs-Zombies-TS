import { createContext, useState } from "react"
import { IChildren, IContext, ISelectedPlants } from "../core/interfaces"



export const context = createContext({} as IContext)

const AppContext = ({ children }: IChildren) => {

    const [selectedPlants, setSelectedPlants] = useState<ISelectedPlants[]>([])


    return (
        
        <context.Provider value={{ selectedPlants , setSelectedPlants }}>
            { children }
        </context.Provider>
    )
    
}

export default AppContext