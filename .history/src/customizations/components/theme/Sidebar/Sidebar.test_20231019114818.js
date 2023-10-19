import React from 'react';
import renderer from 'react-test-renderer';
import Sidebar from '../components/sidebar';

it('renders correctly when there are no items', () => {
  const tree = renderer.create(<Sidebar />).toJSON();
  expect(tree).toMatchSnapshot();
});