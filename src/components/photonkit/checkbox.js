import React from 'react';

const Checkbox = ({ name, children, onChange, ...otherProps }) => (
  <div className="checkbox">
    <label>
      <input type="checkbox" name={name} onChange={ onChange } {...otherProps} />
      { children }
    </label>
  </div>
);

export default Checkbox;
