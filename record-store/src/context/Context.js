import { createContext, useState, useEffect, useRef } from 'react';
import { authenticateUser } from '../helpers/apiCalls';

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const appTitle = useRef(document.title).current;

  const [profileImages, setProfileImages] = useState([]);
  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    nickname: '',
    password: '',
    _id: '',
    avatar: '',
  });
  const [records, setRecords] = useState([]);
  const [currentOrder, setCurrentOrder] = useState([]);
  const [orders, setOrders] = useState([]);
  const [authIsDone, setAuthIsDone] = useState(false);

  useEffect(() => {
    const authenticator = async () => {
      try {
        const returnedUser = await authenticateUser();

        console.log('returned user by authenticator', returnedUser);

        if (!returnedUser) {
          setUser({
            firstName: '',
            lastName: '',
            email: '',
            nickname: '',
            password: '',
            _id: '',
            avatar: '',
          });
          setAuthIsDone(true);
          return;
        }
        setUser(returnedUser);
        setAuthIsDone(true);
      } catch (err) {
        console.log(err);
      }
    };
    authenticator();
  }, []);

  return (
    <AppContext.Provider
      value={{
        profileImages,
        setProfileImages,
        user,
        setUser,
        records,
        setRecords,
        currentOrder,
        setCurrentOrder,
        orders,
        setOrders,
        authIsDone,
        setAuthIsDone,
        appTitle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
