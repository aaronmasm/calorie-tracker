import {ChangeEvent, FormEvent, useEffect, useState} from "react";
import {v4 as uuidv4} from 'uuid';
import {categories} from "../data/categories";
import type {Activity} from "../types";
import {useActivity} from "../hooks/useActivity";

// Initial state for a new activity
const initialState: Activity = {
    id: uuidv4(),
    category: 1,
    name: '',
    calories: 0
}

export default function Form() {
    const {state, dispatch} = useActivity();
    const [activity, setActivity] = useState<Activity>(initialState);

    // Effect to populate form with the selected activity's data
    useEffect(() => {
        if (state.activeId) {
            const selectedActivity = state.activities.find(stateActivity => stateActivity.id === state.activeId);
            if (selectedActivity) {
                setActivity(selectedActivity);
            }
        }
    }, [state.activeId, state.activities]);

    // Handle changes in form inputs
    const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>) => {
        const isNumberField = ['category', 'calories'].includes(e.target.id);

        setActivity({
            ...activity,
            [e.target.id]: isNumberField ? +e.target.value : e.target.value
        });
    };

    // Validate if the activity has valid name and calories
    const isValidActivity = () => {
        const {name, calories} = activity;
        return name.trim() !== '' && calories > 0;
    }

    // Handle form submission
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Dispatch action to save the activity
        dispatch({type: 'save-activity', payload: {newActivity: activity}});

        // Reset form to initial state
        setActivity({
            ...initialState,
            id: uuidv4()
        });
    }

    return (
        <form
            className="space-y-5 bg-white shadow p-10 rounded-lg"
            onSubmit={handleSubmit}
        >
            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="category" className="font-bold">Category:</label>
                <select
                    className="border border-slate-300 p-2 rounded-lg w-full bg-white"
                    id="category"
                    value={activity.category}
                    onChange={handleChange}
                >
                    {categories.map(category => (
                        <option
                            key={category.id}
                            value={category.id}
                        >
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="name" className="font-bold">Activity:</label>
                <input
                    id="name"
                    type="text"
                    className="border border-slate-300 p-2 rounded-lg"
                    placeholder="E.g., Food, Orange Juice, Salad, Exercise, Weights, Bicycle"
                    value={activity.name}
                    onChange={handleChange}
                />
            </div>

            <div className="grid grid-cols-1 gap-3">
                <label htmlFor="calories" className="font-bold">Calories:</label>
                <input
                    id="calories"
                    type="number"
                    className="border border-slate-300 p-2 rounded-lg"
                    placeholder="Calories e.g., 300 or 500"
                    value={activity.calories}
                    onChange={handleChange}
                />
            </div>

            <input
                type="submit"
                className="bg-gray-800 hover:bg-gray-900 w-full
                p-2 font-bold uppercase text-white cursor-pointer disabled:opacity-10"
                value={activity.category === 1 ? "Save Food" : "Save Exercise"}
                disabled={!isValidActivity()}
            />
        </form>
    );
}
