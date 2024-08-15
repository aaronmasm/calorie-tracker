// Type definition for a category
export type Category = {
    id: number;       // Unique identifier for the category
    name: string;     // Name of the category
};

// Type definition for an activity
export type Activity = {
    id: string;       // Unique identifier for the activity
    category: number; // Identifier for the category to which the activity belongs
    name: string;     // Name of the activity
    calories: number; // Number of calories associated with the activity
};
