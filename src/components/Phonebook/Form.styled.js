import { Field } from 'formik';
import styled from 'styled-components';

export const FormContainer = styled.div`
  background-color: #f5f5f5;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const StyledInput = styled(Field)`
  padding: 10px;
  display: flex;
  width: 300px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
`;

export const StyledButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  margin-left: 10px;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
`;
