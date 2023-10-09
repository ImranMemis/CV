import Slider from "../Slider/Slider";
import "./Projects.css";

const Projects = () =>{

    return <>
        <h1 className="proj-slider">Project slider</h1>
        <Slider/>
        <div className="proj-container">
            <p className="proj-text">My projects that I have done were very exciting. You can see some of them
                on the slider above. These four are: expense tracker, food ordering application, minesweeper game and
                movie database application.
                <br/>
                On the first application you can see the expense meter and date filter.
                <br/>
                Second application is simple food ordering application where you order a meal and it gets stored into a cart.
                <br/>
                Third one is a simple yet challenging game called Minesweeper, the game itself is simple but program
                behind it is quite interesting
                <br/>
                Last but not least is movie database search application where you can search up your favorite movies or
                TV shows, if you click on the card you can see its details.
                <br/>
                There were more projects that I have programmed like youtube browser, live streaming application and some
                other games like jatzy, mastermind and hangman.
            </p>
        </div>
    </>
}

export default Projects;