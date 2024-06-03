import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from "@routes/routes.tsx"
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AuthProvider } from './context/AuthContext';
import { RealmProvider } from './context/RealmContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <AuthProvider>
      <RealmProvider>
        <RouterProvider router={router} />
      </RealmProvider>
    </AuthProvider>
  </React.StrictMode>,
)
