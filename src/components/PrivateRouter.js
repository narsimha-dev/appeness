import React from 'react';
import {Redirect, Route} from 'react-router-dom';

export const PrivateRoute=({component:Component, ...rest})=>(
    <Route {...rest} render={props=>true?(<Component {...props}/>)
                :(<Redirect to={{pathname:"/login",state:{form:props.location}}}/>)
}>
</Route>
);