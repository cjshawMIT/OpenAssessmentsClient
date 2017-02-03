// if you use jsx, you have to import React
import React                          from 'react';
import { Router, Route, IndexRoute }  from 'react-router';

import appHistory                     from './history';
import Index                          from './components/_index';
import BankNav                        from './components/bank_navigation/_bank_navigator';
import NotFound                       from './components/common/not_found';

export default (
  <Router history={appHistory}>
    <Route path="/" component={Index}>
      <IndexRoute component={BankNav} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
);
