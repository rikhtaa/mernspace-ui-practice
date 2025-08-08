import { createRoot } from 'react-dom/client'
import './index.css'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {RouterProvider } from 'react-router-dom'
import { router } from './router'
import { ConfigProvider } from 'antd'

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={queryClient}>
   <ConfigProvider theme={{
      token: {
        colorPrimary: '#F65F42',
        colorLink: '#F65F42',
      }
    }}>
      <RouterProvider  router={router}/> 

    </ConfigProvider>
    </QueryClientProvider>
)
