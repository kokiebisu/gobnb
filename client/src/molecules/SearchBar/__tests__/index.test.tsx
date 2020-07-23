import React from 'react';
import { SearchBar } from '../searchbar';
import renderer from 'react-test-renderer';
import 'jest-styled-components';

describe('Searchbar', () => {
  it('renders correctly with mobile size', () => {
    const testingData = {
      type: 'mobile',
      onPress: () => console.log('it is working'),
    };

    const tree = renderer.create(<SearchBar {...testingData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with normal size', () => {
    const testingData = {
      type: 'normal',
      onPress: () => console.log('it is working'),
    };

    const tree = renderer.create(<SearchBar {...testingData} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});