import React from 'react';
import PropTypes from 'prop-types';

function Header({ text }) {
  return (
    <>
      <header>
        <h2>{text}</h2>
      </header>
    </>
  )
}

Header.defaultProps = {
  text: 'Feedback UI by Header defaultProps',
};

Header.propTypes = {
  text: PropTypes.string,
};

export default Header;
