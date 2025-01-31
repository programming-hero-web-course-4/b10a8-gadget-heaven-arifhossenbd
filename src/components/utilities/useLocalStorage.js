import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useLocalStorage = (dbName) => {
    const [storedList, setStoredList] = useState([]);
    useEffect(() => {
        if (dbName) {
            const storedData = JSON.parse(localStorage.getItem(dbName)) || [];
            return setStoredList(storedData);
        }
    }, [dbName])

    const addToStoredItem = (id) => {
        if (!storedList?.includes(id)) {
            const updateList = [...storedList, id];
            return localStorage.setItem(dbName, JSON.stringify(updateList));
        }
    };

    const addToStored = (id) => {
        const updateList = [...storedList, id];
        return localStorage.setItem(dbName, JSON.stringify(updateList));
    };

    const deleteToStoredItem = (id) => {
        if (storedList?.includes(id)) {
            const updateList = storedList?.filter(item => item !== id);
            setStoredList(updateList);
            return localStorage.setItem(dbName, JSON.stringify(updateList));
        }
    }

    const clearStoredList = () => {
        localStorage.removeItem(dbName);
        return setStoredList([]);
    }
    return { storedList, addToStoredItem, deleteToStoredItem, clearStoredList, addToStored };
};
export default useLocalStorage;