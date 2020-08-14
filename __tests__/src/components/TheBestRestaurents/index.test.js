
import 'react-native';
import React from 'react'
import renderer from 'react-test-renderer';


describe('TheBestRestaurents', () => {
  let TheBestRestaurents;

  beforeEach(() => {
    TheBestRestaurents = require('../../../../src/components/TheBestRestaurents').default;
  })

  it('Randering Possible.', () => {
    //given

    //when
    const json = renderer.create(<TheBestRestaurents/>).toJSON();
    //then
    expect(json).toMatchSnapshot();
  });

});

