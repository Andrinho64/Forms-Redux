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
  return state;
};

export default reducer;
