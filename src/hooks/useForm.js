import { useState } from "react"


export const useForm = (submitHandler, initialState) => {
    const [values,setValues] = useState(initialState)

    const onChange = (e) => {
        setValues((state)=>({
            ...state,
            [e.target.name]: e.target.value
        }))
    }

    const onSubmit = (e) => {
        e.preventDefault()
        submitHandler(values)
    }

    return {
        values,
        onChange,
        onSubmit
    }
}
