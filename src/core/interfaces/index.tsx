
export interface ISelectedPlants {
    id: number;
    price: number;
    img: string;
    isBrightness: boolean;
}
export interface IChildren {
    children : React.ReactNode
}

export interface IContext { 
    selectedPlants : ISelectedPlants[],
    setSelectedPlants : React.Dispatch<React.SetStateAction<ISelectedPlants[]>> ,
}

export interface IBlock {
    id: number ,
    isFill: boolean ,
    img: string ,
    top: number , 
    left: number
}

export interface ICard { 
    id?: number ,
    price?: number   ,
    img?: string   ,
    isBrightness?: boolean ,
    label?: string ,
    description?: string ,
    className?: string ,
    isSmall?: boolean ,
    handleClickCard: () => void
}






