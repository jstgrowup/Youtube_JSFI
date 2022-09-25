// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { getusers } from './Users.Actions';

// function Userspage() {
//     const dispatch = useDispatch()
//     const { data } = useSelector(store => store.allusers)

//     useEffect(() => {
//         dispatch(getusers())


//     }, [])

//     return (
//         <>
//             {
//                 data.map((el) => <div key={el._id}>{el.full_name}</div>)
//             }


//         </>
//     )
// }

// export default Userspage