import {
  createSignal,
  createContext,
  useContext,
  createEffect,
} from 'solid-js';
import Cookies from 'js-cookie';

const ThemeContext = createContext({
  theme: 'dark',
  setTheme: () => {},
});

interface ThemeProviderProps {
  theme: string;
  children: any;
}

export function ThemeProvider(props: ThemeProviderProps) {
  const [theme, setTheme] = createSignal(props.theme || 'dark');

  createEffect(() => {
    Cookies.set('theme', theme());

    document.body.classList.toggle('light', theme() === 'light');
  });

  function changeTheme() {
    setTheme(theme() === 'dark' ? 'light' : 'dark');
  }

  return (
    <ThemeContext.Provider value={{ theme: theme(), setTheme: changeTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
