import { PersonalData, ProfessionalData } from '../../Type/type';

type PayloadType = PersonalData | ProfessionalData;

const action = (type: string, payload: PayloadType) => {
  return { type, payload };
};

export default action;
