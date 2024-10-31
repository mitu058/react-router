import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError();
console.log(error)
    return (
        <div>
            <h2>Opps!!</h2>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link to='/'><button className="btn p-2 m-2 bg-blue-500 text-white">Back To Home</button></Link>
        </div>
    );
};

export default ErrorPage;