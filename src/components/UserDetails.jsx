import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
    const user = useLoaderData()
    const {name,username,phone} = user
    return (
        <div>
            <h2 className="text-lg font-semibold">Details about users</h2>
          <div className="border-2 border-green-600 m-2 p-4 rounded-lg">
          <p>Name:{name}</p>
            <p>UserName:{username}</p>
            <p>Phone:{phone}</p>
          </div>
        </div>
    );
};

export default UserDetails;