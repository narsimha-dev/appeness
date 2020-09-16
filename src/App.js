import React, {Fragment} from 'react';
import {Main} from './components/Main';
import NavbarEmp from './components/NavbarEmp';

export const App=()=> {
  return <Fragment>
    <NavbarEmp/>
      <Main/>
      </Fragment>
}