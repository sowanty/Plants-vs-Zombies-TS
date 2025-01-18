
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
    zombieInGame: IZombiesInGame[] ,
    setZombieInGame: React.Dispatch<React.SetStateAction<IZombiesInGame[]>>
}

export interface IBlock {
    id: number ,
    isFill: boolean ,
    img: string ,
    top: number , 
    left: number
}

// export interface IZombiesInGame {
//     id: number ,
//     img: string , 
//     left: number ,
//     top: number ,
//     hp : number
// }

export interface IZombiesInGame {
    top: number ,
    left: number
}


