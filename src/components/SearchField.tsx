import { Button, TextField } from '@mui/material';
import { useState } from 'react';

export function SearchField({
  searchRepos,
}: {
  searchRepos: (val: string) => void;
}) {
  const [term, setTerm] = useState('');

  return (
    <form
      className="flex w-full"
      autoComplete="off"
      noValidate
      onSubmit={(event) => {
        event.preventDefault();
        searchRepos(term);
      }}
    >
      <TextField
        value={term}
        onChange={(event) => {
          setTerm(event.target.value);
        }}
        id="Search repositories"
        aria-label="Search repositories"
        label="Find repositories"
        type="search"
        size="small"
        fullWidth
      />
      <Button
        variant="contained"
        sx={{
          width: '120px',
        }}
        type="submit"
      >
        Search
      </Button>
    </form>
  );
}
