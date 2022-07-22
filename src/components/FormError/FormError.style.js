import { colors, getTypographyFontStyle } from "../../styles/global.style";

import styled from "styled-components";

const FormFieldErrorMessage = styled.span`
  color: #d61b0c;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
`;

const FormFieldErrorIcon = styled.img`
  vertical-align: middle;
  margin-right: 8px;
`;

const FormFieldError = styled.div`
  margin-top: 12px;
`;

export { FormFieldErrorMessage, FormFieldErrorIcon, FormFieldError };
