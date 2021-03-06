/* eslint-disable no-undef */
import React from 'react'
import { Route, Switch, useHistory, useLocation, BrowserRouter as Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'

import { Auth0Provider } from '@auth0/auth0-react'

import { Hello } from './atoms/hello'
import { Info } from './atoms/info'

import { AUTH0_CLIENTID, AUTH0_DOMAIN } from '../../util/envfile'

export class Index extends React.Component {
	render() {
		return (
			<React.StrictMode>
				<Auth0Provider domain={AUTH0_DOMAIN} clientId={AUTH0_CLIENTID} redirectUri={window.location.origin}>
					<Router>
						<Switch>
							<Route exact path='/' component={Hello} />
							<Route exact path='/data' component={Info} />
						</Switch>
					</Router>
				</Auth0Provider>
			</React.StrictMode>
		)
	}
}
