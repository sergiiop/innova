import { TitleComponent } from '../TitleComponent'
import { FormContainer } from './ContactForm.styled'

export const ContactForm = () => {
  return (
    <FormContainer className='container'>
      <TitleComponent>Contactanos:</TitleComponent>
      <form>
        <div>
          <label>Nombre: </label>
          <input type='text' />
        </div>
        <div>
          <label>Email: </label>
          <input type='email' />
        </div>
        <div>
          <label>Asunto: </label>
          <input type='text' />
        </div>
        <div>
          <label>Mensaje: </label>
          <textarea />
        </div>

        <button type='submit'></button>
      </form>
    </FormContainer>
  )
}
