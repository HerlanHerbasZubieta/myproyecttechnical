import { createSlice } from "@reduxjs/toolkit";

export const Slice = createSlice({
    name: 'values',
    initialState:{
        nameUser: "Herlan",
        name: "",
        email: "",
        confirmPassword: "",
        password: "",
        phone: "",
    },
    reducers:{
        saveName:(state, action)=>{
            state.name = action.payload
        },
        saveEmail:(state, action)=>{
            state.email = action.payload
        },
        saveConfirmPassword:(state, action)=>{
            state.confirmPassword = action.payload
        },
        savePassword:(state, action)=>{
            state.password = action.payload
        },
        savePhone:(state, action)=>{
            state.phone = action.payload
        }
    }
  });
  
  export const {saveName, saveEmail, savePassword, savePhone, saveConfirmPassword} = Slice.actions;
