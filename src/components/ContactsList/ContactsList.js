import React from 'react';
import PropTypes from 'prop-types'; 

const ContactsList = ({contacts, onDeleteClick}) => 
  <ul>
    {contacts.map(({id,name, number}) => {
      return (
        <li key={id}>{name}:{number}
          <button onClick={()=>onDeleteClick(id)} type='button'>Delete</button>
        </li>

      )
    })}
  </ul>


ContactsList.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteClick: PropTypes.func.isRequired
}

export default ContactsList;
