import React, { Component } from 'react';
import Cookie from 'js-cookie'
import RoomStudent from './RoomStudent'
import RoomAdmin from './RoomAdmin'
import AddNewRoom from './AddNewRoom'


function Home () {

    const token = JSON.parse(Cookie.get('auth'))
    const role = token['role']

    return(
        <div>
            {
                role==='student'?<RoomStudent />: null
            }
            {
                role==='faculty'?<div className="container"><RoomStudent /></div>: null
            }
            {
                role==='admin'?<RoomAdmin />: null
            }
        </div>
    )

}

export default Home