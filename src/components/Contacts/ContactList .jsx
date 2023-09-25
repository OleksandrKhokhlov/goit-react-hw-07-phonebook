import { useDispatch, useSelector } from 'react-redux';
import { Filter } from '../Filter/Filter';
import {
  ButtonDelete,
  ContactsItem,
  ContactsList,
} from './ContactList .styled';
import { getContacts, getError, getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import toast from 'react-hot-toast';

export const Contacts = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getFilter);
  const contacts = useSelector(getContacts);
  const errorMessage = useSelector(getError);

  return (
    <>
      <Filter />
      {errorMessage ? ( 
        toast.error(errorMessage)
      ) : ( 
        <ContactsList>
          {contacts
            .filter(({ name }) => name.toLowerCase()?.includes(filter))
            .map(({ id, name, number }) => (
              <ContactsItem key={id}>
                {name}: {number}
                <ButtonDelete
                  type="button"
                  onClick={() => dispatch(deleteContact(id))}
                >
                  Delete
                </ButtonDelete>
              </ContactsItem>
            ))}
        </ContactsList>
      )}
    </>
  );
};
