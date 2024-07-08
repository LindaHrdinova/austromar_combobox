import { createRoot } from 'react-dom/client';
import { HomePage } from './components/cities';
import './global.css';

createRoot(document.querySelector('#app')).render(<HomePage />);
