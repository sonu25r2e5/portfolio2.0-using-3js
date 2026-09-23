import { useState } from 'react'

// we nned a custom hoks .



const useAlert = () => {
    // it is going to 
    const [alert, setAlert] = useState({ show: false, text: '', type: 'danger' })

    // we wan tt to pass wthat we need to modity nothign more than tha t
    const showAlert = ({ text, type = 'danger' }) => setAlert({
        show: true,
        text,
        type
    })
    const hideAlert = () => setAlert({
        show: false,
        text: '',
        type: 'danger'
    })

    return { alert, showAlert, hideAlert }


}

export default useAlert