import * as React from 'react';
import { Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';


export interface HomePageProps {
    
}
 
const HomePage: React.SFC<HomePageProps> = () => {
    return ( 
        <Container style={{marginTop:'7em'}}>
            <h1>Home page</h1>
            <Link to='/activities'>Activities</Link>
        </Container>
     );
}
 
export default HomePage;