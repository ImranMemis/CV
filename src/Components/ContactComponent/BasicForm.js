import useInput from "./useInput"

const BasicForm = () => {

    const isNotEmpty = value => value.trim() !== ''
    const isEmail = value => emailValidation(value);

    const emailValidation = (email) =>{
        const regExp = /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g
        if(regExp.test(email)){
            return true;
        }else return  false;
    }

    const {
        value: firstNameValue,
        isValid: firstNameIsValid,
        hasError: firstNameHasError,
        valueChangeHandler: firstNameChangeHandler,
        inputBlurHandler: firstNameBlurHandler,
        reset: resetFirstName,
    } =useInput(isNotEmpty);

    const {
        value: lastNameValue,
        isValid: lastNameIsValid,
        hasError: lastNameHasError,
        valueChangeHandler: lastNameChangeHandler,
        inputBlurHandler: lastNameBlurHandler,
        reset: resetLastName,
    } = useInput(isNotEmpty);
    const {
        value: emailValue,
        isValid: emailIsValid,
        hasError: emailHasError,
        valueChangeHandler: emailChangeHandler,
        inputBlurHandler: emailBlurHandler,
        reset: resetEmail,
    } = useInput(isEmail);

    let formIsValid = false;

    if(firstNameIsValid && lastNameIsValid && emailIsValid){
        formIsValid = true;
    }

    const submitHandler = (event) =>{
        event.preventDefault();

        if(!formIsValid){
            return;
        }

        let user =  {
            firstName: firstNameValue,
            lastName: lastNameValue,
            email: emailValue,
        }

        sendUser(user);

        resetFirstName();
        resetLastName();
        resetEmail();
    }

    function sendUser(user){
        fetch('https://my-cv-d6849-default-rtdb.firebaseio.com/users.json', {
            method: 'POST',
            body: JSON.stringify(user),
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((res) => {
            console.log(res);
        })
    }

    const firstNameClasses = firstNameHasError ? 'form-control invalid' : 'form-control';
    const lastNameClasses = lastNameHasError ? 'form-control invalid' : 'form-control';
    const emailClasses = emailHasError ? 'form-control invalid' : 'form-control';


    return (
        <div className="contact-div">
            <p className="contact-you">Let me contact you </p>
        <form onSubmit={submitHandler} className="form">
            <div className='control-group'>
                <div className={firstNameClasses}>
                    <label htmlFor='name'>First Name</label>
                    <input
                        value={firstNameValue}
                        onChange={firstNameChangeHandler}
                        onBlur={firstNameBlurHandler}
                        type='text'
                        id='name'
                    />
                    {firstNameHasError && <p className="error-text">Please enter your first name</p>}
                </div>
                <div className={lastNameClasses}>
                    <label htmlFor='name'>Last Name</label>
                    <input
                        value={lastNameValue}
                        onChange={lastNameChangeHandler}
                        onBlur={lastNameBlurHandler}
                        type='text'
                        id='name' />
                    {lastNameHasError && <p className="error-text">Please enter your last name</p>}
                </div>
            </div>
            <div className={emailClasses}>
                <label htmlFor='name'>E-Mail Address</label>
                <input
                    className={emailClasses}
                    value={emailValue}
                    onChange={emailChangeHandler}
                    onBlur={emailBlurHandler}
                    type='text'
                    id='name' />
                {emailHasError && <p className="error-text">Please enter your email</p>}
            </div>
            <div className='form-actions'>
                <button disabled={!formIsValid}>Submit</button>
            </div>
        </form>
        </div>
    );
};

export default BasicForm;
