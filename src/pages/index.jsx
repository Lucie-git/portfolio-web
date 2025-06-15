import { render } from '@czechitas/render';
import '../global.css';
import './index.css';
import { App } from './app';

document.querySelector('#root').innerHTML = render(
  <div className="container">
    <App />
  </div>,
);
