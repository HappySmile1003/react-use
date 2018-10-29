import * as React from 'react';
import {storiesOf} from '@storybook/react';
import {useBoolean} from '..';
import ShowDocs from '../util/ShowDocs';

const Demo = () => {
  const [on, toggle] = useBoolean(true);

  return (
    <div>
      <div>{on ? 'ON' : 'OFF'}</div>
      <button onClick={() => toggle()}>Toggle</button>
      <button onClick={() => toggle(true)}>set ON</button>
      <button onClick={() => toggle(false)}>set OFF</button>
    </div>
  );
};

storiesOf('useBoolean', module)
  .add('Docs', () => <ShowDocs md={require('../../docs/useToggle.md')} />)
  .add('Demo', () =>
    <Demo/>
  )
