import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, IndexRoute, hashHistory } from 'react-router';


// load foundation
$(document).foundation();

require('style!css!sass!applicationStyles');

ReactDOM.render(
    <p>Boilerplate 3 Project</p>
    , document.getElementById('app'));
