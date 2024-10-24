import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getUsers } from "./users.api";

export const Users = ()=> {
    const users = useSelector(state=>state.accounts)
    const dispatch = useDispatch()
    const status = useSelector(state=>state.status)
    console.log(users);
    
    useEffect(()=>{
        dispatch(getUsers())
    },[])
    
    return<>
        <div className="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Salary</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                {users.map(user => (
                    <tr key={user.id} id={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.salary}</td>
                        <td>
                            <button>Salary Up</button>
                            <button>Delete</button>
                        </td>
                    </tr>
                    ))
                }
                </tbody>
            </table>
        </div>
    </>
}