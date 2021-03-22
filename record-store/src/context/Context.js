import {createContext, useState} from 'react'

export const AppContext = createContext()

const AppContextProvider = ({children}) => {
    const [profileImages, setProfileImages] = useState([])
    const [user, setUser] = useState({
		firstName: '',
		lastName: '',
		email: '',
		nickname: '',
		password: ''
	})
	const [records, setRecords] = useState([])

	return (
        <AppContext.Provider
			value={{
				profileImages, setProfileImages,
				user, setUser,
                records, setRecords,
			}}>
				{children}
        </AppContext.Provider>

    )
}

export default AppContextProvider
