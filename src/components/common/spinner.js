import styled from "styled-components";

export const Spinner = styled.div`
  border: 4px solid ${(props) => props.theme.colors.lightGray};
  border-radius: 50%;
  border-top: 4px solid ${(props) => props.theme.colors.blue};
  width: 40px;
  height: 40px;
  animation: spin 1.2s linear infinite;
  top: 30%;
  left: calc(50% - 20px);
  right: auto;
  bottom: auto;
  margin-right: -50%;
  transform: translate(-50%, -50%);
  position: relative;
  transition: all 0.3s ease-in-out;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }

    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
