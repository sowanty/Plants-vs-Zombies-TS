import { THTMLDivElement } from "../../types";
import CreateWinCard from "./CreateWinCard";

const DamageZombie = (zombie: Element , parentBlocks: THTMLDivElement , img: Element) => {

    const hp = parseInt(zombie.getAttribute('data-hp') as string)

    const dot = img.getAttribute("src")?.lastIndexOf(".")
    const slash = img.getAttribute("src")?.lastIndexOf("/") as number
    const image = img.getAttribute("src")?.slice(slash+1 , dot)


   if(image == "SnowPea") {
        zombie.children[0].classList.add("drop-shadow-[0_0_3px_blue]")
        setTimeout(() => zombie.children[0].classList.remove("drop-shadow-[0_0_3px_blue]"), 700);               
   }
   else {
       zombie.children[0].classList.add("drop-shadow-[0_0_3px_red]")
       setTimeout(() => zombie.children[0].classList.remove("drop-shadow-[0_0_3px_red]"), 700);               
   }
    
   const children = parentBlocks.current?.nextElementSibling?.children as HTMLCollection

    if(hp == 1) {
        setTimeout(() => {
            zombie.setAttribute("data-dead","true")
            zombie.remove()
            if(children.length == 0) {
                CreateWinCard(parentBlocks)
            }
        }, 1000);
    }
    else {
        zombie.setAttribute("data-hp",`${hp - 1}`)
    }    

}

export default DamageZombie