import styled from 'styled-components';

const Button = styled.button`
  background: transparent;
  cursor: pointer;
`;

export const OutlineButton = styled(Button)`
  padding: 10px;
  border-radius: ${props => (props.active ? '0' : '5px')};
  border-bottom: ${props => (props.active ? '1px solid #38BB6C' : '')};
  border: 1px solid #dddddd;
  color: #808080;

  &:hover {
    color: #222;
  }
`;

export const LinkButton = styled(Button)`
  border-width: 0;
  color: inherit;
  text-align: inherit;
  -webkit-font-smoothing: inherit;
  padding: 0;
  font-size: inherit;
`;
