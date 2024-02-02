import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import {
  saveName,
  saveEmail,
  savePassword,
  savePhone,
  saveConfirmPassword,
} from '@/redux/slice';
import registerUser from './RegistrationService';

export const useFormLogic = () => {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleInputChange = (field, value) => {
    switch (field) {
      case 'name':
        dispatch(saveName(value));
        break;
      case 'email':
        dispatch(saveEmail(value));
        break;
      case 'password':
        dispatch(savePassword(value));
        break;
      case 'phone':
        dispatch(savePhone(value));
        break;
      case 'confirmPassword':
        dispatch(saveConfirmPassword(value));
        break;
      default:
        break;
    }
  };

  const onSubmit = async (userData) => {
    try {
      await registerUser(userData);

      dispatch(saveName(''));
      dispatch(saveEmail(''));
      dispatch(savePassword(''));
      dispatch(savePhone(''));
      dispatch(saveConfirmPassword(''));

      router.push('/');
    } catch (error) {
      console.error('Error al registrar usuario:', error.message);
    }
  };

  return { handleInputChange, onSubmit };
};
