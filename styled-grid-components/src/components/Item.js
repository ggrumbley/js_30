import styled from 'styled-components';
import { yellow } from '../globalStyle';

const Item = styled.div`
  /* We center the contents of these items. You can also do this with flexbox too! */
  display: grid;
  justify-content: center;
  align-items: center;
  border: 5px solid rgba(0, 0, 0, 0.03);
  border-radius: 3px;
  font-size: 35px;
  background-color: ${yellow}; /* best colour */

  p {
    margin: 0 0 5px 0;
  }
`;

export default Item;
