import React from "react";
import { createContext, useReducer, useContext } from "react";

type Dispatch = (action: Action) => void;
type Action = { type: string; payload: Payload };
type Payload = {
  place: string;
  guests: number;
  address: string;
};

type State = {
  place: string;
  guests: number;
  address: string;
};

type StayProviderProps = { children: React.ReactNode };

const StayStateContext = createContext<State | undefined>(undefined);
const StayDispatchContext = createContext<Dispatch | undefined>(undefined);

const stayReducer = (
  state: State,
  { type, payload: { place, guests, address } }: Action
) => {
  console.log("stay reducer", state);
  switch (type) {
    case "reset":
      return { ...state, place: "Entire place", guests: 0, address: "" };
    case "get_started":
      return { ...state, place, guests, address };
    default:
      return state;
  }
};

const StayProvider = ({ children }: StayProviderProps) => {
  const [state, dispatch] = useReducer(stayReducer, {
    place: "Entire place",
    guests: 0,
    address: "",
  });

  console.log("from provider: ", state);

  return (
    <StayStateContext.Provider value={state}>
      <StayDispatchContext.Provider value={dispatch}>
        {children}
      </StayDispatchContext.Provider>
    </StayStateContext.Provider>
  );
};

const useStayState = () => {
  const context = useContext(StayStateContext);
  if (!context) {
    throw new Error("useStayState must be used within a StayProvider");
  }
  return context;
};

const useStayDispatch = () => {
  const context = useContext(StayDispatchContext);
  if (!context) {
    throw new Error("useStayDispatch must be used within a StayProvider");
  }
  return context;
};

export { useStayState, useStayDispatch, StayProvider };