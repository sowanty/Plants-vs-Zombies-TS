import HandleValidateWinCard from '../core/utility/Game/HandleValidateWinCard'
import GetLocalStorage from '../core/utility/GetLocalStorage'
import SetLocalStorage from '../core/utility/SetLocalStorage'

const DetailsCard = () => {

    const plantObj = HandleValidateWinCard()
    const level = GetLocalStorage("level")

    const nextLevel = () => {
        SetLocalStorage("level",`${(+level)+1}`)
        location.pathname = "/select-plants"
    }

    return (
        <div className='w-full h-full'>
            <img src="/src/assets/images/levels/detailsCard.png" alt="" />
            <img src={`/src/assets/images/plants/${plantObj.img}.png`} alt="" className="w-[70px] h-[75px] absolute left-[46%] top-[25%]" />
            <span className="absolute left-[46%] top-[6%] text-white">{ plantObj.label }</span>
            <div className="w-[287px] h-[120px] absolute left-[32%] bottom-[22%] p-2">{ plantObj.description }</div>
            <img src="/src/assets/images/levels/nextLevel.png" alt="" className="absolute left-[41%] brightness bottom-12 cursor-pointer" onClick={nextLevel} />
        </div>
    )
}

export default DetailsCard