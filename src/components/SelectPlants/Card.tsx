import { useLocation } from "react-router-dom"
import ImagesSource from "../../core/utility/ImagesSource"
import { ICard } from "../../core/interfaces"
  

const Card = ({ img , price , isBrightness , className , isSmall , handleClickCard }: ICard) => {

    const location = useLocation()

    const url = location.pathname == "/select-plants" ? true : false
    const game = location.pathname == "/game" ? true : false

    return (
        <div className={`center-row relative ${className}`} data-brightness={isBrightness} onClick={handleClickCard}>
            <img src={ ImagesSource("/levels/SeedPacket_Larger.png") } alt="" className={isSmall ? "w-[78px] h-full" : "w-[78px] h-[100px]"} />
            <img src={ ImagesSource(`/plants/${img}.png`) } alt="" className={`absolute h-12 mb-4 ${(url && isSmall) ? "scale-[80%]" : ""}`} />
            <div className={`absolute bottom-0 text-xs m-1 ${game ? "mb-[6px]" : ""} ${url ? "mb-[6px]" : ""}`}>{price}</div>
        </div>
    )

}

export default Card