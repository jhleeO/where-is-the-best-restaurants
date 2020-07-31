
import 'react-native';
import React from 'react'
import renderer from 'react-test-renderer';


describe('MainComponent', () => {
  let MainComponent;

  beforeEach(() => {
    MainComponent = require('../../../src/mainComponent').default;
  })

  it('Randering Possible.', () => {
    //given

    //when
    const json = renderer.create(<MainComponent/>).toJSON();
    //then
    expect(json).toMatchSnapshot();
  });

});

