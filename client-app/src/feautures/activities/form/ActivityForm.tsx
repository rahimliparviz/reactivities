import React, { useState, ChangeEvent, FormEvent, useEffect } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react';
import { IActivity } from '../../../app/models/activity';
import {v4 as uuid} from 'uuid';
export interface ActivityFormProps {
    setEditMode: (editMode:boolean) => void;
    activity:IActivity | null;
    createActivity:(activity:IActivity)=>void;
    editActivity:(activity:IActivity)=>void;
    submitting: boolean;

}
 
const ActivityForm: React.SFC<ActivityFormProps> = 
({setEditMode,createActivity,editActivity,submitting
    activity:initialActivity}) => {

        // useEffect(() => {


        //     if(!initialActivity){
        //         setActivity({
        //             id:'',
        //             title:'',
        //             category:'',
        //             description:'',
        //             date:'',
        //             city:'',
        //             venue:''
        //         })
        //     }

           

        // },[initialActivity])

    const initialiseForm = ()=>{
        if (initialActivity) {
            return initialActivity;
        }else{
            return {
                id:'',
                title:'',
                category:'',
                description:'',
                date:'',
                city:'',
                venue:''
            }
        }
    }

  

    const [activity, setActivity] = useState<IActivity>(initialiseForm)

    const handleInputChange = (event:FormEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
        setActivity({...activity,[event.currentTarget.name]:event.currentTarget.value})
    }

    const handleSubmit = ()=>{
        if(activity.id.length === 0){
            let newActivity = {
                ...activity,
                id:uuid()
            }
            createActivity(newActivity);
        }else{
            editActivity(activity)
        }
    }

    return ( 
        <Segment clearing>
            <Form onSubmit={handleSubmit}>
                <Form.Input onChange={handleInputChange} name='title' placeholder='Title' value={activity.title} />
                <Form.TextArea onChange={handleInputChange} name='description' rows={2} placeholder='Description' value={activity.description} />
                <Form.Input onChange={handleInputChange} name='category' placeholder='Category' value={activity.category} />
                <Form.Input onChange={handleInputChange} name='date' type="datetime-local" placeholder='Date' value={activity.date} />
                <Form.Input onChange={handleInputChange} name='city' placeholder='City' value={activity.city} />
                <Form.Input onChange={handleInputChange} name='venue' placeholder='Venue' value={activity.venue}/>

                <Button loading={submitting} floated='right' positive type='submit' content='Submit' />
                <Button onClick={()=>setEditMode(false)} floated='right'  type='button' content='Cancel' />
            </Form>
        </Segment>
     );
}
 
export default ActivityForm;