import React from 'react';
import {View, Alert} from 'react-native';
import SearchBar from './Components/SearchBar';

class MainComponent extends React.Component {

  constructor(props) {
    super(props);

    this.requestTheBestRestaurants = this.requestTheBestRestaurants.bind(this);
    
    this.state = {
      theBestRestaurants : [],
    };
  }



  async requestTheBestRestaurants(sigunNM: string) {

    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    };
    const path = 'https://openapi.gg.go.kr/PlaceThatDoATasteyFoodSt?SIGUN_NM=' + encodeURIComponent(sigunNM);

    const response = await fetch(path, options);
    const json = await response.json();

    this.setTheBestRestaurants(json.PlaceThatDoATasteyFoodSt[1].row);
  }

  setTheBestRestaurants(theBestRestaurants: any[]) {
    this.setState({theBestRestaurants: theBestRestaurants});
  }

  render() {
    return (
      <View 
        style = {{
          flex: 1,
          // backgroundColor: 'violet',
          alignItems: 'center',
      }}
      >
        <SearchBar onPressSearch={this.requestTheBestRestaurants}/>
      </View>
    )
  }
}

export default MainComponent;