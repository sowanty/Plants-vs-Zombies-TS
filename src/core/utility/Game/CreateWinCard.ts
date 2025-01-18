import { THTMLDivElement } from "../../types"
import ImagesSource from "../ImagesSource"
import HandleValidateWinCard from "./HandleValidateWinCard"

const CreateWinCard = (parentBlocks: THTMLDivElement) => {

    const cardObj = HandleValidateWinCard()
  
    const card = document.createElement("div")
    card.className = "center-row absolute left-[40%] top-[40%] transition-all duration-1000 opacity-0 cursor-pointer"
    setTimeout(() => { card.classList.replace("opacity-0","opacity-1") }, 700);

    card.addEventListener("click",() => {
        location.pathname = "/details-card"
    })

    const holderImage = document.createElement("img")
    holderImage.src = ImagesSource("/levels/SeedPacket_Larger.png")
    holderImage.className = "w-[78px] h-[100px]"

    const plantImage = document.createElement("img")
    plantImage.src = ImagesSource(`/plants/${cardObj.img}.png`)
    plantImage.className = "absolute h-12 mb-4"

    const price = document.createElement("div")
    price.innerText = `${cardObj.price}`
    price.className = "absolute bottom-0 text-xs m-1"

    parentBlocks.current?.appendChild(card)
    card.appendChild(holderImage)
    card.appendChild(plantImage)
    card.appendChild(price)


}

export default CreateWinCard