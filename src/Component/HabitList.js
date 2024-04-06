import { useSelector } from "react-redux";
import { habitSelector } from "../Redux/Reducer/habitReducer";
import HabitListItem from "./HabitListItem";


// render the list section 
const HabitList = () => {
    const { habits } = useSelector(habitSelector);

    // render section
    return(
        // main container
        <div className="hidden md:block  w-1/3 h-full bg-fixed overflow-scroll">

            {/* navbar in the list showing heading */}
            <nav className="w-full h-[55px] text-lg text-indigo-700 
                            font-semibold shadow-md p-2 flex justify-center 
                            items-center sticky top-0 bg-[#f4faff]" >
                
                {/* show heading on basis of habit list's length */}
                {habits.length === 0 ? 'Nothing in your list' :'Your Habit List'}
            </nav>

            {/* list item container  */}
            <div className="w-full flex flex-col h-fill p-2 overflow-auto">
                
                {/* render each habit one by one */}
                { 
                    habits.map((habit,i) => <HabitListItem key={i}
                                                    habit={habit} />)}
            </div>

        </div>
    )
}

export default HabitList;