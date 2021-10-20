import React, {useState,useEffect} from 'react'
import { getAllActivities } from '../utils/CallApi'
import Activity from '../components/Activity'

function Activities() {

    const[ activities, setActivities] = useState([])

    useEffect(async () =>{
        const allActivities = await getAllActivities()
        if (allActivities) {
            setActivities(allActivities)
        }

    }, [])

    return (
        <div>
            <h4>Activities</h4>
            {activities.map((activity, idx)=>{
                return <Activity activity={activity} key={idx}/>
            })}



        </div>
    )
}

export default Activities