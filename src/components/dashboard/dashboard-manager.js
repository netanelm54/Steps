import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { fetchComments } from "../../actions";
import InfiniteScrollbar from "../common/infinite-scrollbar";
import Comment from "./comment";
import CommentBar from "./comment-bar";

const Container = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CommentsList = styled.div`
  height: 100%;
  @media screen and (min-width: 721px) {
    width: 720px;
  }
  @media screen and (max-width: 720px) {
    width: 100%;
  }
`;

const List = styled(InfiniteScrollbar)`
  height: calc(100% - 116px);
  box-shadow: 0px 2px 2px ${(props) => props.theme.colors.shadowGray};
`;

const DashboardManager = () => {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments);

  useEffect(() => {
    dispatch(fetchComments(0, 20));
  }, []);

  const getCommentsNext = () => {
    if (!isLoading) {
      dispatch(fetchComments(comments.start + comments.limit, comments.limit));
    }

    // Simulates loader on API pending:
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <Container>
      <CommentsList>
        <CommentBar />
        <List
          isLoading={isLoading}
          hasMore={comments.start < 480}
          onScrollEnd={getCommentsNext}
        >
          {comments.comments.map((comment) => (
            <Comment key={comment.id} comment={comment} />
          ))}
        </List>
      </CommentsList>
    </Container>
  );
};

DashboardManager.propTypes = {};

export default DashboardManager;
