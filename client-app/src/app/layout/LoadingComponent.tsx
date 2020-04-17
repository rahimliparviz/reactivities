import React from 'react'
import { Loader, Dimmer } from 'semantic-ui-react'

export interface LoadingCompanentProps {
    inverted?:boolean,
    content?:string
}
 
const LoadingCompanent: React.SFC<LoadingCompanentProps> = ({inverted = true,content}) => {
    return ( 
        <Dimmer active inverted={inverted}>
            <Loader content={content} />
        </Dimmer>
     );
}
 
export default LoadingCompanent;