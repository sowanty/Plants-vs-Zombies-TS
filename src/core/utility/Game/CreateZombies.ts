import { THTMLDivElement } from "../../types"
import zombies from "../../services/Zombies"
import ImagesSource from "../ImagesSource"
import HandleEatPlantsByZombies from "./HandleEatPlantsByZombies"
import SetHpForZombies from "./SetHpForZombies"
import WalkZombies from "./WalkZombies"
import HandleZinedxZombies from "./HandleZinedxZombies"

const CreateZombies = (parentZombies: THTMLDivElement , parentBlocks: THTMLDivElement , setRemovePlants: React.Dispatch<React.SetStateAction<boolean>>) => {

    const zombiesTop = [4,23,43,63,82]
    const randomZombieImage = Math.floor(Math.random()*3)
    const randomzombieTop = Math.floor(Math.random()*5)

    const img = document.createElement("img")
    img.src = `${ImagesSource(`/zombies/${zombies[randomZombieImage].walkingImage}`)}`
    const zIndex = HandleZinedxZombies(zombiesTop[randomzombieTop])
    img.className = `absolute transition-all duration-500 opacity-1 z-[${zIndex}] ${ zombies[randomZombieImage].walkingImage == "zombie.gif" ? "-mt-16" : "-mt-20" }`
    img.style.left = `100%`
    img.style.top = `${zombiesTop[randomzombieTop]}%`

    const div = document.createElement("div")
    div.setAttribute("data-top",`${zombiesTop[randomzombieTop]}`)
    div.setAttribute("data-hp",`${SetHpForZombies(zombies[randomZombieImage].statickImage)}`)
    div.setAttribute("data-stop","false")
    div.setAttribute("data-dead","false")
    div.appendChild(img)
    parentZombies.current?.appendChild(div)

    setInterval(() => {

        HandleEatPlantsByZombies(parentBlocks,img,div,setRemovePlants)
        WalkZombies(img,div)

    }, 1000);
    
}

export default CreateZombies