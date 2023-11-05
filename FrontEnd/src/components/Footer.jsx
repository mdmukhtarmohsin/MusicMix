import React from "react";
import styled from "styled-components";
import PlayerControls from "./PlayerControls";
import Volume from "./Volume";
import CurrentTrack from "./CurrentTrack"
export default function Footer() {
  return (
    <Container>
      <PlayerControls />
      <CurrentTrack />
      <Volume />
    </Container>
  );
}

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: #181818;
  border-top: 1px solid #282828;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 1rem;
`;