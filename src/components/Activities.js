import React from 'react'

import { Activity } from '.'

const Activities = ({ activities }) => {
    return activities
        ? <>
            <div>
                <h2>Activities</h2>
                {
                    activities.map(activity => <Activity key = {activity.id} activity = {activity}> 
                            
                        </Activity>
                    )
                }


            </div>


        </> :null 
}

export default Activities

