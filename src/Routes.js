import React, { Component } from 'react';
import {Router, Stack, Scene} from 'react-native-router-flux';

import LoginForm from '../src/Components/LoginForm';
import Home from '../src/Components/Home';
import RegisterPage from '../src/Components/RegisterPage';
import Mainmenu from '../src/Components/Mainmenu';
import PostAddF_Page from '../src/Components/PostAddF_Page';
import PostAddS_Page from '../src/Components/PostAddS_Page';
import PostAddT_Page from '../src/Components/PostAddT_Page';

export default class Routes extends Component<{}> {
	render() {
		return(
			<Router>
			    <Stack key="root" hideNavBar={true}>
			      <Scene key="Mainmenu" component={Mainmenu} title="Mainmenu" initial={true}/>
						<Scene key="Mainmenu" component={Mainmenu} title="Mainmenu"/>
			      <Scene key="RegisterPage" component={RegisterPage} title="RegisterPage"/>
						<Scene key="PostAddF_Page" component={PostAddF_Page} title="PostAddF_Page"/>
						<Scene key="PostAddS_Page" component={PostAddS_Page} title="PostAddS_Page"/>
						<Scene key="PostAddT_Page" component={PostAddT_Page} title="PostAddT_Page"/>
			    </Stack>
			 </Router>
			)
	}
}
