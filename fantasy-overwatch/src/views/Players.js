import React from 'react';
import { withRouter } from 'react-router-dom';
import
{
  Grid,
  Table,
  Segment,
  Header,
  Form,
  Dropdown,
} from 'semantic-ui-react';

const RANKS = [
  { value: 'Rookie', text: 'Rookie' },
  { value: 'Team Lead', text: 'Team Lead' },
  { value: 'Junior', text: 'Junior' },
  { value: 'Senior', text: 'Senior' },
  { value: 'Captain', text: 'Captain' },
];

const HEROES = [
  { value: 'dva', text: 'D.Va' },
  { value: 'winston', text: 'Winston' },
  { value: 'widowmaker', text: 'Widowmaker' }
];

const Players = withRouter(({ history }) => (
  <Segment>
    <Grid>
      <Grid.Column width={10}>
        <Header as="h3">Player List</Header>
        <Table celled>

          <Table.Header>
            <Table.Row>
              <Table.HeaderCell width={5}>
                Name
              </Table.HeaderCell>
              <Table.HeaderCell width={3}>
                Rank
              </Table.HeaderCell>
              <Table.HeaderCell width={2}>
                Age
              </Table.HeaderCell>
              <Table.HeaderCell width={2}>
                Role
              </Table.HeaderCell>
              <Table.HeaderCell width={4}>
                Hero Main
              </Table.HeaderCell>

            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                Lane Roberts
              </Table.Cell>
              <Table.Cell>
                Captain
              </Table.Cell>
              <Table.Cell>
                23
              </Table.Cell>
              <Table.Cell>
                Damage
              </Table.Cell>
              <Table.Cell>
                Widowmaker
              </Table.Cell>
            </Table.Row>
          </Table.Body>

        </Table>
      </Grid.Column>
      <Grid.Column width={6}>
        <Header as="h3">Player Details</Header>
        <Segment>
          <Form size="large">
            <Form.Field name="name" width={16}>
              <label>Name</label>
              <input
                placeholder="Name"
                defaultValue="Lane Roberts"
              />
            </Form.Field>
            <Form.Field name="rank" width={16}>
              <label>Rank</label>
              <Dropdown
                fluid
                selection
                options={RANKS}
                defaultValue="Captain"
              />
            </Form.Field>
            <Form.Field name="age" width={6}>
              <label>Age</label>
              <input
                placeholder="Age"
                defaultValue="23"
              />
            </Form.Field>
            <Form.Field name="damage" width={6}>
              <label>Damage</label>
              <input
                defaultValue="7731.36"
              />
            </Form.Field>
            <Form.Field name="healing" width={6}>
              <label>Healing</label>
              <input
                defaultValue="323.83"
              />
            </Form.Field>
            <Form.Field name="final-blows" width={6}>
              <label>Final Blows</label>
              <input
                defaultValue="8.50"
              />
            </Form.Field>
            <Form.Field name="eliminations" width={6}>
              <label>Eliminations</label>
              <input
                defaultValue="15.89"
              />
            </Form.Field>
            <Form.Field name="deaths" width={6}>
              <label>Deaths</label>
              <input
                defaultValue="5.65"
              />
            </Form.Field>
            <Form.Field name="hero" width={16}>
              <label>Hero</label>
              <Dropdown
                fluid
                selection
                options={HEROES}
                defaultValue="widowmaker"
              />
            </Form.Field>
          </Form>
        </Segment>
      </Grid.Column>
    </Grid>
    <button type="button" onClick={() => history.push('/')}>BACK</button>
  </Segment>
));

export default Players;
