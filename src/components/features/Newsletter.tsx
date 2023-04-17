import './newletter.scss'

const Newsletter = () => {  
  return (
    <div className={'newletter'}>
      <h2>
        Join the green revolution without commitment
      </h2>
      <div className={'newletter-single'}>
        If you are missing something and don't want to miss future promotions or our future products
      </div>
      <div className={'submit-group'}>
          <input type='email' name='' id='' />
          <button className={'button-submit'} type='submit'>Submit</button>
      </div>
    </div>
  )
}
  
export default Newsletter
  