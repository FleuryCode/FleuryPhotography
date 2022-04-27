import React, { useState } from "react";
import './contact.styles.scss';
import ContactHeader from '../../assets/headers/contactHeader.png';
import CustomInput from '../../components/customInput/customInput.component';
import CustomTextArea from "../../components/customTexArea/customTextArea.component";
import CustomButton from '../../components/customButton/customButton.component';
import Footer from "../../components/footer/footer.component";
import { KEYS } from "../../Keys";
import axios from "axios";
// RECAPTHCA
import ReCAPTCHA from "react-google-recaptcha";
// Redux
import { connect } from "react-redux";

const ContactPage = ({ language }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [recaptchaToken, setRecaptchaToken] = useState('');
    const [messageSending, setMessageSending] = useState(false);
    const [messageSent, setMessageSent] = useState(false);
    const [displayMessage, setDisplayMessage] = useState('');

    // ReCAPTCHA
    const recaptchaRef = React.useRef();
    const recaptchaKey = KEYS.RECAPTCHA_KEY;
    const updateRecaptcha = (token) => {
        setRecaptchaToken(token);
    };
    // FormSpark
    const formSparkId = KEYS.FORMSPARK_ID;
    const formSparkUrl = `https://submit-form.com/${formSparkId}`;

    // Axios Sending
    const sendAxiosMessage = async () => {
        const payload = {
            email: email,
            FirstName: firstName,
            LastName: lastName,
            phone: phone,
            message: message,
            "g-recaptcha-response": recaptchaToken
        };
        // Sending to FormSpark
        try {
            await axios.post(formSparkUrl, payload);
            // Reset Fields
            setFirstName('');
            setLastName('');
            setEmail('');
            setPhone('');
            setMessage('');
            setDisplayMessage((language === 'FR') ? "Merci pour votre message" : "Thank you for your message");
            setMessageSent(true);
        } catch (error) {
            console.log(error);
            setDisplayMessage((language === 'FR') ? "Désolé, quelque chose s'est mal passé" : "Sorry, something went wrong");
            setMessageSent(true);
        }
    };

    const messageSendButtonClick = async (event) => {
        if (firstName !== '' && lastName !== '' && email !== '' && phone !== '' && message !== '') {
            event.preventDefault();
            setMessageSending(true);
            await sendAxiosMessage();
            setMessageSending(false);
        } else {
            setDisplayMessage((language === 'FR') ? "Veuillez entrer toutes les informations SVP" : "Please fill in all the information");
            setMessageSent(true);
        }

    }
    const inputChangeHandle = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case 'firstName':
                setFirstName(value);
                break;
            case 'lastName':
                setLastName(value)
                break;
            case 'email':
                setEmail(value);
                break;
            case 'phone':
                setPhone(value);
                break;
            case 'message':
                setMessage(value);
                break;
            default:
                break;
        };
    };
    return (
        <div className="contactPageContainer container-fluid">
            <div className="row">
                <div className="col-12 contactImageContainer">
                    <img src={ContactHeader} alt="Contact header featuring coffee and cake" />
                </div>
            </div>
            <div className="row">
                <div className="col-12 contactTitleContainer">
                    <h1>{(language === 'FR') ? "Demandez un devis pour votre prochain project" : "Contact Us"}</h1>
                </div>
            </div>
            <div className="row mt-4 px-4 contactFormContainer">
                <div className="col-12 col-md-6 mb-4">
                    <CustomInput specificClass={'contactPage'} id={'firstName'} name={'firstName'} value={firstName} placeholder={'John'} onChangeHandle={inputChangeHandle} />
                    <label htmlFor="firstName">{(language === 'FR') ? "Prénom" : "First Name"}</label>
                </div>
                <div className="col-12 col-md-6 mb-4">
                    <CustomInput specificClass={'contactPage'} id={'lastName'} name={'lastName'} value={lastName} placeholder={'Smith'} onChangeHandle={inputChangeHandle} />
                    <label htmlFor="lastName">{(language === 'FR') ? "Nom de famille" : "Last Name"}</label>
                </div>
                <div className="col-12 col-md-8 mb-4">
                    <CustomInput specificClass={'contactPage'} id={'email'} name={'email'} value={email} placeholder={'example@email.com'} onChangeHandle={inputChangeHandle} />
                    <label htmlFor="email">Email</label>
                </div>
                <div className="col-12 col-md-4 mb-4">
                    <CustomInput specificClass={'contactPage'} id={'phone'} name={'phone'} value={phone} placeholder={'06 55 55 55 55'} onChangeHandle={inputChangeHandle} />
                    <label htmlFor="phone">{(language === 'FR') ? "Numéro" : "Number"}</label>
                </div>
                <div className="col-12 mb-4">
                    <CustomTextArea specificClass={'contactTextArea'} id={'message'} name={'message'} value={message} placeholder={'Message'} onChangeHandle={inputChangeHandle} />
                    <label htmlFor="message">Message</label>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <h5 className={ `${messageSent ? 'd-flex' : 'd-none'} displayMessage`} >{displayMessage}</h5>
                </div>
                <div className="col-12 col-sm-6 col-md-8 mb-3">
                    <ReCAPTCHA size="compact" theme="light" ref={recaptchaRef} sitekey={recaptchaKey} onChange={updateRecaptcha} />
                </div>
                <div className="col-8 col-sm-4 col-md-2 ms-auto me-auto me-md-0 mb-3">
                    <CustomButton text={(language === 'FR') ? 'Envoyer' : 'Send'} specificClass={'contactButton'} asyncHandle={messageSending} onClickHandle={messageSendButtonClick} />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Footer />
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    language: state.language.language
});

export default connect(mapStateToProps)(ContactPage);