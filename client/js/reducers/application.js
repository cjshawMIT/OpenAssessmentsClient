"use strict";

import Immutable  from "immutable";

const initialState = Immutable.fromJS({assessmentIsStarted: false});

export default (state = initialState, action) => {

  switch(action.type){

    default:
      return state;
  }
}