import {PencilSquareIcon, XCircleIcon} from '@heroicons/react/24/outline';
import {useActivity} from "../hooks/useActivity";

export default function ActivityList() {
    const {state, dispatch, isEmptyActivities, categoryName} = useActivity();

    // Function to scroll smoothly to the top of the page
    const handleScrollToTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'});
    };

    return (
        <>
            {/* Component title */}
            <h2 className="text-4xl font-bold text-slate-600 text-center">Food and Activities</h2>

            {/* Message displayed when there are no activities */}
            {isEmptyActivities ?
                <p className="text-center my-5">No activities yet...</p> :
                // Map through activities and display each one
                state.activities.map(activity => (
                    <div key={activity.id} className="px-5 py-10 bg-white mt-5 flex justify-between shadow">
                        <div className="space-y-2 relative">
                            {/* Display category name */}
                            <p className={`absolute -top-8 -left-8 px-10 py-2 text-white uppercase font-bold 
                        ${activity.category === 1 ? 'bg-lime-500' : 'bg-orange-500'}`}>
                                {categoryName(+activity.category)}
                            </p>
                            {/* Display activity name */}
                            <p className="text-2xl font-bold pt-5">{activity.name}</p>
                            {/* Display activity calories */}
                            <p className="font-black text-4xl text-lime-500">
                                {activity.calories} {''}
                                <span>Calories</span>
                            </p>
                        </div>

                        <div className="flex gap-5 items-center">
                            {/* Edit button */}
                            <button
                                onClick={() => {
                                    dispatch({type: "set-activeId", payload: {id: activity.id}});
                                    handleScrollToTop();
                                }}
                            >
                                <PencilSquareIcon
                                    className="h-8 w-8 text-gray-800"
                                />
                            </button>
                            {/* Delete button */}
                            <button
                                onClick={() => dispatch({type: "delete-activity", payload: {id: activity.id}})}
                            >
                                <XCircleIcon
                                    className="h-8 w-8 text-red-500"
                                />
                            </button>
                        </div>
                    </div>
                ))
            }
        </>
    );
}
