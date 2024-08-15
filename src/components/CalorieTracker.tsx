import CalorieDisplay from "./CalorieDisplay";
import {useActivity} from "../hooks/useActivity";

export default function CalorieTracker() {
    const {caloriesConsumed, caloriesBurned, netCalories} = useActivity();

    return (
        <>
            {/* Component title */}
            <h2 className="text-4xl font-black text-white text-center">Calorie Summary</h2>

            <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
                {/* Display calories consumed */}
                <CalorieDisplay
                    calories={caloriesConsumed}
                    text="Consumed"
                />

                {/* Display calories burned */}
                <CalorieDisplay
                    calories={caloriesBurned}
                    text="Exercise"
                />

                {/* Display net calories */}
                <CalorieDisplay
                    calories={netCalories}
                    text="Difference"
                />
            </div>
        </>
    );
}
