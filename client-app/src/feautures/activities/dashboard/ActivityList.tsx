import React, { SyntheticEvent } from 'react'
import { Item, Image, Button, Segment, Label } from 'semantic-ui-react';
import { IActivity } from '../../../app/models/activity';

export interface ActivityListProps {
    activities:IActivity[];
    selectActivity: (id:string) => void;
    deleteActivity:(e:SyntheticEvent<HTMLButtonElement>,id:string)=>void;
    submitting: boolean;
    target:string

}

        
 
const ActivityList: React.SFC<ActivityListProps> = ({
  submitting,
  activities,
  selectActivity,
  deleteActivity,
  target}) => {
    return ( 
      <Segment>
        <Item.Group divided>
            {activities.map( activity=>(
                  <Item key={activity.id}>    
                  <Item.Content>
                    <Item.Header as='a'>{activity.title}</Item.Header>
                    <Item.Meta>{activity.date}</Item.Meta>
                    <Item.Description>
                        <div>{activity.description}</div>
                        <div>{activity.city},{activity.venue}</div>
                    </Item.Description>
                    <Item.Extra>
                        <Button onClick={()=>selectActivity(activity.id)} floated='right' content='View' color='orange'/>
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
 
export default ActivityList;