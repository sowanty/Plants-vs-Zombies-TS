import block from "../../services/Block";
import { THTMLDivElement } from "../../types";
import ImagesSource from "../ImagesSource";

const CraeteSunSunFlower = (setSun: React.Dispatch<React.SetStateAction<number>>,parentBlocks: THTMLDivElement) => {

    const children = parentBlocks.current?.children as HTMLCollection
    
    let interval: number ;
    
    interval = setInterval(() => {

        if(location.pathname == "/game") {

            for (let i = 0; i < children.length; i++) {
                if(children[i].children[0] && children[i].children[0].getAttribute("src")?.indexOf("sunflower") !== -1) {
                    
                    if(parseInt(children[i].getAttribute("data-timer") as string) == 0) {

                        const random = Math.ceil(Math.random()*3000)

                        setTimeout(() => {

                            const img = document.createElement("img")
                            img.src = ImagesSource("/levels/sun.png")
                            img.className = `w-14 h-14 absolute sun transition cursor-pointer opacity-1 mt-6 -ml-6`
                            img.style.left = `${block[i].left}%`
                            img.style.top = `${block[i].top}%`
                            img.setAttribute("data-isClick","true")
                            children[i].appendChild(img)
                            
                    
                            img.addEventListener("click",() => {
                                
                                if(img.getAttribute("data-isClick") == "true") {
                                    img.setAttribute("data-isClick","false")
                                    img.classList.replace("opacity-1","opacity-0")
                                    setTimeout(() => img.remove(), 1000);
                                    setSun(state => state + 25)
                                    children[i].setAttribute("data-timer",`20`)
                                }
                    
                            })
                            setTimeout(() => {
                                if(img) {
                                    img.classList.replace("opacity-1","opacity-0")
                                    setTimeout(() => img.remove(), 1000);
                                    children[i].setAttribute("data-timer",`20`)
                                }
                            }, 4000);
                            
                        }, random);
                    }
                    
                    children[i].setAttribute("data-timer",`${parseInt(children[i].getAttribute("data-timer") as string) - 1}`)
                    
                }
            }
        } 
        else clearInterval(interval)
    

    }, 1000);

}
        


export default CraeteSunSunFlower

