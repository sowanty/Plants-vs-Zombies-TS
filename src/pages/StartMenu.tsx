import { useEffect, useState } from 'react'
import ImagesSource from '../core/utility/ImagesSource'
import UserNameMenu from '../components/StartMenu/UserNameMenu'
import GetLocalStorage from '../core/utility/GetLocalStorage'
import { Link } from 'react-router-dom'
import SetLocalStorage from '../core/utility/SetLocalStorage'
import useSound from 'use-sound'

const StartMenu = () => {

    const [userName, setUsername] = useState(GetLocalStorage("username") ? GetLocalStorage("username") :"")

    useEffect(() => {
        if(!GetLocalStorage("level")) SetLocalStorage("level","1") 
    }, [])

    return (
 
        <div className='start-menu-bg w-full h-full center-row'>
            <button onClick={() => play()}>Click Me!!</button>
            {/* <Link to={(+GetLocalStorage("level")) < 4 ? "/select-plants" : ""}><img src={ ImagesSource("/startMenu/startAdventure.png") } alt="" className='absolute right-16 top-16 brightness' /></Link>
            <div className='w-60 h-6 absolute left-14 top-[84px] px-2 text-white truncate'>{ userName !== "" ? userName : "UserName"}</div>

            <UserNameMenu setUsername={setUsername} /> */}

        </div>
    )
    
}

export default StartMenu