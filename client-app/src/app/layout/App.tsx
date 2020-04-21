import React,{ Fragment} from 'react';
import {Container} from "semantic-ui-react";
import NavBar from '../../feautures/nav/Navbar';
import ActivityDashboard from '../../feautures/activities/dashboard/ActivityDashboard';
import {observer} from "mobx-react-lite";
import { Route, withRouter, RouteComponentProps } from 'react-router-dom';
import HomePage from '../../feautures/home/HomePage';
import ActivityForm from '../../feautures/activities/form/ActivityForm';
import ActivityDetails from '../../feautures/activities/details/ActivityDetails';

const App:React.FC<RouteComponentProps> =({location}) => {



  return (
    <Fragment>
      <Route exact path='/' component={HomePage}/>

      <Route path={'/(.+)'} render={()=>(
     <Fragment>
          <NavBar />
        <Container style={{marginTop: "7em"}}>
        <Route exact path='/activities' component={ActivityDashboard}/>
        <Route path='/activities/:id' component={ActivityDetails}/>
        <Route key={location.key} path={['/createActivity','/manage/:id']} component={ActivityForm}/>
        {/* <ActivityDashboard/> */}
      </Container>
     </Fragment>
      )} />

      
     
    </Fragment>
  );
}

export default withRouter(observer(App));
