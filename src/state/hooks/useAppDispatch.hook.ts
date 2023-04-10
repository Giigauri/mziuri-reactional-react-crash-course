import { useDispatch } from 'react-redux';
import { AppDispatch } from '../types/app-dispatch.type';

export const useAppDispatch: () => AppDispatch = useDispatch;
