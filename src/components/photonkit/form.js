import React from 'react';

const Form = ({ children, onSubmit }) => (
  <form onSubmit={ onSubmit }>
    { children }
  </form>
);

export default Form;
