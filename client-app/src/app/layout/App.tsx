import React,{useState,useEffect, Fragment, SyntheticEvent} from 'react';
import axios from "axios";
import {List, Button, Menu, Container} from "semantic-ui-react";
import { IActivity } from '../models/activity';
import NavBar from '../../feautures/nav/Navbar';
import ActivityDashboard from '../../feautures/activities/dashboard/ActivityDashboard';
import agent from '../api/agent';
import LoadingCompanent from './LoadingComponent';

const App =() => {


  const [activities, setActivities] = useState<IActivity[]>([])
  const [selectedActivity, setSelectedActivity] = useState<IActivity | null>(null)
  const [editMode, setEditMode] = useState(false)
  const [loader, setLoader] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [target, setTarget] = useState('')

  useEffect(() => {

    agent.Activities.list()
    .then(res =>{
    let activities:IActivity[] = [];
    res.forEach(activity=>{
      activity.date = activity.date.split('.')[0];
      activities.push(activity);
    })
      setActivities(activities)
    }).then(()=>setLoader(false))

  }, [])

  if(loader) return <LoadingCompanent content='Loading activities...' />

  const handleSelectedActivity = (id:string)=>{
    setSelectedActivity(activities.filter(a=>a.id === id)[0])
    setEditMode(false);
  }

  const handleDeleteActivity = (event:SyntheticEvent<HTMLButtonElement>,id:string)=>{
    setSubmitting(true)
    setTarget(event.currentTarget.name)
    agent.Activities.delete(id).then(()=>{
      setActivities([...activities.filter(a=>a.id !== id)])
    }).then(()=>setSubmitting(false))
    
  }

  const handleOpenCreateForm = ()=>{
    setEditMode(true);
    setSelectedActivity(null);
  }


  const handleCreateActivity = (activity:IActivity)=>{
    setSubmitting(true)
    agent.Activities.create(activity).then(()=>{
      setActivities([...activities,activity]);
      setSelectedActivity(activity);
      setEditMode(false);
    }).then(()=>setSubmitting(false))
  
  }

  const handleEditActivity = (activity:IActivity)=>{
    setSubmitting(true)

    agent.Activities.update(activity).then(()=>{
      setActivities([...activities.filter(a=>a.id != activity.id),activity])
      setSelectedActivity(activity);
      setEditMode(false);
    }).then(()=>setSubmitting(false))
  }


  return (
    <Fragment>
      <NavBar openCreateForm={handleOpenCreateForm}/>
      <Container style={{marginTop: "7em"}}>
        <ActivityDashboard 
          createActivity={handleCreateActivity}
          editActivity={handleEditActivity}
          activities={activities}
          selectedActivity={selectedActivity}
          selectActivity={handleSelectedActivity}
          editMode={editMode}
          setEditMode={setEditMode}
          setSelectedActivity={setSelectedActivity}
          deleteActivity={handleDeleteActivity}
          submitting={submitting}
          target={target}
         />
      </Container>
    </Fragment>
  );
}

export default App;
