import { Toaster } from 'react-hot-toast';
import ContactForm from 'components/ContactForm';
import ContactList from 'components/ContactList';
import Filter from 'components/Filter';

const ContactsView = () => (
  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
    }}
  >
    <h1>Phonebook</h1>
    <ContactForm />

    <h2
      style={{
        marginBottom: 20,
      }}
    >
      Contacts
    </h2>
    <Filter />
    <ContactList />
    <Toaster />
  </div>
);

export default ContactsView;
