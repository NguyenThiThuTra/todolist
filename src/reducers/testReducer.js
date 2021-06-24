const initialState = {
  listData: [{ id: Math.random(), text: 'Thang', done: false }],
  LeuLiuuu: 2189,
};
const testReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      //
      const newListData = [...state.listData];
      newListData.push(action.payload);
      //
      return { ...state, listData: newListData };
    case 'REMOVE_PEOPLE':
    // const newList = [...state.listData];
    // const filter = newList.filter((item) => item.id !== action.payload);
    // return { ...state, listData: filter };

    default:
      return state;
  }
};
export default testReducer;
