import React from 'react';
import { useSelector } from 'react-redux';
import { PersonalType, ProfessionalType } from '../Type/type';

function FormDisplay() {
  const professionalData = useSelector(
    (state: ProfessionalType) => state.professionalData,
  );
  const personalData = useSelector(
    (state: PersonalType) => state.personalData,
  );

  const {
    resume,
    role,
    description,
  } = professionalData;

  const {
    address,
    city,
    cpf,
    email,
    name,
    uf,
  } = personalData;

  return (
    <section>
      <h1>Dados Enviados</h1>
      <div>{`Nome: ${name}`}</div>
      <div>{`Email: ${email}`}</div>
      <div>{`CPF: ${cpf}`}</div>
      <div>{`Endereço: ${address}`}</div>
      <div>{`Cidade: ${city}`}</div>
      <div>{`Estado: ${uf}`}</div>
      <div>{`Currículo: ${resume}`}</div>
      <div>{`Cargo: ${role}`}</div>
      <div>{`Descrição do cargo: ${description}`}</div>
    </section>
  );
}

export default FormDisplay;
