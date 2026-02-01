import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const token = useSelector(s => s.auth.token);
    return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
