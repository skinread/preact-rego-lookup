import { render, h } from 'preact';
import RegoLookup from './RegoLookup';

it('renders without crashing', () => {
  const div = document.createElement('div');
  render(<RegoLookup />, div);
  render(null, div);
});
