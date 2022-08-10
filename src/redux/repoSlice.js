import { createSlice } from "@reduxjs/toolkit";

export const repoSlice = createSlice({
    name: 'repoData',
    initialState: {
        repositories: [],
        selectedRepository: {},
    },
    reducers: {
    setRepositories: (state, action) => {
        state.repositories = action.payload

    },
    setSelectedRepository: (state, action) => {
        state.selectedRepository = action.payload

    },
    updateTableRepo:  (state, action) => {
        const { email, amount, id } = action.payload
        const index = state.repositories.findIndex((repo) => repo.id === id)
        console.log( id)
        if (index) {
            return [
                ...state.repositories,
                {
                ...state.repositories[index],
                     email,
                    amount
                }
            ];
    }
    }
    },
})

export const { setRepositories, setSelectedRepository, updateTableRepo } = repoSlice.actions

export default repoSlice.reducer