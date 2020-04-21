import React, { useContext, useEffect } from 'react'
import { Grid } from 'semantic-ui-react';
import ActivityList from './ActivityList';
import { observer } from 'mobx-react-lite';
import LoadingCompanent from '../../../app/layout/LoadingComponent';
import ActivityStore from '../../../app/stores/activityStore';



 
const ActivityDashboard: React.SFC =() => {

    const activityStore = useContext(ActivityStore)

    useEffect(() => {
      activityStore.loadActivities();
    }, [activityStore])
  
  
  
  
    if(activityStore.loadingInitial) 
        return <LoadingCompanent content='Loading activities...' />
  

    return (
        <Grid>
           <Grid.Column width={10}>
               <ActivityList/>
           </Grid.Column>

           <Grid.Column width={6}>
             <h2>Activity filters</h2>
            </Grid.Column>
       </Grid>
      );
}
 
export default observer(ActivityDashboard);