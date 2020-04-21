import React, { useContext } from 'react'
import { Item,  Button, Segment, Label } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import ActivityStore from '../../../app/stores/activityStore';
import { Link } from 'react-router-dom';
      
 
const ActivityList: React.SFC = () => {

    
    const activityStore =useContext(ActivityStore);
    const {activitiesByDate ,deleteActivity,submitting,target} = activityStore;

    return ( 
      <Segment>
        <Item.Group divided>
            {activitiesByDate.map( activity=>(
                  <Item key={activity.id}>    
                  <Item.Content>
                    <Item.Header as='a'>{activity.title}</Item.Header>
                    <Item.Meta>{activity.date}</Item.Meta>
                    <Item.Description>
                        <div>{activity.description}</div>
                        <div>{activity.city},{activity.venue}</div>
                    </Item.Description>
                    <Item.Extra>
                        <Button
                        //  onClick={()=>selectActivity(activity.id)} 
                        as={Link} to={`/activities/${activity.id}`}
                         floated='right' content='View' color='orange'
                         />
                        <Button 
                        name={activity.id} 
                        loading={target ===activity.id && submitting} 
                        onClick={(e)=>deleteActivity(e,activity.id)} 
                        floated='right' content='Delete' color='red'/>
                        <Label basic content='Category'/>
                    </Item.Extra>
                  </Item.Content>
                </Item>
            // <List.Item key={activity.id}>{activity.title}</List.Item>
            ))}
      </Item.Group>
      </Segment>
     );
}
 
export default observer(ActivityList);