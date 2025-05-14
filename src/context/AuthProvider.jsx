import { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../utils/rapidapi";

export const AuthContext = createContext(null);

export default function AuthProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState("New");
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchAllData = async (query) => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetchData(`search/?q=${query}`);
        setData(response.contents || []);
      } catch (err) {
        setError(err.message);
        setData([]);
      } finally {
        setLoading(false);
      }
    };

    fetchAllData(value);
  }, [value]);

  const contextValue = {
    loading,
    data,
    value,
    setValue,
    error
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook with error handling
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};