import React from 'react';
import {
  Button
} from 'antd'
const Main = ({ value, onButtonPress }) => (
  <div>
    <p>Your number is {value}</p>
    <Button onClick={onButtonPress}>Add</Button>
  </div>
)

export default Main