import React from 'react';

import Aux from '../../hoc/aux';
import style from './Layout.module.css'
const layout = (props) => {
  return (
    <Aux>
      <div>Toolbar, Sidebar, Backdrop</div>
      <main className={style.Content}>{props.children}</main>

    </Aux>
  );
};

export default layout;