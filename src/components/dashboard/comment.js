import PropTypes from "prop-types";
import styled from "styled-components";
// import userAvatar from "../../assets/images/user.png";

const Container = styled.div`
  display: flex;
  justify-content: start;
  padding: 14px;
  margin: 4px;
`;
// const Image = styled.img`
//   width: 50px;
//   height: 50px;
//   border-radius: 25px;
// `;
const Number = styled.div`
  min-width: 50px;
  max-width: 50px;
  min-height: 50px;
  max-height: 50px;
  border-radius: 25px;
  background: ${(props) => props.theme.colors.borderGray};
  color: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: ${(props) => props.theme.fonts.bold};
`;
const Content = styled.div`
  padding: 0 14px;
`;
const CommentText = styled.div`
  margin-top: 6px;
  padding: 4px 14px;
  font-size: 14px;
  font-family: ${(props) => props.theme.fonts.regular};
  color: ${(props) => props.theme.colors.black};
  background: ${(props) => props.theme.colors.lightGray};
  border-radius: 12px;
  border-top-left-radius: 0;
`;
const UserDetails = styled.div`
  font-size: 12px;
  font-family: ${(props) => props.theme.fonts.semiBold};
  color: ${(props) => props.theme.colors.darkGray};
`;

const Comment = ({ comment }) => {
  return (
    <Container>
      {/* <Image src={userAvatar} /> */}
      <Number>{comment.id}</Number>
      <Content>
        <UserDetails>
          {comment.name} | {comment.email}
        </UserDetails>
        <CommentText>{comment.body}</CommentText>
      </Content>
    </Container>
  );
};

Comment.propTypes = {
  comment: PropTypes.object,
};

export default Comment;
