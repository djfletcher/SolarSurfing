/* globals jest */

import {
  fetchSingleHost,
  createReview,
  deleteReview
} from '../util/hosts_api_util';

describe('the hosts api util', () => {
  beforeEach(() => {
    global.$ = require.requireMock('jquery');
    global.$.ajax = jest.fn(options => "ajax promise");
  });

  afterEach(() => {
    global.$.ajax.mockClear();
  });

  it('fetchSingleHost makes request and returns an ajax promise', () => {
    const returnValue = fetchSingleHost(22);
    expect($.ajax).toBeCalled();

    const ajaxCallArg = $.ajax.mock.calls[0][0];
    expect(ajaxCallArg.url).toEqual('/api/users/22');
    expect(returnValue).toEqual("ajax promise");
  });
});

describe('the reviews api util', () => {
  beforeEach(() => {
    global.$ = require.requireMock('jquery');
    global.$.ajax = jest.fn(options => "ajax promise");
  });

  afterEach(() => {
    global.$.ajax.mockClear();
  });

  it('createReview makes request and returns an ajax promise', () => {
    const review = { rating: 4, body: 'Content' };
    const returnValue = createReview(review);
    expect($.ajax).toBeCalled();

    const ajaxCallArg = $.ajax.mock.calls[0][0];
    expect(ajaxCallArg.url).toEqual('api/reviews');
    expect(ajaxCallArg.method).toMatch(/post/i);
    expect(ajaxCallArg.data).toEqual({ review });
    expect(returnValue).toEqual("ajax promise");
  });

  it('deleteReview makes request and returns an ajax promise', () => {
    const returnValue = deleteReview(77);
    expect($.ajax).toBeCalled();
    const ajaxCallArg = $.ajax.mock.calls[0][0];

    expect(ajaxCallArg.url).toEqual('api/reviews/77');
    expect(ajaxCallArg.method).toMatch(/delete/i);
    expect(returnValue).toEqual("ajax promise");
  });
});
