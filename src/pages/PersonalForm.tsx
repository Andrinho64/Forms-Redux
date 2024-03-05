import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import Button from '../components/Button';
import Select from '../components/Select';

const UF_LIST = [
  'Rio de Janeiro',
  'Minas Gerais',
  'Amapá',
  'Amazonas',
  'São Paulo',
  'Ceará',
  'Distrito Federal',
];

function PersonalForm() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    cpf: '',
    address: '',
    city: '',
    uf: '',
  });
  const { name, email, cpf, address, city, uf } = form;

  const handleChange = (
    { target }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name: targetName, value } = target;
    console.log('===>', form);
    setForm({ ...form, [targetName]: value });
  };

  const navigate = useNavigate();

  const handleClick = () => {
    if (form.name
    && form.email
    && form.cpf
    && form.address
    && form.city
    && form.uf
    ) navigate('/professional-form');
  };

  return (
    <form
      onSubmit={ (e) => {
        e.preventDefault();
        console.log('Ao clicar, envie a informação do formulário');
      } }
    >
      <h1 className="title">Informações Pessoais</h1>
      <Input
        label="Nome: "
        type="text"
        onChange={ handleChange }
        value={ name }
        name="name"
        required
      />
      <Input
        label="Email: "
        type="text"
        onChange={ handleChange }
        value={ email }
        name="email"
        required
      />
      <Input
        label="Cpf: "
        type="text"
        onChange={ handleChange }
        value={ cpf }
        name="cpf"
        required
      />
      <Input
        label="Endereço: "
        type="text"
        onChange={ handleChange }
        value={ address }
        name="address"
        required
      />
      <Input
        label="Cidade: "
        type="text"
        onChange={ handleChange }
        name="city"
        value={ city }
        required
      />
      <Select
        defaultOption="Selecione"
        onChange={ handleChange }
        value={ uf }
        label="Estado: "
        name="uf"
        options={ UF_LIST }
      />
      <Button
        type="submit"
        label="Próximo"
        moreClasses="is-fullwidth is-info"
        onClick={ handleClick }
      />
    </form>
  );
}

export default PersonalForm;
