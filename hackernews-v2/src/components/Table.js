import React from 'react';
import PropTypes from 'prop-types';
import { LinkButton } from './Buttons';
import styled from 'styled-components';

// const TableHeader = styled.div`
//   display: flex;
//   line-height: 24px;
//   font-size: 16px;
//   padding: 0 10px;
//   justify-content: space-between;
// `;

// const EmptyTable = styled.div`
//   margin: 200px;
//   text-align: center;
//   font-size: 16px;
// `;

const StyledTable = styled.div`
  margin: 20px 0;
`;

const Row = styled.div`
  display: flex;
  line-height: 24px;
  white-space: nowrap;
  margin: 10px 0;
  padding: 10px;
  background: #ffffff;
  border: 1px solid #e3e3e3;
`;

const Item = styled.span`
  overflow: hidden;
  text-overflow: ellipsis;
  padding: 0 5px;
`;

const Item40 = styled(Item)`
  width: 40%;
`;

const Item30 = styled(Item)`
  width: 30%;
`;

const Item10 = styled(Item)`
  width: 10%;
`;

const Table = ({ list, onDismiss }) => {
  return (
    <StyledTable>
      {list.map(item => (
        <Row key={item.objectID}>
          <Item40>
            <a href={item.url}>{item.title}</a>
          </Item40>
          <Item30>{item.author}</Item30>
          <Item10>{item.num_comments}</Item10>
          <Item10>{item.points}</Item10>
          <Item10>
            <LinkButton onClick={() => onDismiss(item.objectID)}>
              Dismiss
            </LinkButton>
          </Item10>
        </Row>
      ))}
    </StyledTable>
  );
};

Table.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      objectID: PropTypes.string.isRequired,
      author: PropTypes.string,
      url: PropTypes.string,
      num_comments: PropTypes.number,
      points: PropTypes.number,
    }),
  ).isRequired,
  onDismiss: PropTypes.func.isRequired,
};

export default Table;
