import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const SelectDropdown = ({ option, label }) => (
  <React.Fragment>
    <div className="card-title black-text">{label}</div>
    <div className="card-content padding-none">
      <Select options={option} styles={customStyles} />
    </div>
  </React.Fragment>
);

SelectDropdown.propTypes = {
  option: PropTypes.array,
  label: PropTypes.string
};

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '0px dotted pink',
    color: state.isSelected ? '#000' : '#345',
    padding: 20,
    boxShadow: '0 0 0 0px #2684FF',
    lineHeight: '14px',
    borderRadius: 0
  })
};

export default SelectDropdown;
