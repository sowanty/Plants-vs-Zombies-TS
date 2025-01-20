import GetLocalStorage from "../../core/utility/GetLocalStorage"
import SetLocalStorage from "../../core/utility/SetLocalStorage"
import ImagesSource from "../../core/utility/ImagesSource"
import { useRef, useState } from "react"
import { TSetStateString } from "../../core/types"

const UserNameMenu = ({ setUsername }: { setUsername: TSetStateString}) => {

    const [isUserName, setIsUserName] = useState(GetLocalStorage("username") == null ? false : true)
    const input = useRef<HTMLInputElement>(null)

    const handelUserName = () => {
        
        const value = input.current?.value as string
        if(value.length > 5) {
            SetLocalStorage("username", value)
            setIsUserName(true)
            setUsername(value)
        }
        else alert("نام وارد شده کم است.")
        
    }
    
    return (
        
            !isUserName

            &&

            <div className="relative">

                <img src={ ImagesSource("/startMenu/new-user.png") } alt="" className="relative z-10" />

                <input ref={input} type="text" className="w-96 absolute left-12 px-1 top-[53%] z-10 border-none outline-none bg-transparent text-white" autoFocus />

                <div className="w-full absolute bottom-6 z-10 flex justify-center gap-x-5">
                    <img src={ ImagesSource("/startMenu/ok-button.png") } alt="" className="brightness" onClick={handelUserName} />
                    <img src={ ImagesSource("/startMenu/cancel_button.png") } alt="" className="brightness" />
                </div>

            </div>
        

    )

}

export default UserNameMenu