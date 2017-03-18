const expect = require('chai').expect;
const commentsStoreFactory = require('../../src/client/comments/storeFactory');

function addFirstComment(store) {
  store.dispatch({
    type: 'ADD_COMMENT',
    data: {
      author: 'Dave',
      text: 'Nonsense'
    }
  });
}

function removeComment(store, id) {
  store.dispatch({
    type: 'REMOVE_COMMENT',
    data: {
      id: id
    }
  });
}

ndescribe('Comments feature', function () {
  beforeEach(function () {
    this.commentsStore = commentsStoreFactory();
  });

  it('starts with an empty list of comments', function () {
    expect(Object.keys(this.commentsStore.getState()).length).to.equal(0);
  });

  it('adds a new comment to the list', function () {
    addFirstComment(this.commentsStore);
    const state = this.commentsStore.getState();
    expect(Object.keys(state).length).to.equal(1);
    expect(state['1'].id).to.equal(1);
    expect(state['1'].author).to.equal('Dave');
  });

  it('records which comment the new comment was in response to', function () {
    addFirstComment(this.commentsStore);
    this.commentsStore.dispatch({
      type: 'ADD_COMMENT',
      data: {
        parentId: 1,
        author: 'Beth',
        text: 'Twaddle'
      }
    });
    const state = this.commentsStore.getState();
    expect(state['2'].parentId).to.equal(1);
  });

  it('removes a new comment from the list', function () {
    const deletedCommentId = 1;
    addFirstComment(this.commentsStore);
    removeComment(this.commentsStore, deletedCommentId);
    const state = this.commentsStore.getState();
    expect(state[deletedCommentId].deleted).to.be.true;
  });

  it.skip('strips out XSS strings from comment text', function () {

  });
});
