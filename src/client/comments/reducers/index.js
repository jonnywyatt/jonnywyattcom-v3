function createCommentObject(data, state) {
  const ids = Object.keys(state);
  const newId = ids.length ? ids.sort().pop() + 1 : 1;
  const ms = Date.now();
  const date = new Date(ms);
  return {
    id: newId,
    author: data.author,
    text: data.text,
    createdDateTime: date.toISOString(),
    createdMilliseconds: ms,
    parentId: data.parentId || null
  };
}

module.exports = (state={}, action) => {
  switch (action.type) {
    case 'ADD_COMMENT': {
      const newState = Object.assign({}, state);
      const newComment = createCommentObject(action.data, state);
      newState[newComment.id] = newComment;
      return newState;
    }
    default: {
      return state;
    }
  }
};
