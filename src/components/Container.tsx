import { Outlet } from 'react-router-dom'

const Container = () => {

    return (
        <div className='w-[800px] h-[600px] rounded-md border border-[#555] overflow-hidden relative'>
            <Outlet />
        </div>
    )

}

export default Container