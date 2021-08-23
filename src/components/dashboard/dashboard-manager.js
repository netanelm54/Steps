import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import { fetchComments } from "../../actions";
import InfiniteScrollbar from "../common/infinite-scrollbar";
import Comment from "./comment";

const Container = styled.div`
  height: calc(100vh - 48px);
  width: 100%; ;
`;

const List = styled(InfiniteScrollbar)`
  height: 100%;
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
      <List isLoading={isLoading} hasMore={true} onScrollEnd={getCommentsNext}>
        {comments.comments.map((comment) => (
          <Comment comment={comment} />
        ))}
      </List>
      Hello
    </Container>
  );
};

DashboardManager.propTypes = {};

export default DashboardManager;
