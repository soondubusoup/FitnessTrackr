import React from 'react'

import { SingleRoutine } from '.'

const Routines = ({ routines }) => {
    return routines 
        ? <>
            <div>
                <h2>Routines</h2>
                {
                    routines.map(routine => <SingleRoutine key = {routine.id} routine = {routine}> 
                            
                        </SingleRoutine>
                    )
                }


            </div>


        </> :null 
}

export default Routines

