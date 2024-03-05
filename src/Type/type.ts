export type ActionType = {
  type: string;
  payload: FormType
};

export type FormType = {
  personalData: PersonalType
  professionalData: ProfessionalType
};

export type PersonalType = {
  personalData: PersonalData
};

export type ProfessionalType = {
  professionalData: ProfessionalData
};

export type PersonalData = {
  name: string;
  email: string;
  cpf: string;
  address: string;
  city: string;
  uf: string;
};

export type ProfessionalData = {
  resume: string;
  role: string;
  description: string;
};
