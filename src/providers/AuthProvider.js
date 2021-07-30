import { useState, createContext, useEffect } from 'react';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(() => window.localStorage.getItem('token'));

  const value = {
    isAuth,
    activateAuth: (token) => {
      setIsAuth(true);
      window.localStorage.setItem('token', token);
    },
    removeAuth: () => {
      setIsAuth(false);
      window.localStorage.removeItem('token');
    }
  }

  useEffect(() => {
    isAuth ? setIsAuth(true) : setIsAuth(false)
  }, [isAuth])

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

function AuthConsumer({ children }) {
  return (
    <AuthContext.Consumer>
      { children }
    </AuthContext.Consumer>
  );
}

export {
  AuthContext,
  AuthProvider,
  AuthConsumer
};