import "./Contact.css"
import BasicForm from "./BasicForm";
import BottomBorder from "../Helpers/BottomBorder";

const Contact = () => {



    return (
        <>
                <BasicForm/>
                <BottomBorder/>
                <div className="contact-info">
                    <p className="contact-me">Contact me to</p>
                    <p>My E-mail: Imran1208@hotmail.com</p>
                    <p>My phone: +387 60 341 7597</p>
                </div>
        </>
    )
}

export default Contact;