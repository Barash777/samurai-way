export const required = (value: string) => {
    if (value)
        return undefined
    return 'field is required'
}

export const maxLengthCreator = (maxLength: number) => (value: string) => {
    if (value && value.length > maxLength)
        return `Max length is ${maxLength} symbols`
    return undefined
}

export const maxLength30 = (value: string) => {
    if (value && value.length > 30)
        return 'Max length is 30 symbols'
    return undefined
}

export const isEmail = (value: string) => {

    if (value
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )) {
        return undefined
    }
    
    return 'enter valid email'
}