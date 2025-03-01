import {createAction, createReducer} from '@reduxjs/toolkit';

const INCREMENT_NUM = 'INCREMENT_NUM';
const DECREMENT_NUM = 'DECREMENT_NUM';
const RESET_NUM = 'RESET_NUM';
const SET_TEXT = 'SET_TEXT';


export const incrementNum = createAction(INCREMENT_NUM);
export const decrementNum = createAction(DECREMENT_NUM);
export const resetNum = createAction(RESET_NUM);
export const setText = createAction(SET_TEXT);

const initialState = {
    num: 0,
    text: 'Hello World!',
};


export default createReducer(initialState, (builder)=>{
    builder
    .addCase(INCREMENT_NUM, (state)=>{
        if(state.num < 15) state.num++;
    })
    .addCase(DECREMENT_NUM, (state)=>{
        if(state.num > 0) state.num--;
    })
    .addCase(RESET_NUM, (state)=>{
        state.num = 0
    })
    .addCase(SET_TEXT, (state, action)=>{
        state.text = action.payload
    })
});