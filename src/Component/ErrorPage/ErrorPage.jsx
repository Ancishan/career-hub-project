import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div>
            <h2>OOPs!</h2>
            <button className="btn btnbtn btn-active btn-secondary"><Link to ='/'> Go BAck HOME</Link></button>
        </div>
    );
};

export default ErrorPage;