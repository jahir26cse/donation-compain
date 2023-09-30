import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div>
            <div className="h-screen text-center  grid  content-center">
                <h2 className="text-8xl mt-5">Opps!!</h2> <br />
                <h1 className="text-red-600 text-9xl font-extrabold Kaushan">404</h1>
                   <span className="text-5xl mt-16"> Not Found</span> <br/>
                  <Link to={'/'}> <button className="btn btn-secondary mt-5">Go to Home</button></Link>
            </div>
        </div>
    );
};

export default ErrorPage;