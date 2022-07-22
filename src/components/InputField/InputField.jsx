import React from 'react';
import PropTypes from 'prop-types';
import { CustomInput, InputFieldContainer, InputLabel } from './InputField.style';
import  FormError  from '../FormError/FormError';

 const InputField = ({ isError, errorMessage, label, ...rest }) => {
  return (
    <>
      <InputLabel htmlFor={rest.name}>{label}</InputLabel>
      <InputFieldContainer>
        <CustomInput {...rest} isError={isError} />
        {
          isError && (<FormError message={errorMessage} />)
        }
      </InputFieldContainer>

    </>
  )
}

InputField.propTypes = {
  /**
   * To hide and show the error message
   */
  isError: PropTypes.bool,

  /**
   * Display error message when it is enabled
   */
  errorMessage: PropTypes.string.isRequired,
  /**
   * Input label
   */
  label: PropTypes.string.isRequired
};

InputField.defaultProps = {
  isError: false,
  errorMessage: 'Error Message',
  label: 'Input Label'
};
export default InputField;