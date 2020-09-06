import { h, render } from 'preact';
import RegoLookup from './containers/RegoLookup';

const $root = document.getElementById('root') as HTMLElement;

render(<RegoLookup />, $root);
