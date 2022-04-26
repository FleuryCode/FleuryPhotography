import React, { useState } from "react";
import './contact.styles.scss';
import ContactHeader from '../../assets/headers/contactHeader.png';
import CustomInput from '../../components/customInput/customInput.component';
// Redux
import { connect } from "react-redux";

const ContactPage = ({ language }) => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');

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
                    
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    language: state.language.language
});

export default connect(mapStateToProps)(ContactPage);