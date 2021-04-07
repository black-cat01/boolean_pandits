import React, { useEffect, useState } from 'react'
import Cookie from 'js-cookie'


function CourseFaculty () {


    const [ courses, setList ] = useState([])
    const [ auth, setAuth ] = useState({})
    const [ role, setRole ] = useState("")
    let facId = JSON.parse(Cookie.get('auth'))['id']

    const authCheck = () => {

        if(Cookie.getJSON('auth')){

            setAuth(JSON.parse(Cookie.get('auth')))
            let role = JSON.parse(Cookie.get('auth'))['role']
            setRole(role)
            console.log('role',role);
        }
        else{
            setAuth(null)
        }
    }


    const fetchCourse = () => {

        let facId = JSON.parse(Cookie.get('auth'))['id']

        fetch('http://localhost:1337/Courses')
        .then(response=>response.json()).then((response) => {
            console.log(response);
            let temp = response.filter((d) => (d.faculties.find((i)=>(i.idnumber == facId))))
            console.log("list",temp);
            setList(temp)
        })
    }

    useEffect( () => {

        authCheck();
        console.log("idnumber",auth.id);
        fetchCourse();
    }, [] )


    return(

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
                { courses.map(d => (
                        <tr>
                        <th scope="row">{d.id}</th>
                        <td>{d.courseid}</td>
                        <td>{d.coursename}</td>
                        <td>{facId}</td>
                        </tr>
                )) }

            </tbody>
        </table>
        )
}

export default CourseFaculty