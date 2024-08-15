import {createContext, Dispatch, ReactNode, useMemo, useReducer} from "react";
import {ActivityActions, activityReducer, ActivityState, initialState} from "../reducers/activity-reducer";
import type {Activity} from "../types";
import {categories} from "../data/categories";

// Define the type for the ActivityProvider's props
type ActivityProviderProps = {
    children: ReactNode;
};

// Define the type for the ActivityContext's props
type ActivityContextProps = {
    state: ActivityState; // The current state managed by the reducer
    dispatch: Dispatch<ActivityActions>; // The dispatch function for sending actions to the reducer
    caloriesConsumed: number; // Total calories consumed from activities in the 'Food' category
    caloriesBurned: number; // Total calories burned from activities in the 'Exercise' category
    netCalories: number; // Net calories calculated as calories consumed minus calories burned
    categoryName: (category: Activity["category"]) => string[]; // Function to get the name of a category by its id
    isEmptyActivities: boolean; // Boolean indicating if there are no activities
};

// Create the context with an initial value of null (to be provided later)
export const ActivityContext = createContext<ActivityContextProps>(null!);

// Define the ActivityProvider component which will wrap the part of the app that needs access to this context
export const ActivityProvider = ({children}: ActivityProviderProps) => {
    const [state, dispatch] = useReducer(activityReducer, initialState);

    // Calculate the total calories consumed from 'Food' category activities
    const caloriesConsumed = useMemo(() =>
        state.activities.reduce((total, activity) =>
            activity.category === 1 ? total + activity.calories : total, 0), [state.activities]);

    // Calculate the total calories burned from 'Exercise' category activities
    const caloriesBurned = useMemo(() =>
        state.activities.reduce((total, activity) =>
            activity.category === 2 ? total + activity.calories : total, 0), [state.activities]);

    // Calculate the net calories (calories consumed - calories burned)
    const netCalories = useMemo(() => caloriesConsumed - caloriesBurned, [caloriesBurned, caloriesConsumed]);

    // Get the name of a category by its id
    const categoryName = useMemo(() => (category: Activity['category']) =>
        categories.map(cat => cat.id === category ? cat.name : ''), [state.activities]);

    // Check if there are no activities
    const isEmptyActivities = useMemo(() => state.activities.length === 0, [state.activities]);

    return (
        // Provide the context value to the children components
        <ActivityContext.Provider value={{
            state,
            dispatch,
            caloriesConsumed,
            caloriesBurned,
            netCalories,
            categoryName,
            isEmptyActivities
        }}>
            {children}
        </ActivityContext.Provider>
    );
};
