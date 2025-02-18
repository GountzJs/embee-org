import * as Yup from 'yup';

export const SearchSchema = Yup.object().shape({
  search: Yup.string().max(15, 'El campo no puede tener mas de 15 caracteres'),
});
