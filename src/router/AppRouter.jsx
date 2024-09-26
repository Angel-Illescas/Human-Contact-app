import { Route, Routes } from 'react-router-dom'
import { AuthRoutes } from '../auth/routes/AuthRoutes'
import { DashboardRoutes } from '../dashboard/routes/DashboardRoutes'


export const AppRouter = () => {

    return (
        <Routes>
            {
                /* (status == "autheticated") */// Create a condition for redirection
            }
            {/* <Route path='/*' element={<Navigate to="/auth/login" />} />*/}
            <Route path='/*' element={<DashboardRoutes />} />
            <Route path='/auth/*' element={<AuthRoutes />} />
    
        </Routes>
    )
}
