import { Link } from "react-router-dom"
import ImagesSource from "../core/utility/ImagesSource"
import { useContext, useState } from "react"
import plants from "../core/services/Plants"
import Card from "../components/SelectPlants/Card"
import returnCard from "../core/utility/SelectPlants/ReturnCard"
import selectPlant from "../core/utility/SelectPlants/SelectCard"
import { context } from "../context/AppContext"
import GetLocalStorage from "../core/utility/GetLocalStorage"


const SelectPlants = () => {

    const [sun, setSun] = useState(50)
    const [isHover, setIsHover] = useState("letsRock")

    const { selectedPlants , setSelectedPlants } = useContext(context)

    const array = plants.filter((element) => element.id <= (+GetLocalStorage("level"))-1)

    
    return (
        <div className="h-full game-bg center-row">

            <img src={ ImagesSource("/selectPlants/selectorPage.png") } alt="" />
            <Link to="/start-menu"><img src={ ImagesSource("/selectPlants/close.png") } alt="" className="absolute right-2 top-2 brightness" /></Link>
            <div className="absolute top-14 mt-1 left-[195px]">{ sun }</div>
            
            <div className="w-[450px] h-[500px] top-28 absolute py-4 px-3 flex flex-wrap gap-2 content-start">

                {
                    array.map((element,index) => {
                        
                        return <Card key={index} {...element } index={index} className={element.isBrightness ? "brightness" : "brightness-50"} isSmall={false} handleClickCard={() => (element.isBrightness && selectedPlants.length < 5) ? selectPlant(index,setSelectedPlants) : alert("این کارت انتخاب شده یا دیگر قادر به انتخاب کارت نیستید") } />
                        
                    })
                }

                <Link to={selectedPlants.length == 0 ? "" : "/game"}><img src={ ImagesSource(`/selectPlants/${isHover}.png`) } alt="" className={`absolute bottom-8 right-[33%] brightness active:${selectedPlants.length == 0 && "scale-125"}`} onMouseOver={() => setIsHover("letsRockLight")} onMouseOut={() => setIsHover("letsRock")} /></Link>

            </div>

            <div className="w-[365px] h-[80px] top-0 left-60 absolute flex pt-[2px] ">

                {
                    selectedPlants.map((element,index) => {
                        
                        return <Card key={index} {...element } index={index} handleClickCard={() => returnCard(element,setSelectedPlants)} isSmall={true} className="cursor-pointer" />
                        
                    })
                }

            </div>

            
        </div>
    )

}

export default SelectPlants