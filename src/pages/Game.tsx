import { useContext, useEffect, useRef, useState } from "react"
import { context } from "../context/AppContext"
import ImagesSource from "../core/utility/ImagesSource"
import block from "../core/services/Block"
import Card from "../components/SelectPlants/Card"
import CreateSun from "../core/utility/Game/CreateSun"
import clickCards from "../core/utility/Game/ClickOnCard"
import PlantingPlants from "../core/utility/Game/PlantingPlants"
import ValidateCards from "../core/utility/Game/ValidateCards"
import CraeteSunSunFlower from "../core/utility/Game/CraeteSunSunFlower"
import CreatePeaShooter from "../core/utility/Game/CreatePeaShooter"
import CreateZombies from "../core/utility/Game/CreateZombies"
import GetLocalStorage from "../core/utility/GetLocalStorage"

const Game = () => {
    
    const [sun, setSun] = useState(50)
    const [blockArray, setBlockArray] = useState(block)
    const [selectedPlantImage, setSelectedPlantImaget] = useState("")
    const [currentPlantPrice, setCurrentPlantPrice] = useState(0)
    const [isExistPlant, setIsExistPlant] = useState(false)
    const [removePlants, setRemovePlants] = useState(false)
    const { selectedPlants } = useContext(context)
    const container = useRef<HTMLDivElement>(null)
    const seedBank = useRef<HTMLDivElement>(null)
    const sunParent = useRef<HTMLDivElement>(null)
    const parentBlocks = useRef<HTMLDivElement>(null)
    const parentZombies = useRef<HTMLDivElement>(null)
    let count = 0
    
    useEffect(() => {

        if(selectedPlants.length == 0) location.pathname = "/select-plants"
        const interval1 = setInterval(() => CreateSun(container,setSun) , 12000);

        return () => clearInterval(interval1)
        
    }, [])

    useEffect(() => {

        const interval1 = setInterval(() => {
            if(count == (+GetLocalStorage("level"))) clearInterval(interval1)
            else {
                count = count + 1
                CreateZombies(parentZombies,parentBlocks,setRemovePlants)
            }
        } , 20000);

        return () => clearInterval(interval1)

    }, [count])
    
    useEffect(() => { 
        if(isExistPlant) {
            const interval1 = setInterval(() => { CraeteSunSunFlower(setSun,parentBlocks)      }, 1000);
            const interval2 = setInterval(() => { CreatePeaShooter(parentBlocks,parentZombies) }, 1000);
            return () => {
                clearInterval(interval1)
                clearInterval(interval2)
            }
        } 
    } , [isExistPlant])  
    
    useEffect(() => {
        ValidateCards(selectedPlants,seedBank,sun)
    } , [sun])

    return (
            
        <div ref={container} className="w-[1181px] h-full game-bg relative transition">

            <img src={ ImagesSource("/levels/mainMenu.png") } alt="" className="absolute -top-[1px] right-[31.5%] z-10 brightness scale-90" onClick={() => location.pathname = "/select-plants"} />
            <img src={ ImagesSource("/levels/SeedBank.png") } alt="" className="relative z-20 " />
            <div ref={sunParent} className="absolute left-3 top-[60px] w-14 center-row z-20">{ sun }</div>
            <div ref={seedBank} id="seedBanky" className="absolute left-20 top-2 w-[360px] h-[70px] center-row z-20 !justify-start">
                {
                    selectedPlants.map((element,index) => {
                        
                        return <Card key={index} {...element } isSmall={true} className="scale-y-75 brightness" handleClickCard={ () => clickCards(sun , element , setSelectedPlantImaget , setCurrentPlantPrice , sunParent , container) } />
                        
                    })
                }
            </div>
            <div ref={parentBlocks} id="parentBlocks" className="w-[740px] h-[500px] absolute top-20 left-7 flex flex-wrap content-start z-10">
                {
                    blockArray?.map((element , index) => {
                        
                        return (
                            <div key={index} className="w-[82px] h-[98px] center-row" data-fill={element.isFill} onClick={() => PlantingPlants(index,selectedPlantImage,setSelectedPlantImaget,setBlockArray,setSun,currentPlantPrice,setIsExistPlant,parentBlocks,container) }>
                                { 
                                    
                                    element.isFill == true &&
                                    <img src={ ImagesSource(`/plants/${element.img}.png`) } alt="" className="w-16" />
                                }
                            </div>
                        )
                        
                    })

                }
            </div>
            <div ref={parentZombies} className="w-[740px] h-[500px] absolute top-20 left-7 flex flex-wrap content-start"></div>
            
        </div>
        
    )

}

export default Game