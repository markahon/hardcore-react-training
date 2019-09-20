import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import posed from "react-pose";
import { inertia } from "popmotion";

const Box = posed.div({
  hidden: { opacity: 0, scale: 0.2, transition: inertia },
  visible: { opacity: 1, scale: 1, transition: inertia }
});

const Spinner = props => {
  const { className } = props;
  return (
    <Box className={className} pose={"visible"}>
      <FontAwesomeIcon icon={["fas", "spinner"]} spin />
    </Box>
  );
};

export default styled(Spinner)`
  position: fixed;
  z-index: 1;
  right: 1rem;
  top: 1rem;
  background-color: rgba(0, 255, 0, 0.5);
  color: black;
  font-size: 2rem;
  padding: 1rem;
  border-radius: 100%;
`;
