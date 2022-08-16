import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

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
        updateSelectedRepository: (state, action) => {
           const {email, invested} = action.payload
            state.selectedRepository.email = email
            state.selectedRepository.invested = invested

        },
        updateTableRepo:  (state, action) => {
            const { email, invested, id } = action.payload
            axios.patch(`http://localhost:8000/test/update/${id}`, {
                invested: invested,
                email: email
            }).then(resp => {
                console.log(resp.data);
            })
            // Solution with findIndex method
            // const repoIndex = state.repositories.findIndex( (repository) => repository.id === id)
            // if (repoIndex !== -1) {
            //     state.repositories[repoIndex].email = email
            // }
            // Solution with map method
            // const repositories = state.repositories.map( (repository) => {
            //     if ( repository.id === id ){
            //         repository.email = email
            //     }
            //     return repository;
            // })
            // state.repositories.map( (repository) => repository.id === id ? (repository.email = email, repository.invested = invested) : repository)
        }
    },
})

export const { setRepositories, setSelectedRepository, updateTableRepo,updateSelectedRepository } = repoSlice.actions

export default repoSlice.reducer