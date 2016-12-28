import Inferno from 'inferno';
import { reaction } from 'mobx';
import {
  MDCTemporaryDrawer,
  MDCTemporaryDrawerFoundation
} from '@material/drawer';
import MenuAnchor from './MenuAnchor';
import Navigation from './Navigation';

// pull in material-components-web/drawer css
require('../../node_modules/@material/drawer/dist/mdc.drawer.css');

let menu;
const toggleMenu = () => {
  if (menu) {
    menu.open = true;
  } else {
    menu = new MDCTemporaryDrawer(document.querySelector('#drawer'));
    menu.open = true;
  }
};

export default () => {
  return (
    <div>
      <MenuAnchor toggleMenu={ toggleMenu }/>
      <aside className="mdc-temporary-drawer mdc-typography" id="drawer">
        <nav className="mdc-temporary-drawer__drawer">
          <header className="mdc-temporary-drawer__header">
            <div className="mdc-temporary-drawer__header-content">
              {'Mobx-Inferno-Starter'}
            </div>
          </header>
          <Navigation />
        </nav>
      </aside>
    </div>
  );
};
