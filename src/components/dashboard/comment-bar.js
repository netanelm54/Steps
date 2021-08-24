import { useDispatch } from "react-redux";
import styled from "styled-components";
import { useFormik } from "formik";
import Field from "../common/field";
import sendIcon from "../../assets/images/send.svg";
import { postComment } from "../../actions";

const Container = styled.div`
  box-shadow: 0px 2px 2px ${(props) => props.theme.colors.shadowGray};
  position: relative;
  padding: 8px 0;
  max-height: 100px;
`;
const Header = styled.div`
  padding: 0 8px;
  font-size: 14px;
  font-family: ${(props) => props.theme.fonts.semiBold};
  color: ${(props) => props.theme.colors.titleGray};
`;
const TextField = styled(Field)`
  width: calc(50% - 24px);
  margin: 4px;
`;
const CommentField = styled(Field)`
  width: calc(100% - 24px);
  margin: 4px;
`;
const SendIcon = styled.img`
  cursor: pointer;
  position: absolute;
  right: 12px;
  bottom: 18px;
  height: 21px;
  :hover {
    filter: brightness(0.8);
  }
`;

const CommentBar = () => {
  const dispatch = useDispatch();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      comment: "",
    },
    validate: (values) => {
      let hasError = false;
      const errors = {
        name: "",
        email: "",
        comment: "",
      };
      if (!values.name) {
        errors.name = true;
        hasError = true;
      }
      if (!values.email) {
        errors.email = true;
        hasError = true;
      }
      if (!values.comment) {
        errors.comment = true;
        hasError = true;
      }
      if (hasError) {
        return errors;
      }
      return false;
    },
    onSubmit: (values) => {
      dispatch(postComment(values));
    },
  });

  return (
    <Container>
      <Header>Write a Comment:</Header>
      <form autoComplete="off">
        <TextField
          form={formik}
          label="Name"
          name="name"
          type="text"
          hasError={formik.errors.name}
        />
        <TextField
          form={formik}
          label="Email"
          name="email"
          type="text"
          hasError={formik.errors.email}
        />
        <CommentField
          form={formik}
          label="Comment"
          name="comment"
          type="text"
          hasError={formik.errors.comment}
        />
      </form>
      <SendIcon onClick={formik.submitForm} title="Send" src={sendIcon} />
    </Container>
  );
};

export default CommentBar;
