import ClickCounter from '../ClickCounter/ClickCounter'
import WelcomeModal from '../WellcomeModal/WelcomeModal'
import { Route, Routes } from 'react-router-dom'
import Layout from '../Layout/Layout'
import FormComponent from '../Form/FormComponent'
import FormikComponent from '../FormikComponent/FormikComponent'


function App() {
  

  return (
    <Layout>
      <WelcomeModal/>
      <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/click-counter" element={<ClickCounter />} />
        <Route path="/form" element={<FormComponent/>} />
        <Route path="/formik" element={<FormikComponent />}>
          <Route path="redux-state" element={<div>some state</div> } />
        </Route>
        <Route path="*" element={<div>Not found</div>} />

      </Routes>
      
      
    </Layout>
      )
}



export default App
