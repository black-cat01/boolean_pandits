import React, {useState, useEffect} from 'react'
import RoomStudent from './RoomStudent'
import axios from 'axios'
import { useHistory } from "react-router-dom";
import AddNewRoom from './AddNewRoom'

function RoomAdmin(){

    
    return(
       <div>
           <AddNewRoom />
           <RoomStudent />
           
       </div>
       
    )
}
export default RoomAdmin