import React from 'react';

import
{
  Grid,
  Table,
  Segment,
  Header,
  Form,
} from 'semantic-ui-react';

const Heroes = () => (
  <Segment>
    <Grid>
      <Grid.Column width={10}>
        <Header as="h3">Heroes List</Header>
        <Table celled>

          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={1}>
                ID
              </Table.HeaderCell>
              <Table.HeaderCell width={5}>
                Name
              </Table.HeaderCell>
              <Table.HeaderCell width={3}>
                Difficulty
              </Table.HeaderCell>
              <Table.HeaderCell width={2}>
                Role
              </Table.HeaderCell>

            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                1
              </Table.Cell>
              <Table.Cell>
                D.Va
              </Table.Cell>
              <Table.Cell>
                2
              </Table.Cell>
              <Table.Cell>
                Tank
              </Table.Cell>
            </Table.Row>
          </Table.Body>

        </Table>
      </Grid.Column>
      <Grid.Column width={6}>
        <Header as="h3">Hero Details</Header>
        <Segment>
          <Form size="large">
            <Form.Field name="id" width={6}>
              <label>ID</label>
              <input
                placeholder="ID"
                defaultValue="1"
              />
            </Form.Field>
            <Form.Field name="name" width={16}>
              <label>Name</label>
              <input
                placeholder="Name"
                defaultValue="D.va"
              />
            </Form.Field>
            <Form.Field name="weight" width={6}>
              <label>Difficulty</label>
              <input
                defaultValue="2"
              />
            </Form.Field>
            <Form.Field name="class" width={6}>
              <label>Role</label>
              <input
                defaultValue="Tank"
              />
            </Form.Field>
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
  </Segment>
);
export default Heroes;
