import * as Yup from 'yup';

export const SearchSchema = Yup.object().shape({
  search: Yup.string()
    .required('El campo es obligatorio')
    .min(3, 'El campo debe tener al menos 3 caracteres')
    .max(15, 'El campo no puede tener mas de 15 caracteres'),
});
