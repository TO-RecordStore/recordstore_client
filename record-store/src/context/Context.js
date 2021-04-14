import {createContext, useState} from 'react'

export const AppContext = createContext()

const AppContextProvider = ({children}) => {
    const [profileImages, setProfileImages] = useState([])
    const [user, setUser] = useState({
		firstName: '',
		lastName: '',
		email: '',
		nickname: '',
		password: '',
		_id: ''
	})
	const [records, setRecords] = useState([])
	// Order = { records: [{record: {}, quantity: 0}], userId: ""}
	const [currentOrder, setCurrentOrder] = useState([]) // => to DB as: order.records, order.userId
	const [orders, setOrders] = useState([])

	return (
        <AppContext.Provider
			value={{
				profileImages, setProfileImages,
				user, setUser,
        records, setRecords,
				currentOrder, setCurrentOrder,
				orders, setOrders
			}}>
				{children}
        </AppContext.Provider>

    )
}

export default AppContextProvider
