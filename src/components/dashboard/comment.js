import PropTypes from "prop-types";
import styled from "styled-components";

const Content = styled.div`
  font-family: ${(props) => props.theme.fonts.regular};
  padding: 14px;
  margin: 4px;
  border-radius: 3px;
  box-shadow: 1px 1px 2px ${(props) => props.theme.colors.shadowGray};
  background: ${(props) => props.theme.colors.lightGray};
  &:hover {
    background: ${(props) => props.theme.colors.hoverGray};
  }
`;

const Comment = ({ comment }) => {
  return <Content>{comment.body}</Content>;
};

Comment.propTypes = {
  comment: PropTypes.object,
};

export default Comment;
