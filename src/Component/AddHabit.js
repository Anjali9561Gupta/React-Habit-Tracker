import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addHabit, habitSelector, setSuggestionSelected } from "../Redux/Reducer/habitReducer";

// for toast notifications
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddHabit = () => {
    const dispatch = useDispatch();
    const { habits,suggestionSelected } = useSelector(habitSelector);
    const [habitName,setHabitName] = useState('');


    // if there is a suggestion selected by user from the list
    useEffect(() => {
        // store the habit's name inside the local state variable 
        if(suggestionSelected){
            setHabitName(suggestionSelected.habit);
        }
    },[suggestionSelected]);


    // when user click on add habit button / submit the form
    const handleSubmit = (e) => {
        e.preventDefault(); // prevent the default action of button
        const newDate =  new Date().toString();

        // create an array representing seven days of weeks
        // initialize all the value with null  ( null = pending status of habit on each day )
        const weekStatus = Array(7).fill(null);
        

        
        const data = {
            id:habits.length,
            name:habitName,
            completedDays:0,
            createdOn:`${newDate.slice(4,15)}`,
            // url of icon related to the selected habit
            // if habit is selected from the suggestion list then store that icon , else provide a default habit icon
            url: suggestionSelected ? `${suggestionSelected.url}` : 'https://freeiconshop.com/wp-content/uploads/edd/task-done-flat.png',
            // weekly status of all the days
            weekStatus:weekStatus
        };

        dispatch(addHabit(data));
        dispatch(setSuggestionSelected(null));
        setHabitName('');
        // toast notification 
        toast.success('New Habit is Added !!');
    }


    // render the section
    return(

        // main container
        <div className="w-full lg:w-4/5 h-1/2 bg-[#C5DFF8] rounded shadow-md 
                        justify-self-end flex flex-col p-2">
            
            {/* heading of section */}
            <h1 className="text-indigo-700 text-lg font-semibold text-center mt-1">
                Add Habit
            </h1>

            {/* form container to get user's data */}
            <div className="w-4/5 self-center border-t border-indigo-400">
                
                {/* form */}
                <form onSubmit={handleSubmit}>
                    
                    {/* label of input tag */}
                    <label htmlFor="habit-name"
                            className="font-semibold">
                        Habit:
                    </label>
                    <br />

                    {/* input tag */}
                    <input type="text" placeholder="Enter habit name..." 
                            // value given initially { '' or from suggestion selected} 
                            id="habit-name" value={habitName}
                            className="w-full h-8 rounded my-2 px-1 font-semibold text-indigo-800" 
                            // changing value of input on change
                            onChange={(e) => setHabitName(e.target.value)} required />
                    <br />

                    {/* button to submit the form / add habit  */}
                    <button type="submit" className="bg-[#9b80fc] 
                                                hover:bg-indigo-500 rounded 
                                                shadow-md p-1 mt-2 text-white 
                                                font-medium float-right">
                        ADD HABIT
                    </button>

                </form>
            
            </div>
            
        </div>
    )
}


// export the component 
export default AddHabit;