import 'regenerator-runtime/runtime';

import * as ReactDOM from 'react-dom';
import {Route, Router, Switch} from 'react-router-dom';
import {Global} from '@emotion/react';
import {ThemeProvider} from '@emotion/react';
import {createBrowserHistory} from 'history';

import globalCss from 'src/shared/globalCss';
import theme from 'src/theme';
import ApiOverlay from 'web/ApiOverlay';
import Landing from 'web/Landing';

// Create main element
const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

const history = createBrowserHistory();

const Routes = () => (
  <ThemeProvider theme={theme.light}>
    <Global styles={globalCss} />
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/overlay/:overlayKey" component={ApiOverlay} />
      </Switch>
    </Router>
  </ThemeProvider>
);

// Render components
ReactDOM.render(<Routes />, mainElement);
