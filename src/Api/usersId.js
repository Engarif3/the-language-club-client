export const userId = async id =>{
    const response = await fetch(`${import.meta.env.VITE_API_URL}/user/${id}`)
    const data = await response.json()
    return data
}