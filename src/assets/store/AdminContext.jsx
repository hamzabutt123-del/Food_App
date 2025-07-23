import { createContext, useState, useContext } from "react";

const AdminContext = createContext({
  isAdmin: false,
  login: () => {},
  logout: () => {},
});

export function AdminContextProvider({ children }) {
  const [isAdmin, setIsAdmin] = useState(false);

  const login = () => setIsAdmin(true);
  const logout = () => setIsAdmin(false);

  return (
    <AdminContext.Provider value={{ isAdmin, login, logout }}>
      {children}
    </AdminContext.Provider>
  );
}

export function useAdmin() {
  return useContext(AdminContext);
}

export default AdminContext;