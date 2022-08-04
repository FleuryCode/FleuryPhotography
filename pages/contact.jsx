import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import CustomButton from '../components/customButton/customButton.component';
import CustomInput from '../components/customInput/customInput.component';
import CustomTextArea from '../components/customTextArea/customTextArea.component';
import PrimaryLayout from '../layouts/primaryLayout/primaryLayout.component';
import ContactHeader from '../public/images/contactHeader.png';
import styles from '../styles/contact.module.scss';
import { strings } from '../translations';

const Contact = () => {
  const { locale } = useRouter();
  //State
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
  const recaptchaRef = useRef();
  const recaptchaKey = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;
  const updateRecaptcha = (token) => {
    setRecaptchaToken(token);
  };
  // FormSpark
  const formSparkUrl = `https://submit-form.com/${process.env.NEXT_PUBLIC_FORMSPARK_ID}`;

  // Axios Sending
  const sendAxiosMessage = async () => {
    const payload = {
      email: email,
      FirstName: firstName,
      LastName: lastName,
      phone: phone,
      message: message,
      'g-recaptcha-response': recaptchaToken,
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
      setDisplayMessage('Thank you for your message');
      setMessageSent(true);
    } catch (error) {
      console.log(error);
      setDisplayMessage('Sorry, something went wrong');
      setMessageSent(true);
    }
  };

  const messageSendButtonClick = async (event) => {
    if (
      firstName !== '' &&
      lastName !== '' &&
      email !== '' &&
      phone !== '' &&
      message !== ''
    ) {
      event.preventDefault();
      setMessageSending(true);
      await sendAxiosMessage();
      setMessageSending(false);
    } else {
      setDisplayMessage('Please fill in all the information');
      setMessageSent(true);
    }
  };

  const inputChangeHandle = (event) => {
    const { name, value } = event.target;
    switch (name) {
      case 'firstName':
        setFirstName(value);
        break;
      case 'lastName':
        setLastName(value);
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
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>{strings[locale].aboutTitle}</title>
        <meta name="description" content={strings[locale].aboutDescription} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PrimaryLayout>
        <div className={`${styles.contactPageContainer} container-fluid`}>
          <div className="row">
            <div className={`col-12 ${styles.contactImageContainer}`}>
              <Image
                layout="fill"
                objectFit="cover"
                src={ContactHeader}
                objectPosition={'bottom'}
                alt="Contact header featuring coffee and cake"
              />
            </div>
          </div>
          <header className="row">
            <div className={`col-12 ${styles.contactTitleContainer}`}>
              <h1>{'Contact Us'}</h1>
            </div>
          </header>
          <main className={`row mt-4 px-4 ${styles.contactFormContainer}`}>
            <div className="col-12 col-md-6 mb-4">
              <CustomInput
                specificClass={'contactPage'}
                id={'firstName'}
                name={'firstName'}
                value={firstName}
                placeholder={'John'}
                onChangeHandle={inputChangeHandle}
              />
              <label htmlFor="firstName">{'First Name'}</label>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <CustomInput
                specificClass={'contactPage'}
                id={'lastName'}
                name={'lastName'}
                value={lastName}
                placeholder={'Smith'}
                onChangeHandle={inputChangeHandle}
              />
              <label htmlFor="lastName">{'Last Name'}</label>
            </div>
            <div className="col-12 col-md-8 mb-4">
              <CustomInput
                specificClass={'contactPage'}
                id={'email'}
                name={'email'}
                value={email}
                placeholder={'example@email.com'}
                onChangeHandle={inputChangeHandle}
              />
              <label htmlFor="email">Email</label>
            </div>
            <div className="col-12 col-md-4 mb-4">
              <CustomInput
                specificClass={'contactPage'}
                id={'phone'}
                name={'phone'}
                value={phone}
                placeholder={'06 55 55 55 55'}
                onChangeHandle={inputChangeHandle}
              />
              <label htmlFor="phone">{'Number'}</label>
            </div>
            <div className="col-12 mb-4">
              <CustomTextArea
                specificClass={'contactTextArea'}
                id={'message'}
                name={'message'}
                value={message}
                placeholder={'Message'}
                onChangeHandle={inputChangeHandle}
              />
              <label htmlFor="message">Message</label>
            </div>
            <div className="col-12 d-flex justify-content-center">
              <h5
                className={`${messageSent ? 'd-flex' : 'd-none'} ${
                  styles.displayMessage
                }`}
              >
                {displayMessage}
              </h5>
            </div>
            <div className="col-12 col-sm-6 col-md-8 mb-3">
              <ReCAPTCHA
                size="compact"
                theme="light"
                ref={recaptchaRef}
                sitekey={recaptchaKey}
                onChange={updateRecaptcha}
              />
            </div>
            <div className="col-8 col-sm-4 col-md-2 ms-auto me-auto me-md-0 mb-3">
              <CustomButton
                text={'Send'}
                specificClass={'contactButton'}
                asyncHandle={messageSending}
                onClickHandle={messageSendButtonClick}
              />
            </div>
          </main>
        </div>
      </PrimaryLayout>
    </div>
  );
};

export default Contact;
