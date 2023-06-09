import styled from "styled-components";
import { BaseButton } from "components/button/button.styles";

export const PaymentFormContainer = styled.div`
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FormContainer = styled.form`
  height: 100px;
  min-width: 500px;
`;

export const PyamentButton = styled(BaseButton)`
  margin-left: auto;
  margin-top: 30px;
`;
