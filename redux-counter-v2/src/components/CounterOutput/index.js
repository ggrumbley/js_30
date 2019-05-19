import React from 'react';
import styled from 'styled-components';

const StyledCounterOutput = styled.div`
  width: 100%;
  background-image: linear-gradient(260deg, #2376ae 0%, #c16ecf 100%);
  color: white;
  font-size: 1.8rem;
  text-align: center;
  padding: 20px 0;
  box-sizing: border-box;
`;

const CounterOutput = ({ value }) => (
  <StyledCounterOutput>
    Current Counter:
    {' '}
    {value}
  </StyledCounterOutput>
);

export default CounterOutput;
