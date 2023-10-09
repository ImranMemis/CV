import { NavLink } from 'react-router-dom';
import './MainNavigation.css';


function MainNavigation() {


    return (
        <div className="center">
        <footer className="footer">
            <nav>
                <ul className="list">
                    <li>
                        <NavLink to="/">
                            <button
                                className="homebtn"
                                >
                                Home
                            </button>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/projects">
                            <button
                                className="projectsbtn"
                                >
                            Projects</button>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">
                            <button
                                    className="aboutbtn">
                                About me</button>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact">
                            <button
                                    className="contactbtn">
                                Contact</button>
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </footer>
        </div>
    );
}

export default MainNavigation;