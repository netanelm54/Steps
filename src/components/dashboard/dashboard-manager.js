import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import styled from "styled-components";
import { fetchComments } from "../../actions";

const DashboardManager = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comments);

  useEffect(() => {
    dispatch(fetchComments(0, 20));
  }, []);

  return (
    <div
      onClick={() => {
        dispatch(
          fetchComments(comments.start + comments.limit, comments.limit)
        );
      }}
    >
      Hello
    </div>
  );
};

DashboardManager.propTypes = {};

export default DashboardManager;
