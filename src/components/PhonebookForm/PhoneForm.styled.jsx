import styled from '@emotion/styled';
import { Form, Field, ErrorMessage } from 'formik';

export const PhoneForm = styled(Form)`
  border: 1px solid #4e504e;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 10px;
  border-radius: 4px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const FormField = styled(Field)`
  height: 28px;
`;

export const BtnForm = styled.button`
  width: 160px;
  height: 40px;
  padding: 4px;
  font-size: 14px;
  background-color: #30309b;
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
`;
export const ErrorMessageForm = styled(ErrorMessage)`
  color: red;
`;
