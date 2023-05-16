import { useState } from 'react';

export const useForm = (initialState) => {
    const [formData, setFormData] = useState(initialState)

    const onChange = (event) => {
        setFormData(prev => (
            {
                ...prev,
                [event.target.name]: event.target.value
            }
        ))
    }
    const resetForm = () => {
        setFormData(initialState)
    }
    const isValidEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    return {
        //Properties
        formData,

        //Method
        isValidEmail,
        onChange,
        resetForm
    }
}
export default useForm