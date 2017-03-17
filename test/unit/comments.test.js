const expect = require('chai').expect;
const commentsStoreFactory = require('../../src/client/comments/storeFactory');

describe('Comments feature', function () {
  beforeEach(function () {
    this.commentsStore = commentsStoreFactory();
  });

  it('starts with an empty list of comments', function () {
    expect(Object.keys(this.commentsStore.getState()).length).to.equal(0);
  });

  it('adds a new comment to the list', function () {
    this.commentsStore.dispatch({
      type: 'ADD_COMMENT',
      data: {
        author: 'Dave',
        text: 'Nonsense'
      }
    });
    const state = this.commentsStore.getState();
    expect(Object.keys(state).length).to.equal(1);
    expect(state['1'].id).to.equal(1);
  });

  it.skip('strips out XSS strings from comment text', function () {

  });
});
