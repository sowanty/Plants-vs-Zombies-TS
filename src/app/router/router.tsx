import { Navigate, createBrowserRouter } from 'react-router-dom'
import Container from '../../components/Container'
import StartMenu from '../../pages/StartMenu'
import Game from '../../pages/Game'
import SelectPlants from '../../pages/SelectPlants'
import DetailsCard from '../../pages/DetailsCard'

const router = createBrowserRouter([
    {
        element : <Container />,
        children : [
            {
                path : '/' ,
                element : <Navigate to={"/start-menu"} />
            },
            { 
                path : "/start-menu", 
                element : <StartMenu /> 
            },
            {
                path : "/select-plants" ,
                element : <SelectPlants /> ,
            },
            {
                path : "/game" ,
                element : <Game /> ,
            },
            {
                path : "/details-card" ,
                element : <DetailsCard /> ,
            }
        ]
    }
])

export default router