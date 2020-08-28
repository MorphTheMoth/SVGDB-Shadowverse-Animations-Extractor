import styled from 'styled-components';

export const Container = styled.div`
  width: 95vw;
  margin: auto;
  background-color: black;

  .cardhover:hover img {
    filter: drop-shadow(0 0 7px cyan);
  }
  .cardhover img {
    transition: filter .2s;
  }
  .cardhover:hover img {
    cursor: pointer;
  }
`;

export const Tooltip = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  background-color: grey;
  top: 50vh;
  left: 50vw;
  padding: 5px;
`;

export const Divider = styled.div`
  height: 2px;
  margin: 5px 0;
  background: white;
`;
