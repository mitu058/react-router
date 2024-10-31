import { useLoaderData } from "react-router-dom";
import User from "./User";

const Users = () => {
    const users = useLoaderData()
    return (
        <div>
            <h2>Abailable users {users.length}</h2>
            <p>Introduce our top users</p>
         <div className="grid grid-cols-3 gap-5">
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
         </div>
        </div>
    );
};

export default Users;