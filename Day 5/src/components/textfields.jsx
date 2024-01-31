// import React from 'react';
import PropTypes from 'prop-types';


const Textfields = ({type,name}) => {
    return (
      <input type={type} name={name}></input>
    );
};


Textfields.propTypes = {
    type: PropTypes.node.isRequired,
    name: PropTypes.string.isRequired
};


export default Textfields;