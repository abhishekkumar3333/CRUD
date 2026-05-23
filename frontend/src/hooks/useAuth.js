import { useContext } from 'react';
import { AuthContext } from '../layouts/AuthContext.jsx';

export const useAuth = () => {
  return useContext(AuthContext);
};
