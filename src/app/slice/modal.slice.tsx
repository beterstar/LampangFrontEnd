import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        isShow: false,
        isSubmit: false
    },
    reducers: {
        show: (state) => {
            state.isShow = true
        },
        close: (state) => {
            state.isShow = false
        },
        reset: (state) => {
            state.isSubmit = false
            state.isShow = false
        },
        submit: (state) => {
            state.isSubmit = true
        },
        unSubmit: (state) => {
            state.isSubmit = false
        }
    }
})

// Action creators are generated for each case reducer function
export const { show: showModal, close: closeModal, reset: resetModal, submit: submitModal, unSubmit: unSubmitModal } = modalSlice.actions

export const handleShow = (state: any) => state.modal.isShow

export default modalSlice.reducer
