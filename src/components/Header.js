import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title }) => (
  <div className="row">
    <div className="col s12 m12">
      <div className="title">{title}</div>
    </div>
  </div>
);

Header.propTypes = {
  title: PropTypes.string
};

export default Header;
