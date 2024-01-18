import React from 'react'
import { Container } from 'react-bootstrap'
import '../css/soporte.css'

const Soporte = () => {
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <Container className='justify-content-center mt-5'>

    <div class="form-container">
      <form class="form">
        <div class="form-group">
          <label for="email">Company Email</label>
          <input required="" name="email" id="email" type="text"/>
        </div>
        <div class="form-group">
          <label for="textarea">How Can We Help You?</label>
          <textarea required="" cols="50" rows="10" id="textarea" name="textarea">          </textarea>
        </div>
        <button type="submit" class="form-submit-btn">Submit</button>
      </form>
    </div>

    </Container>
  )
}

export default Soporte
