import React, { useState, useEffect } from 'react'
import { firestore } from '../firebase'
import './data.css'
function Data() {

    const [data, setData] = useState([]);

    useEffect(() => {
        firestore.collection('users').onSnapshot(snapshot => {
            setData(snapshot.docs.map(doc => ({id: doc.id, fullname: doc.data().fullname, tdee: doc.data().tdee, bmr: doc.data().bmr})))
        })
    })

    return (
        <div>
            <h1>Previous Saved Data</h1>
            <ul>
                {data.map(user=> (
                    <div className="data-main">

                    <h2 >FullName : {user.fullname}</h2>
                        <h2>TDEE : {user.tdee}</h2>
                        <h2>BMR : {user.bmr}</h2>
                    </div>
                ))}
            </ul>
        </div>
    )
}

export default Data
