/* eslint-disable jsx-a11y/href-no-hash */
'use strict';
import Inferno from 'inferno';
import { connect } from 'inferno-mobx';

const NAV_C = ['mdc-temporary-drawer__content', 'mdc-list'];
const A_C = ['mdc-list-item', 'mdc-temporary-drawer--selected'];
const I_C = ['material-icons', 'mdc-list-item__start-detail'];

export default connect(['store'], function Navigation({ store }) {
  let links = store.navLinks.map((link) => {
    return (
      <a className={A_C.join(' ')} href={link.path} key={link.path}>
        <i aria-hidden="true" className={I_C.join(' ')}>
          {link.icon}
        </i> {link.text}
      </a>);
  });

  return (
    <nav className={NAV_C.join(' ')} id="drawer_nav">
      {links}
    </nav>
  );
});
