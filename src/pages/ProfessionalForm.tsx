import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Input from '../components/Input';
import TextArea from '../components/TextArea';
import Button from '../components/Button';
import action from '../redux/actions';

function ProfessionalForm() {
  const [form, setForm] = useState({
    resume: '',
    role: '',
    description: '',
  });
  const { resume, role, description } = form;

  const handleChange = (
    { target }: React.ChangeEvent<
    HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleClick = () => {
    if (form.resume
    && form.role
    && form.description
    ) {
      dispatch(action('professionalData', form));
      navigate('/form-display');
    }
  };

  return (
    <form
      onSubmit={ (e) => {
        e.preventDefault();
        console.log('Ao clicar, envie a informação do formulário');
      } }
    >
      <h1 className="title">Informações Profissionais</h1>
      <TextArea
        label="Resumo do currículo: "
        value={ resume }
        name="resume"
        maxLength="1000"
        onChange={ handleChange }
        required
      />
      <Input
        label="Cargo:"
        name="role"
        type="text"
        value={ role }
        onChange={ handleChange }
        required
      />
      <TextArea
        label="Descrição do cargo: "
        name="description"
        maxLength="500"
        onChange={ handleChange }
        value={ description }
        required
      />
      <Button
        type="submit"
        label="Enviar"
        moreClasses="is-fullwidth is-info"
        onClick={ handleClick }
      />
    </form>
  );
}
export default ProfessionalForm;
