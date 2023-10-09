import photo from "../../img/me.jpg";
import "./HomePage.css";
import {NavLink} from "react-router-dom";

const HomePage = () =>{

    return (
        <>
            <div className="alignment">
            <div className="HomePage">
                <h1 className="heading">Hi there, it's good to see you!</h1>
                <p className="paragraph">I am glad to see you looking up my webpage, I really hope you like it</p>
                <NavLink to="/contact"><button className="contact">Contact me</button></NavLink>
            </div>
            <div className="image_div">

            </div>
            <img src={photo} alt="me" className="photo"/>
            </div>
        </>
    )
}

export default HomePage;