import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Forma, Input, Label } from './ContactForm.styled';

//  reforked on hoks
export const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const id = nanoid();
    onSubmit({ id, name, number });
    setName('');
    setNumber('');
  };

  return (
    <>
      <Forma onSubmit={handleSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="name"
            value={name}
            required
            onChange={handleChange}
          />
        </Label>
        <Label>
          Number
          <Input
            type="tel"
            name="number"
            value={number}
            required
            onChange={handleChange}
          />
        </Label>
        <button type="submit">Add contact</button>
      </Forma>
    </>
  );
};

ContactForm.propTypes = {
  onClick: PropTypes.func,
};
