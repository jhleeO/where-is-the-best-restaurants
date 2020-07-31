
import 'react-native';
import React from 'react'
import renderer from 'react-test-renderer';


describe('SearchBar', () => {
  let SearchBar;

  beforeEach(() => {
    SearchBar = require('../../../../src/components/SearchBar').default;
  })

  it('Randering Possible.', () => {
    //given

    //when
    const json = renderer.create(<SearchBar/>).toJSON();
    //then
    expect(json).toMatchSnapshot();
  });

});

