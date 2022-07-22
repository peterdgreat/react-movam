import React from 'react';
import PropTypes from 'prop-types';
import { FormFieldError, FormFieldErrorIcon, FormFieldErrorMessage } from './FormError.style';

const FormError = ({ message}) => {
  return (
    <FormFieldError>
      <FormFieldErrorMessage>{message}</FormFieldErrorMessage>
    </FormFieldError>
  )
}

FormError.propTypes = {
  /**
   * Display error message when it is enabled
   */
  message: PropTypes.string.isRequired
};

FormError.defaultProps = {
  message: 'Error Message'
};
export default FormError;