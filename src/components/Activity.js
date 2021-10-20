import React from 'react'

const Activity = ( activity ) => {
    const {id, creatorId, isPublic, name, description } = activity.activity
    return (
        <div>
        <span>{name}</span>
        <span>{description}</span>
        </div>
    )
}

export default Activity