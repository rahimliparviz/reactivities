import React, { useState, useEffect, SyntheticEvent } from 'react'
import { Grid, List } from 'semantic-ui-react';
import { IActivity } from '../../../app/models/activity';
import ActivityList from './ActivityList';
import ActivityDetails from '../details/ActivityDetails';
import ActivityForm from '../form/ActivityForm';


export interface ActivityDashboardProps {
    activities:IActivity[];
    selectActivity: (id:string) => void;
    setEditMode: (editMode:boolean) => void;
    editMode: boolean;
    selectedActivity:IActivity | null;
    setSelectedActivity:(activity:IActivity | null)=>void;
    createActivity:(activity:IActivity)=>void;
    editActivity:(activity:IActivity)=>void;
    deleteActivity:(e:SyntheticEvent<HTMLButtonElement>,id:string)=>void;
    submitting: boolean;
    target:string
}
 
const ActivityDashboard: React.SFC<ActivityDashboardProps> = 
({  activities,
    selectActivity,
    selectedActivity,
    editMode,
    setEditMode,
    setSelectedActivity,
    createActivity,
    editActivity,
    deleteActivity,
    submitting,
    target
}) => {



  

    return (
        <Grid>
           <Grid.Column width={10}>
               <ActivityList
                submitting={submitting} 
                deleteActivity={deleteActivity} 
                activities = {activities} 
                selectActivity={selectActivity}
                target={target}
                />
           </Grid.Column>

           <Grid.Column width={6}>
              {selectedActivity && !editMode && 
              <ActivityDetails setSelectedActivity={setSelectedActivity}  selectedActivity={selectedActivity} setEditMode = {setEditMode}/>}
               {editMode &&
                    <ActivityForm 
                    key = {selectedActivity?.id || 0}
                    editActivity={editActivity}
                    createActivity={createActivity}
                    setEditMode={setEditMode}
                     activity={selectedActivity}
                     submitting={submitting}
                     />
               }
           </Grid.Column>
       </Grid>
      );
}
 
export default ActivityDashboard;