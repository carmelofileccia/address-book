import { useState } from "react";
import AddContactForm from "./../AddContactForm";
import SingleContact from "./../SingleContact";
import styles from "./../DisplayContact/styles.module.scss";

const data = [
    {
      firstName: "John",
      lastName: "Smith",
      phoneNumber: "(+39) 3456667788",
    },
  ];

const DisplayContact = () => {

    const [contacts, setContacts] = useState (data)

    const addContact =(value) => {
        const update = contacts.concat ([value])
        setContacts(update);
    };
    
    return(
        
        <section className={styles.section}>
            <AddContactForm addContact={addContact}/>
            <h2 className={styles.section__h2}> Contact List </h2>
            <div className={styles.section__div}>
                {contacts.map((e,i) => (
                    <div className={styles.section__card}key={i}>
                        <SingleContact data={e}/>
                    </div>
                ))

                }
            </div>

        </section>
    )
}

export default DisplayContact