import React from 'react';
import renderer from 'react-test-renderer';
import Breadcrumbs from '../components/breadcrumbs'; 



it('renders correctly when there are no items', () => {
    const tree = renderer.create(<Breadcrumbs />).toJSON();
    expect(tree).toMatchSnapshot();
  });
