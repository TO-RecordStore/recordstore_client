import { createContext, useState, useEffect } from "react";
import { authenticateUser } from "../helpers/apiCalls";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [profileImages, setProfileImages] = useState([]);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    nickname: "",
    password: "",
    _id: "",
  });
  const [records, setRecords] = useState([]);
  const [currentOrder, setCurrentOrder] = useState([]);
  const [orders, setOrders] = useState([]);
  const [authIsDone, setAuthIsDone] = useState(false);

  useEffect(() => {
    const authenticator = async () => {
      try {
        const returnedUser = await authenticateUser();
        if (returnedUser.error) {
          setUser();
          setAuthIsDone(true);
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
				authIsDone
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
