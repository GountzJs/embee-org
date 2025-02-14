import { Dropdown, InputOutline } from '@embeeorg/ui-kit';
import { useState } from 'react';

export function SearchUsers() {
  const [search, setSearch] = useState<string>('');

  const handlerOnSearch = () => {
    console.log(search);
  };

  return (
    <form style={{ position: 'relative', width: '500px', maxWidth: '80%' }}>
      <InputOutline
        placeholder="Buscar por nombre de usuario"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <Dropdown.Box>
        <Dropdown.Item handlerOption={handlerOnSearch}>Option 1</Dropdown.Item>
        <Dropdown.Item handlerOption={handlerOnSearch}>Option 2</Dropdown.Item>
        <Dropdown.Item handlerOption={handlerOnSearch}>Option 3</Dropdown.Item>
      </Dropdown.Box>
    </form>
  );
}
