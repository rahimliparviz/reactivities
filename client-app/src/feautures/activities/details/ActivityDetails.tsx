import React from 'react';
import { Card, Icon, Image, Button } from "semantic-ui-react";
import { IActivity } from '../../../app/models/activity';

export interface ActivityDetailsProps {
    selectedActivity:IActivity;
    setEditMode:(editMode:boolean)=>void;
    setSelectedActivity:(activity:IActivity | null)=>void;

}
 
const ActivityDetails: React.SFC<ActivityDetailsProps> = ({selectedActivity,setSelectedActivity,setEditMode}) => {
    return (
        <Card fluid>
        <Image src={`/assests/categoryImages/${selectedActivity?.category}.jpg`} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{selectedActivity?.title}</Card.Header>
          <Card.Meta>
            <span>{selectedActivity?.date}</span>
          </Card.Meta>
          <Card.Description>
          {selectedActivity?.description}
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          
          <Button.Group widths={2}>
            <Button basic color='blue' content="Edit" onClick={()=>setEditMode(true)} />
            <Button basic color='red' content="Cancel" onClick={()=>setSelectedActivity(null)}  />
          </Button.Group>

        </Card.Content>
      </Card>
      );
}
 
export default ActivityDetails;