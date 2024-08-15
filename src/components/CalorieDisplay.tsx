type CalorieDisplayProps = {
    calories: number;
    text: string;
};

export default function CalorieDisplay({calories, text}: CalorieDisplayProps) {
    return (
        <p className="text-white font-bold rounded-full grid grid-cols-1 gap-3 text-center">
            {/* Display the calorie amount with specific styling */}
            <span className="font-black text-6xl text-orange">{calories}</span>
            {/* Display the descriptive text */}
            {text}
        </p>
    );
}
