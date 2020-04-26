import React from 'react'
import { Loader, Dimmer } from 'semantic-ui-react'

export interface LoadingComponentProps {
    inverted?:boolean,
    content?:string
}
 
const LoadingComponent: React.SFC<LoadingComponentProps> = ({inverted = true,content}) => {
    return ( 
        <Dimmer active inverted={inverted}>
            <Loader content={content} />
        </Dimmer>
     );
}
 
export default LoadingComponent;