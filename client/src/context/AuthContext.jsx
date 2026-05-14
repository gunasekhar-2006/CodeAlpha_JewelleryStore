import {
  createContext,
  useState
} from "react";

export const AuthContext =
  createContext();

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(() => {

    const storedUser =
      localStorage.getItem("user");

    return storedUser
      ? JSON.parse(storedUser)
      : null;
  });

  const logout = () => {

    localStorage.removeItem("user");

    setUser(null);
  };

  return (

    <AuthContext.Provider
      value={{
        user,
        setUser,
        logout,
      }}
    >

      {children}

    </AuthContext.Provider>
  );
};

export default AuthProvider;