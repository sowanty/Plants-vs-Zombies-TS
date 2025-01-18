import { RouterProvider } from "react-router-dom"
import router from './router/router'
import AppContext from "../context/AppContext"


const App = () => {

    return (
        <AppContext>
            <RouterProvider router={router}></RouterProvider>
        </AppContext>
    )

}

export default App