
describe('MainComponent: requestTheBestRestaurants', () => {
  let MainComponent;

  beforeEach(() => {
    MainComponent = require('../../../src/MainComponent').default;
  });

  it("API 요청을 할 수 있다.", ()=> {
    //given
    const mockFetch = jest.fn();

    fetch = mockFetch;

    const sigunNM = '수원시';

    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
      },
    };

    //when
    MainComponent.prototype.requestTheBestRestaurants(sigunNM);
    const path = 'https://openapi.gg.go.kr/PlaceThatDoATasteyFoodSt?SIGUN_NM='+encodeURIComponent(sigunNM);
    //then
    expect(mockFetch).toBeCalledWith(path, options);
  })
});