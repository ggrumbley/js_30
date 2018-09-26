import React from 'react';
import { Form, Dropdown, Segment } from 'semantic-ui-react';

const TEAMS = [
  { value: 'bu', text: 'Boston Uprising' },
  { value: 'df', text: 'Dallas Fuel' },
  { value: 'fm', text: 'Florida Mayhem' },
  { value: 'ho', text: 'Houston Outlaws' },
  { value: 'ls', text: 'London Spitfire' },
  { value: 'lag', text: 'Los Angeles Gladiators' },
  { value: 'lav', text: 'Los Angeles Valiant' },
  { value: 'nye', text: 'New York Excelsior' },
  { value: 'pf', text: 'Philadelphia Fusion' },
  { value: 'sfs', text: 'San Francisco Shock' },
  { value: 'sd', text: 'Seoul Dynasty' },
  { value: 'shd', text: 'Shanghai Dragons' },
];

const TeamInfo = () => (
  <Segment attached="bottom">
    <Form size="large">
      <Form.Field name="name" width={6}>
        <label>Team Name</label>
        <input placeholder="Name" id="name-field" value="Murder Inc." />
      </Form.Field>
      <Form.Field name="affiliation" width={6}>
        <label>Affiliation</label>
        <Dropdown
          selection
          options={TEAMS}
          value="shd"
        />
      </Form.Field>
    </Form>
  </Segment>
);

export default TeamInfo;
