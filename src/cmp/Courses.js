import React, { useState, useEffect } from 'react';

function Courses() {

    const [ roomList, setRooms ] = useState([])

    const fetchRooms = () => {

        fetch('http://localhost:1337/Courses')
        .then(response=>response.json()).then((response) => {
            console.log(response);
            setRooms(response)
        })
    }

    useEffect(()=>{
        fetchRooms();
    },[])

    return (
        <table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">#</th>
      <th scope="col">course ID</th>
      <th scope="col">course Name</th>
      <th scope="col">Faculty</th>
    </tr>
  </thead>
  <tbody>
      { roomList.map(d => (
              <tr>
              <th scope="row">d.id</th>
              <td>{d.courseid}</td>
              <td>{d.coursename}</td>
              <td>{d.faculty.enroll}</td>
            </tr>
      )) }

  </tbody>
</table>
    )
}

export default Courses;