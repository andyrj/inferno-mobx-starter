'use strict';
import Inferno from 'inferno';
import { connect } from 'inferno-mobx';
import { Link } from '../components';

export default connect(['store'], ({ store }) => {
  <div>
    <p>{'Home'}</p>
  </div>;
});
