export const requiredField = value => {
    if (value) return undefined

    return  'Field is required'
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length > maxLength) return `Max length is ${maxLength} symbols`

    return  undefined
}

// export const minLength10 = value => {
//     if (value && value.length < 10) return "Min length is 10 symbols"
//
//     return  undefined
// }

