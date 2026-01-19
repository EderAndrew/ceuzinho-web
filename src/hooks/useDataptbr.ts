export const useDataPTBR = (data: string) => {
    const splitString = data.split(" ")
    const day = splitString[2]
    const month = splitString[1]
    const dayName = splitString[0]
    const year = splitString[3]

    return `${day} de ${month} de ${year}`
    
}