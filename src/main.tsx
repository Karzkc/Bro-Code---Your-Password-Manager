import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { FormProvider } from './context/FormContext';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  // </StrictMode>,
  <FormProvider>
    <App />
  </FormProvider>

)
