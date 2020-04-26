import React, { useContext, Fragment } from 'react'
import { Item, Label } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import ActivityStore from '../../../app/stores/activityStore';
import ActivityListItem from './ActivityList.Item';
      
 
const ActivityList: React.SFC = () => {

    
    const activityStore =useContext(ActivityStore);
    const {activitiesByDate } = activityStore;

    return ( 
      <Fragment>
        
        {activitiesByDate.map(([group,activities])=>(
             <Fragment key={group}>
               <Label size='large' color='purple'>
                  {group}
               </Label>
             
                <Item.Group divided>
                    {activities.map( activity=>(
                      <ActivityListItem key={activity.id}  activity={activity} />
                    ))}
              </Item.Group>
             </Fragment>
            ))}
      </Fragment>
      
     );
}
 
export default observer(ActivityList);