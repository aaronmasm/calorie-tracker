import {Activity} from "../types";

// Define possible actions for the activity reducer
export type ActivityActions =
    { type: 'save-activity'; payload: { newActivity: Activity }; } |  // Action to save a new or updated activity
    { type: 'set-activeId'; payload: { id: Activity['id'] }; } |      // Action to set the currently active activity by ID
    { type: 'delete-activity'; payload: { id: Activity['id'] }; } |   // Action to delete an activity by ID
    { type: 'restart-app'; };                                         // Action to restart the app, clearing all activities

// Define the shape of the state used by the activity reducer
export type ActivityState = {
    activities: Activity[];    // List of activities
    activeId: Activity['id'];  // ID of the currently active activity
};

// Function to retrieve activities from localStorage
const localStorageActivities = (): Activity[] => {
    const activities = localStorage.getItem('activities');
    return activities ? JSON.parse(activities) : []; // Return parsed activities or an empty array if none are found
};

// Initial state of the activity reducer
export const initialState: ActivityState = {
    activities: localStorageActivities(), // Load activities from localStorage or start with an empty array
    activeId: ''                          // No activity is active initially
};

// Reducer function to handle state changes based on actions
export const activityReducer = (
    state: ActivityState = initialState,
    action: ActivityActions
) => {
    if (action.type === 'save-activity') {
        let updatedActivities: Activity[];

        if (state.activeId) {
            // If there is an active ID, update the existing activity
            updatedActivities = state.activities.map(activity => activity.id === state.activeId ?
                action.payload.newActivity : activity);
        } else {
            // If no active ID, add the new activity to the list
            updatedActivities = [...state.activities, action.payload.newActivity];
        }

        return {
            ...state,
            activities: updatedActivities,
            activeId: '' // Clear the active ID after saving
        };
    }

    if (action.type === 'set-activeId') {
        // Set the active ID to the ID provided in the action
        return {
            ...state,
            activeId: action.payload.id
        };
    }

    if (action.type === 'delete-activity') {
        // Remove the activity with the specified ID from the list
        return {
            ...state,
            activities: state.activities.filter(activity => activity.id !== action.payload.id)
        };
    }

    if (action.type === 'restart-app') {
        // Reset the state to initial values
        return {
            activities: [],
            activeId: ''
        };
    }

    // Return the current state if the action type does not match
    return state;
};
