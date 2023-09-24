import { ContactForm } from './ContactForm/ContactForm ';
import { Contacts } from './Contacts/ContactList ';
import { Container } from './Container.styled';
import { Loader } from './Loader/Loader';

export const App = () => {
  return (
    <Container>
      <ContactForm />
      <Contacts />
      <Loader/>
    </Container>
  );
};
