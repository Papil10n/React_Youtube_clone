// imports

// actions

// initial state
let initialState = {
    videos: [
        {
            id: 0,
            title: "",
            author: "",
            image: "",
        }
    ],
}

// reducer
const videosReducer = (state = initialState, action) => {
    switch (action.type) {
        // case:
        default:
            return state;
    }
}

// action creator

// thunk creator

// export

export default videosReducer;