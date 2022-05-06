//CREO IL PRIMO COMPONENTE ADDFORM

import {useState} from 'react';
import styles from "./../AddContactForm/styles.module.scss"
const AddContactForm = (props) => {

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState ("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        props.addContact ({firstName, lastName, phoneNumber});
        setFirstName("");
        setLastName("");
        setPhoneNumber("");
        };
    return(
        <form onSubmit={onSubmit} className={styles.form}>
            <label htmlFor="firstName" className={styles.form__label}> Name </label>
            <input type="text" name="firstName" id="firstName" placeholder="John"
            value={firstName} onChange={(e) => setFirstName (e.target.value)} className={styles.form__input} />
            <label htmlFor="lastName" className={styles.form__label}> Last Name </label>
            <input type="text" name="lastName" id="lastName" placeholder="Smith"
            value={lastName} onChange={(e) => setLastName (e.target.value)} className={styles.form__input} />
            <label htmlFor="lastName" className={styles.form__label}> Phone Number </label>
            <input type="text" name="phoneNumber" id="phoneNumber" placeholder="(+39) 3456667788"
            value={phoneNumber} onChange={(e) => setPhoneNumber (e.target.value)} className={styles.form__input} />

            <button type="submit" className={styles.form__btn}> + Add Contact</button>
        </form>
    )

};

export default AddContactForm