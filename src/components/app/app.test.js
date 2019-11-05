import React from 'react';
import renderer from "react-test-renderer";
import App from './app';

it(`App correctly renders after relaunch`, () => {
  const tree = renderer
    .create(<App
      errorCount={7}
      gameTime={4}
      onClick={jest.fn()}
    />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
