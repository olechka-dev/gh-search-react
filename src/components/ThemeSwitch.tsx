import { Switch } from '@mui/material';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

import { useColorScheme } from '@mui/material';

export function ThemeSwitch() {
  const { mode, setMode, systemMode } = useColorScheme();
  const effectiveMode = mode === 'system' ? systemMode : mode;

  return (
    <>
      <Switch
        checked={effectiveMode === 'dark'}
        onChange={(event) => {
          setMode(event.target.checked ? 'dark' : 'light');
        }}
        sx={{
          overflow: 'visible',
          // The custom thumb is 24px instead of MUI's default 20px.
          '& .MuiSwitch-switchBase': { top: -2, left: -2 },
          '& .MuiSwitch-switchBase .MuiSwitch-input': {
            left: 0,
            width: '100%',
          },
        }}
        icon={
          <div className="shadow-[0_2px_4px_rgba(0,0,0,0.1)] rounded-full bg-primary-foreground h-6 w-6 flex justify-center items-center">
            <LightModeIcon fontSize="small" className="text-border-strong" />
          </div>
        }
        checkedIcon={
          <div className="shadow-[0_2px_4px_rgba(0,0,0,0.1)] rounded-full bg-primary h-6 w-6 flex justify-center items-center">
            <DarkModeIcon
              fontSize="small"
              className="text-primary-foreground"
            />
          </div>
        }
      />
    </>
  );
}
