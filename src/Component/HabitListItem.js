import { useDispatch } from "react-redux";
import { setShowStatus } from "../Redux/Reducer/habitReducer";


// for render the section
const HabitListItem = (props) => {
  
    const dispatch = useDispatch();
    const {name,completedDays,url} = props.habit;


    // if user click on a list item, show that item's weekly status
    const handleClick = () => {
        dispatch(setShowStatus(props.habit));
    }

    
    // render the section
    return(
        // container
        <div className="w-full h-12 bg-[#BEADFA] font-semibold my-1 
                        rounded p-2 flex justify-between items-center cursor-pointer 
                        hover:bg-[#A084E8]"
            onClick={handleClick}>

            {/* showing name of habit and number of days on which the habit is completed in a week */}
            <div>
                <p>{name}</p>
                <small>{completedDays}/7 Days</small>
            </div>

            {/* showing an icon related to the habit */}
            <div className="float-right">
                <img src={url} alt="icon" className="h-8 w-8 "/>    
            </div>
            
        </div>
    )
}


export default HabitListItem;