import PropTypes from "prop-types";
import styled, { css } from "styled-components";

const FormField = styled.input`
  border: 0px;
  padding: 1px 8px;
  background: ${(props) => props.theme.colors.lightGray};
  border-radius: 12px;
  min-height: 32px;
  color: ${(props) => props.theme.colors.black};
  font-family: ${(props) => props.theme.fonts.regular};
  :focus {
    outline: none !important;
    border-color: ${(props) => props.theme.colors.borderGray};
    box-shadow: 0 0 3px ${(props) => props.theme.colors.borderGray};
  }
  :invalid {
    outline: none !important;
    border-color: ${(props) => props.theme.colors.red};
    box-shadow: 0 0 3px ${(props) => props.theme.colors.red};
  }
  ${(props) => {
    if (props.hasError) {
      return css`
        outline: none !important;
        border-color: ${(props) => props.theme.colors.red};
        box-shadow: 0 0 3px ${(props) => props.theme.colors.red};
      `;
    }
  }}
`;

const Field = ({ className, form, label, name, type, hasError }) => {
  const onChange = (e) => {
    form.setFieldValue(name, e.target.value);
  };

  return (
    <FormField
      onChange={onChange}
      autoComplete="off"
      className={className}
      placeholder={label}
      form={form}
      name={name}
      type={type}
      hasError={hasError}
    />
  );
};

Field.propTypes = {
  className: PropTypes.string,
  form: PropTypes.object,
  label: PropTypes.string,
  name: PropTypes.string,
  type: PropTypes.string,
  hasError: PropTypes.bool,
};

export default Field;
