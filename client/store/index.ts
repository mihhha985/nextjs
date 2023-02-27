import {createWrapper, Context } from 'next-redux-wrapper';
import {AnyAction, applyMiddleware, createStore} from 'redux';
import thunk, { ThunkDispatch } from 'redux-thunk';
import {rootReducer, RootState} from './reducers';

// create a makeStore function
const makeStore = (context: Context) => createStore(rootReducer, applyMiddleware(thunk));

// export an assembled wrapper
export const wrapper = createWrapper(makeStore, {debug: true});
export type NextThunkDispatch = ThunkDispatch<RootState, void, AnyAction>