/* globals jest */

import {
  fetchAllPlanets,
  fetchSinglePlanet
} from '../util/planets_api_util';

describe('the planets api util', () => {
  beforeEach(() => {
    global.$ = require.requireMock('jquery');
    global.$.ajax = jest.fn(options => "ajax promise");
  });

  afterEach(() => {
    global.$.ajax.mockClear();
  });

  it('fetchAllPlanets makes request and returns an ajax promise', () => {
    const returnValue = fetchAllPlanets();
    expect($.ajax).toBeCalled();

    const ajaxCallArg = $.ajax.mock.calls[0][0];
    expect(ajaxCallArg.url).toEqual('/api/planets');
    expect(returnValue).toEqual("ajax promise");
  });

  it('fetchSinglePlanet makes request and returns an ajax promise', () => {
    const returnValue = fetchSinglePlanet(4);
    expect($.ajax).toBeCalled();

    const ajaxCallArg = $.ajax.mock.calls[0][0];
    expect(ajaxCallArg.url).toEqual('/api/planets/4');
    expect(returnValue).toEqual("ajax promise");
  });
});
