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
        placeholder="Find repositories"
        type="search"
        size="small"
        fullWidth
        sx={{
          '& .MuiOutlinedInput-root': {
            borderTopRightRadius: 0,
            borderBottomRightRadius: 0,
          },
        }}
      />
      <Button
        variant="contained"
        size="small"
        sx={{
          width: '120px',
          flexShrink: 0,
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        }}
        type="submit"
      >
        Search
      </Button>
    </form>
  );
}
