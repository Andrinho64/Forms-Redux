import { AnyAction } from 'redux';

const defaultState = {
  personalData: {
    name: '',
    email: '',
    cpf: '',
    address: '',
    city: '',
    uf: '',
  },
  professionalData: {
    resume: '',
    role: '',
    description: '',
  },
};

const reducer = (state = defaultState, action: AnyAction) => {
  switch (action.type) {
    case 'personalData':
      return { ...state, personalData: { ...action.payload } };

    case 'professionalData':
      return { ...state, professionalData: { ...action.payload } };
    default:
      return state;
  }
};

export default reducer;
