import { tassign } from 'tassign';
import { ADD_SAMPLE } from '../Action/Data.action';
import { DataSample, INITIAL_STATE } from '../Model/data-sample';



export function rootReducer(state: DataSample, action): DataSample {
  switch (action.type) {
    case ADD_SAMPLE:
      const newSample = { id: state.sample.length + 1, currentDate: action.currentDate };

      return tassign(state, {
        sample: state.sample.concat(newSample)
      });
  }

  return state;
}
