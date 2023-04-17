import Newsletter from "./components/features/Newsletter";
import Products from "./components/features/Products"

import './app.scss'

function App() {
  return (
    <main>
      <header>
        <span className={'header-text'}> Gratis verzending vanaf €30</span>     
      </header>
      <section>
        <Products></Products>
        <Newsletter></Newsletter>
      </section>  
      <footer>
        <span className={'footer-text'}>Derechos reservados © 2023</span>
      </footer>
    </main>
  );
}

export default App
