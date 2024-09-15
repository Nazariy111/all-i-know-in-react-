import ClickCounter from '../ClickCounter/ClickCounter'
import WelcomeModal from '../WellcomeModal/WelcomeModal'
import { Route, Routes } from 'react-router-dom'
import Layout from '../Layout/Layout'


import FormikInfo from '../FormikInfo/FormikInfo'
import BalanceComponent from '../BalanceComponent/BalanceComponent'
import { lazy, Suspense } from 'react'
import VanillaHttpPage from '../../pages/VanillaHttpPage/VanillaHttpPage'
const FormComponent = lazy(() => import('../Form/FormComponent'));
const FormikComponent = lazy(() => import('../FormikComponent/FormikComponent'));
const HttpReduxPage = lazy(() => import('../../pages/HttpReduxPage/HttpReduxPage'));


function App() {
  

  return (
    <Suspense fallback={<div>loading. please wait...</div>}>
      <Layout>
        <WelcomeModal />
        <Routes>
        <Route path="/" element={<div>Home Page</div>} />
        <Route path="/click-counter" element={<ClickCounter />} />
        <Route path="/form" element={<FormComponent/>} />
        <Route path="/formik" element={<FormikComponent />}>
          <Route path="redux-state" element={<FormikInfo/> } />
        </Route>
        <Route path="/balance" element={<BalanceComponent />} />
        <Route path="/vanilla-http" element={<VanillaHttpPage />} />
        <Route path="/http-redux" element={<HttpReduxPage/>} />
        <Route path="*" element={<div>Not found</div>} />
        
        </Routes>
      </Layout>
    </Suspense>
    
      )
}



export default App
