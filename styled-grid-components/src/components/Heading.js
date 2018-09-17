import styled from 'styled-components';
import { yellow, black } from '../globalStyle';

export const Heading = styled.p`
  font-size: 50px;
  border-bottom: 10px solid ${yellow};
  color: ${black};
`;

export const Heading2 = styled(Heading)`
  font-size: 30px;
  border-bottom: 5px solid ${yellow};
`;
