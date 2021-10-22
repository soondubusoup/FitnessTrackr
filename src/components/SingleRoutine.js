import React from 'react'

const SingleRoutine = ({ children, routine }) => {
    return routine
        ? <>
            <div>              
                <h3>{routine.name}</h3>
                <div>Written by {routine.creatorName}</div>
                <div>Goal: {routine.goal}</div>
                <div>Public: {routine.isPublic ? 'yes' : 'no'}</div>
         </div>
        {children}

        </> :null 
}

export default SingleRoutine

