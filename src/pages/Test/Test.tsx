import React, { FC } from 'react';

import Button from '../../components/Button/Button';
import Checkbox from '../../components/Checkbox/Checkbox';
import Input from '../../components/Input/Input';

const Test: FC = () => (
  <div>
    <Input />
    <Checkbox />
    <Button>Submit</Button>
  </div>
);

export default Test;
