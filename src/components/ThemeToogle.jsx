
import { useTheme } from '../Context/ThemeContext';
import { FaSun, FaMoon } from 'react-icons/fa';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="flex items-center bg-gray-800 text-white p-2 rounded-md"
    >
      {theme === 'light' ? <FaMoon className="text-yellow-500" /> : <FaSun className="text-yellow-300" />}
    </button>
  );
};

export default ThemeToggle;