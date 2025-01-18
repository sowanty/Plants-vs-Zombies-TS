
const GetLocalStorage = (key: string) => {

    return JSON.parse(localStorage.getItem(key) as string)

}

export default GetLocalStorage