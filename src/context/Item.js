import React, { useReducer, useEffect } from "react";
import { ActionTypes } from "../help/ActionTypes";
import AsyncStorage from '@react-native-async-storage/async-storage';
const STORAGE_KEY = 'private key';
const Item = React.createContext();
let data = [];
const reducer = (state, action) => {
    switch (action.type) {
        case ActionTypes.create:
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 999999),
                    title: action.payload.title,
                    page: action.payload.page,
                    date: new Date()
                }
            ]
        case ActionTypes.update:
            return state.map((e) => {
                if (e.id == action.payload.id) {
                    return action.payload;
                } else {
                    return e;
                }
            });
        case ActionTypes.delete:
            return state.filter((e) => e.id !== action.payload.id)
        case ActionTypes.save:
            try {
                AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
            } catch (err) {

            } finally {
                return state;
            }
        case ActionTypes.load:
            return [
                ...state,
                {
                    id: action.payload.id,
                    title: action.payload.title,
                    page: action.payload.page,
                    date: new Date(action.payload.date),
                }
            ];
        default:
            return state;
    }
}
export const ItemProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, data)
    useEffect(() => {
        const loadStorage = async () => {
            const storage = await AsyncStorage.getItem(STORAGE_KEY);
            if (storage != null && state.length === 0) {
                data = JSON.parse(storage);
                data.forEach((item) => {
                    dispatch({ type: ActionTypes.load, payload: item })
                });
            }
        }
        loadStorage();
    }, [STORAGE_KEY]);
    const addItem = (title, page, callback) => {
        dispatch({ type: ActionTypes.create, payload: { title, page } })
        dispatch({ type: ActionTypes.save })
        if (callback) {
            callback();
        }
    };
    const deleteItem = (id, callback) => {
        dispatch({ type: ActionTypes.delete, payload: { id: id } })
        dispatch({ type: ActionTypes.save })
        if (callback) callback();
    }
    const updateItem = (id, title, page, date, callback) => {
        dispatch({ type: ActionTypes.update, payload: { id, title, page, date } });
        dispatch({ type: ActionTypes.save })
        if (callback) callback();
    }
    return (
        <Item.Provider value={{
            state: state,
            create: addItem,
            remove: deleteItem,
            update: updateItem
        }}>
            {children}
        </Item.Provider>
    )
};
export default Item;