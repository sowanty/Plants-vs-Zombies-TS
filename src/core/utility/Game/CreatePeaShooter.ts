import { THTMLDivElement } from "../../types";
import block from "../../services/Block";
import ImagesSource from "../ImagesSource";
import DamageZombie from "./DamageZombie";
import HandlePeaImage from "./HandlePeaImage";

const CreatePeaShooter = (parentBlocks: THTMLDivElement , parentZombies: THTMLDivElement) => {

    const children = parentBlocks.current?.children as HTMLCollection
    const zombieChildren = parentZombies.current?.children as HTMLCollection

    for (let i = 0; i < children.length; i++) {
        
        const target = children[i].children[0]

        if(target && target.getAttribute("src")?.indexOf("peashooter") !== -1) {

            children[i].setAttribute("data-stop","true")

            for (let index = 0; index < zombieChildren.length; index++) {

                const zombie = zombieChildren[index]
                const zombieTop = parseInt(zombie.getAttribute("data-top") as string)
                const zombieLeft = parseInt(zombie.children[0].getAttribute("data-left") as string)
                if(children[i].getAttribute("data-stop") == "true") {
                    if(block[i].top == zombieTop && block[i].left < zombieLeft) {
                        children[i].setAttribute("data-stop","false")
                        if(parseInt(children[i].getAttribute("data-timer") as string) == 0) {
                            
                            const img = document.createElement("img")
                            img.src = ImagesSource(`/plants/${ HandlePeaImage(target) }.png`)
                            img.className = `w-6 h-6 absolute sun opacity-1 transition-all duration-500`
                            img.style.top =  `${block[i].top-0.5}%`
                            img.style.left = `${block[i].left}%`
                            children[i].appendChild(img)
                            children[i].setAttribute("data-timer","12")
                            
                            setInterval(() => {
                                const zombieLeft = parseInt(zombie.children[0].getAttribute("data-left") as string)
                                if(!img.getAttribute("data-remove") && parseInt(img.style.left)-7 >= zombieLeft) {
                                    img.setAttribute("data-remove","true")
                                    img.remove()                    
                                    DamageZombie(zombie,parentBlocks,img)
                                }     
                                else img.style.left = `${ parseInt(img.style.left) + 1 }%` 
                                                            
                            }, 100);                            
                        }
            
                        children[i].setAttribute("data-timer",`${parseInt(children[i].getAttribute("data-timer") as string) - 1}`)
    
                    }
                }
                
            }
            

        }
        
    }

} 

export default CreatePeaShooter
