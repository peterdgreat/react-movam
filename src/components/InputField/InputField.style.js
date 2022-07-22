import { colors } from "../../styles/global.style";

import styled from "styled-components";

const CustomInput = styled.input`
  border-radius: 10px;
  border: 1px solid rgba(196, 196, 196, 0.25);
  height: 40px;
  width: 100%;
  box-sizing: border-box;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: 0.001em;

  &&:focus {
    border: 2px solid ${colors.primary};
    outline: none;
  }
`;

const InputLabel = styled.label`
  color: ${colors.primary};
  padding: 5px;
`;

const InputFieldContainer = styled.div``;

export { CustomInput, InputFieldContainer, InputLabel };
