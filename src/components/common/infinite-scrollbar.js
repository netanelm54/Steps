import styled from "styled-components";
import PropTypes from "prop-types";
import Spinner from "./spinner";

const Scrollbar = styled.div`
  overflow-y: scroll;
  height: 100%;

  ::-webkit-scrollbar {
    width: 5px;
  }
  ::-webkit-scrollbar-track {
    background: #dddddd;
  }
  ::-webkit-scrollbar-thumb {
    background: #a7a7a7;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #858585;
  }
`;

const LoaderSpinner = styled(Spinner)`
  top: -40px;
`;
const LoaderBody = styled.div`
  height: 40px;
`;

export const InfiniteScrollbar = ({
  className,
  children,
  isLoading,
  hasMore,
  onScrollEnd,
}) => {
  const handleScroll = (e) => {
    if (hasMore && !isLoading) {
      const offset =
        e.target.scrollHeight - e.target.scrollTop - e.target.clientHeight;
      if (offset < 1) {
        e.target.scrollTop -= 1;
        onScrollEnd();
      }
    }
  };

  return (
    <Scrollbar className={className} onScroll={handleScroll}>
      {children}
      {hasMore && <LoaderBody />}
      {isLoading && <LoaderSpinner className="loaderSpinner" />}
    </Scrollbar>
  );
};

InfiniteScrollbar.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  isLoading: PropTypes.bool,
  hasMore: PropTypes.bool,
  onScrollEnd: PropTypes.func,
  reverseScroll: PropTypes.bool,
};

export default InfiniteScrollbar;
