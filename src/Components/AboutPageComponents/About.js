import "./About.css"
import {Link} from "react-router-dom";
import me from "../../img/DSC_1508.JPG"

const About = () =>{



    return (
        <div className="page-div">
        <div className="about-div">
            <div className="left">
                <h1 className="about-header">About me</h1>
                <h2 className="about-title">Being a programmer isn't easy but it <br/>
                    definitely is rewarding!</h2>
            </div>
            <div className="right">
                <p className="about-para">As a web developer with a passion for React and JavaScript, I am committed to building innovative and user-friendly web
                    applications. With experience in creating responsive designs, integrating APIs, I am dedicated to
                    staying up-to-date with the latest technologies and best practices in the industry.
                    My skills in HTML, CSS, and Git, as well as my ability to work collaboratively in a team environment, have enabled me to deliver
                    successful projects that meet client needs. I am a quick learner and enjoy solving complex problems through creative and
                    innovative solutions.
                    As a web developer, I am excited about the opportunity to work with like-minded professionals and contribute to the
                    development of impactful web applications. Whether it's collaborating on a new project or enhancing an existing one, I am
                    passionate about creating solutions that deliver value to end-users.
                    Thank you for taking the time to review my profile. Please feel free to reach out if you have any questions or would like to
                    discuss potential opportunities.
                    <br/><br/>
                    My portfolio: <Link to="https://github.com/ImranMemis" className="link-git">https://github.com/ImranMemis</Link></p>
            </div>
        </div>
            <img src={me} alt="me" className="me"/>
            <p className="paragon-para">Picture taken at programing bootcamp graduation called paragon</p>
        </div>
    )
}

export default About;