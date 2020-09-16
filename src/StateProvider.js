import React, { createContext, useContext, useReducer } from 'react'

// PREPARING DATA LAYER(CREATING CONTEXT)
export const StateContext = createContext()

// hIGHER ORDER COMPONENT- children explain the <App /> component in index.js
export const StateProvider = ({ reducer, initialState, children }) => (
	<StateContext.Provider value={useReducer(reducer, initialState)}>
		{children}
	</StateContext.Provider>
)

// ALLOWS TO PULL INFORMATION FROM DATA LAYER
export const useStateValue = () => useContext(StateContext)
