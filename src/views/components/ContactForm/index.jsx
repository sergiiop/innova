import { TitleComponent } from '../TitleComponent'
import {
  Button,
  FormContainer,
  InputContainer,
  TextArea
} from './ContactForm.styled'

export const ContactForm = () => {
  return (
    <FormContainer className='container'>
      <TitleComponent>Contactanos:</TitleComponent>
      <form>
        <InputContainer>
          <label>Nombre: </label>
          <input type='text' />
        </InputContainer>
        <InputContainer>
          <label>Email: </label>
          <input type='email' />
        </InputContainer>
        <InputContainer>
          <label>Asunto: </label>
          <input type='text' />
        </InputContainer>
        <InputContainer>
          <label>Mensaje: </label>
          <TextArea />
        </InputContainer>
        <Button type='submit'>Enviar</Button>
      </form>
    </FormContainer>
  )
}
