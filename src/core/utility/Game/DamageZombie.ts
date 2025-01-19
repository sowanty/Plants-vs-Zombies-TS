import { THTMLDivElement } from "../../types";
import CreateWinCard from "./CreateWinCard";

const DamageZombie = (zombie: Element , parentBlocks: THTMLDivElement , img: Element) => {

    const children = parentBlocks.current?.nextElementSibling?.children as HTMLCollection
    const hp = parseInt(zombie.getAttribute('data-hp') as string)
    const dot = img.getAttribute("src")?.lastIndexOf(".")
    const slash = img.getAttribute("src")?.lastIndexOf("/") as number
    const image = img.getAttribute("src")?.slice(slash+1 , dot)
    const zombieClassName = zombie.children[0].classList
    
    if(image == "SnowPea") {
        zombieClassName.add("drop-shadow-[0_0_3px_blue]")
        setTimeout(() => zombieClassName.remove("drop-shadow-[0_0_3px_blue]"), 700);               
    }
    else {
        zombieClassName.add("drop-shadow-[0_0_3px_red]")
        setTimeout(() => zombieClassName.remove("drop-shadow-[0_0_3px_red]"), 700);               
    }

    if(hp == 1) {
        setTimeout(() => {
            zombie.setAttribute("data-dead","true")
            zombie.remove()
            if(children.length == 0) {
                CreateWinCard(parentBlocks)
            }
        }, 1000);
    }
    else zombie.setAttribute("data-hp",`${hp - 1}`)
      

}

export default DamageZombie