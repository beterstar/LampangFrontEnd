import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import modalSlice from './slice/modal.slice'
// import userSlice from './slice/user.slice'


export default configureStore({
    reducer: {
        modal: modalSlice,
        // users: userSlice,
    },
    middleware: [
        ...getDefaultMiddleware({
            serializableCheck: false
        })
    ],
    devTools: false
})
