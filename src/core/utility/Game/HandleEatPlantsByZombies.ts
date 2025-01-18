import { THTMLDivElement } from "../../types"
import Block from "../../services/Block"
import zombies from "../../services/Zombies"
import HandleRemovePlants from "./HandleRemovePlants"

const HandleEatPlantsByZombies = (parentBlocks: THTMLDivElement , img: HTMLImageElement , div: HTMLDivElement , setRemovePlants: React.Dispatch<React.SetStateAction<boolean>> ) => {

    const children = parentBlocks.current?.children as HTMLCollection

    for (let i = 0; i < children.length; i++) {

        if(Block[i].top ==  parseInt(div.getAttribute("data-top") as string) && children[i].getAttribute("data-fill") == "true" && div.getAttribute("data-dead") == "false") {

            if(Block[i].left-5 == parseInt(img.style.left))  {

                const hp = parseInt(children[i].getAttribute("data-hp") as string)
                const imgSrc = img.getAttribute("src") as string
                const slash = imgSrc.lastIndexOf("/")
                const sliced = imgSrc.slice(slash+1)
                const found = zombies.find((element) => (element.walkingImage == sliced || element.eatingImage == sliced))

                if(hp == 0) {
                    div.setAttribute("data-stop","false")
                    img.src = `/src/assets/images/zombies/${found?.walkingImage}`
                    HandleRemovePlants(children,i,setRemovePlants)
                }
                else {
                    div.setAttribute("data-stop","true")
                    img.src = `/src/assets/images/zombies/${found?.eatingImage}`
                    children[i].setAttribute("data-hp",`${hp - 1}`)
                }

            }
            
        }

    }

}

export default HandleEatPlantsByZombies