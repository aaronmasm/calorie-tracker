import {useContext} from "react";
import {ActivityContext} from "../context/ActivityContext";

// Custom hook for accessing the ActivityContext
export const useActivity = () => {
    const context = useContext(ActivityContext);

    // Throw an error if the context is not found, indicating that the hook is used outside of an ActivityProvider
    if (!context) {
        throw new Error("The useActivity hook must be used within an ActivityProvider");
    }

    // Return the context if it is found
    return context;
};
