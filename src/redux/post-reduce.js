const GET_POST_DATA = 'GET_POST_DATA'
const ADD_POST = 'ADD_POST'

const initialState = {
    posts: [
        {id: 1, description: 'hi', name: 'Sasha'},
        {id: 2, description: 'how are you', name: 'Lena'},
        {id: 3, description: 'im fine', name: 'Ignat'},
        {id: 4, description: '4 post', name: 'Dima'},
        {id: 5, description: '5 post', name: 'Kostya'},
    ]
}

const postReduce = (state = initialState, action) => {
    switch (action.type) {
        case GET_POST_DATA:
            return {
                ...state.posts
            }
        case ADD_POST:
            return {
                ...state,
                posts : [...state.posts, action.post]
            }
        default:
            return
    }
}

const addPost =(post)=>({type:ADD_POST, post})

export default postReduce