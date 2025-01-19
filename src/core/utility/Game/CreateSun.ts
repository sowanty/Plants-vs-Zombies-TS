import { THTMLDivElement, TSetStateNumber } from "../../types"
import ImagesSource from "../ImagesSource"

const CreateSun = (container: THTMLDivElement , setSun: TSetStateNumber ) => {
    
    let top = 0
    const randomLeftSun = Math.random()*55+5
    const randomTopSun = Math.random()*6500+2000    

    const img = document.createElement("img")
    img.src = `${ImagesSource("/levels/sun.png")}`
    img.style.left = `${randomLeftSun}%`
    img.style.top = `${top}%`
    img.className = `w-14 h-14 absolute sun transition cursor-pointer opacity-1 z-10`
    container.current?.appendChild(img)


    img.addEventListener("click",() => {

        img.classList.replace("opacity-1","opacity-0")
        setTimeout(() => img.remove(), 1000);
        setSun(state => state + 25)
        
    })
    
    const interval = setInterval(() => {
        top = top + 1
        img.style.top = `${top}px`
    }, 1);

    setTimeout(() => clearInterval(interval), randomTopSun);
    setTimeout(() => {
        img.classList.replace("opacity-1","opacity-0")
        setTimeout(() => img.remove(), 1000);
    }, randomTopSun+8000);
  
}

export default CreateSun