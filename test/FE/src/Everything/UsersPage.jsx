import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getusers } from './users.Actions'

function UsersPage() {
    const { data } = useSelector(store => store.users)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getusers())


    }, [])
    
    return (

        <div>
            {
                data.map(el => <div key={el.id}>{el.name}---{el.email}</div>)
            }


        </div >
    )
}

export default UsersPage