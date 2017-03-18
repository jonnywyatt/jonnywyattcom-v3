function createCommentObject(data, state) {
  const ids = Object.keys(state);
  let newId = 1;
  if (ids.length) {
    const lastId = ids.sort().pop();
    newId = parseInt(lastId, 10) + 1;
    if (isNaN(newId)) return false;
  }
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

module.exports = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_COMMENT': {
      const newState = Object.assign({}, state);
      const newComment = createCommentObject(action.data, state);
      if (newComment) newState[newComment.id] = newComment;
      return newState;
    }
    case 'REMOVE_COMMENT': {
      const newState = Object.assign({}, state);
      newState[action.data.id].deleted = true;
      return newState;
    }
    default: {
      return state;
    }
  }
};
