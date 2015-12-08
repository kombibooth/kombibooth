import React from 'react';

const Checkbox = ({ name, children, onChange }) => (
  <div className="checkbox">
    <label>
      <input type="checkbox" name={name} onChange={ onChange } />
      { children }
    </label>
  </div>
);

export default Checkbox;
