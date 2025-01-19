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

            for (let index = 0; index < zombieChildren.length; index++) {
                
                if(block[i].top == parseInt(zombieChildren[index].getAttribute("data-top") as string) ) {
                    
                    if(parseInt(zombieChildren[index].children[0].getAttribute("data-left") as string) > block[i].left-5) {

                        if(parseInt(children[i].getAttribute("data-timer") as string) == 0) {
                            
                            const img = document.createElement("img")
                            img.src = ImagesSource(`/plants/${ HandlePeaImage(target) }.png`)
                            img.className = `w-6 h-6 absolute sun opacity-1 transition-all duration-500`
                            img.style.top =  `${block[i].top-0.5}%`
                            img.style.left = `${block[i].left}%`
                            children[i].appendChild(img)
                            children[i].setAttribute("data-timer","12")
                            
                            setInterval(() => {
                                const zombieLeft = zombieChildren[0] ? parseInt(zombieChildren[0].children[0].getAttribute("data-left") as string) : 100
                                if(!img.getAttribute("data-remove") && parseInt(img.style.left)-7 >= zombieLeft) {
                                    img.setAttribute("data-remove","true")
                                    img.remove()                    
                                    zombieChildren[0] && DamageZombie(zombieChildren[0],parentBlocks,img)
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
