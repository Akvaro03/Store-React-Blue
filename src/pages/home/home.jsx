// import Navbar from "../../components/navbar/Navbar";

import {Link} from "react-router-dom";

const Home = () => {
    
    return (
        <div className="content">
          <Link className='App-link' style={{ margin: "0 10px"}} to="/Header">
            Header
          </Link>
        </div>
    );
};

export default Home;
