import PropTypes from 'prop-types';
import { ContactContainer } from './Contact.styled';

const Contact = ({ id, name, number, deleteContact }) => {
  return (
    <ContactContainer>
      {name}: {number}
      <button type="button" onClick={() => deleteContact(id)}>
        Delete
      </button>
    </ContactContainer>
  );
};

Contact.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default Contact;
