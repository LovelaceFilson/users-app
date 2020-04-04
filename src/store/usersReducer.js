const initialState = {
    users: [
        {
            name: "Barnbara Filson",
            email: "babs@email.com",
            gen: 1
        },
        {
            name: "Lacey Filson",
            email: "lacey@email.com",
            gen: 6
        },
        {
            name: "Basky Lincoln",
            email: "basky@email.com",
            gen: 3
        },
        {
            name: "Lucci Hendrix",
            email: "lucci@email.com",
            gen: 3
        }
    ]


}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_USER":
            const newUser = {
                name: action.payload.name,
                email: action.payload.email,
                gen: action.payload.gen
            };
            return { ...state, users: [...state.users, newUser] }

        default:
            return state;

    }
};

export default usersReducer;