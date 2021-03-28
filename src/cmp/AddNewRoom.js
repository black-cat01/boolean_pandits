import React, {useState, useEffect} from 'react'
import RoomStudent from './RoomStudent'
import axios from 'axios'
import { useHistory } from "react-router-dom";

function AddNewRoom(){

    let history = useHistory();

    const [newroom,setRoom]= useState({
        room: "",
        isavailable: false,
        course: "",  
        faculty: ""
    });

    const { room, isavailable, course, faculty} = newroom;


    const onInputChange = e => {
        setRoom({ ...newroom, [e.target.name]: e.target.value });
    };


    const onSubmit = async e => {
        e.preventDefault();
        await axios.post('http://localhost:1337/rooms', newroom);
    }; 

    return(
       <div>
           <form onSubmit={e => onSubmit(e)} style={{backgroundColor:'grey'}}>
           <div class="container">
           <div class="form-group row  " >
                <label for="inputEmail3" class="col-sm-2 col-form-label">Room name</label>
                <div class="col-md-3">
                    <input
                     type="text"
                     class="form-control" 
                     name="room"
                     id="inputEmail3" 
                     placeholder="Enter The Room"
                     value={room}
                     onChange={e => onInputChange(e)} />
                </div>
           </div>
           
           <fieldset class="form-group">
                <div class="row">
                <legend class="col-form-label col-sm-2 pt-0">Availability</legend>
                <div class="col-md-3">
                    <div class="form-check">
                    <input 
                    class="form-check-input"
                    type="radio" 
                    name="isavailable" 
                    id="gridRadios1" 
                    value={isavailable}
                    onChange={e => onInputChange(e)} 
                    checked/>
                    <label class="form-check-label" for="gridRadios1">
                        not available
                    </label>

                    </div>
                    <div class="form-check">
                    <input 
                    class="form-check-input" 
                    type="radio" 
                    name="isavailable" 
                    id="gridRadios2"
                    value={true}
                    onChange={e => onInputChange(e)} 
                    />
                    <label class="form-check-label" for="gridRadios2">
                        is available
                    </label>
                    </div>
                    
                </div>
                </div>
            </fieldset>
            <div class="form-group row">
                <label for="inputEmail3" class="col-sm-2 col-form-label">course name</label>
                <div class="col-md-3">
                    <input 
                    type="text" 
                    class="form-control" 
                    name="course"
                    placeholder="course name"
                    value={course}
                    onChange={e => onInputChange(e)} 
                    />
                </div>
                <label for="inputEmail3" class="col-sm-2 col-form-label">faculty name</label>
                <div class="col-md-3">
                    <input 
                    type="text" 
                    class="form-control" 
                    name="faculty"
                    placeholder="faculty name"
                    value={faculty}
                    onChange={e => onInputChange(e)} 
                    />
                </div>
           </div>
           <button className="btn btn-primary mb-2">Add Room</button>
           <br></br>
           <br></br>
           </div>
           </form>
           
           
       </div>
       
    )
}
export default AddNewRoom