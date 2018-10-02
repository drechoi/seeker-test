import React from 'react';
import { Header, Container } from 'semantic-ui-react';

export default () => (
    <Container>
        <Header>This is Demo App</Header>
        
        1. You may login using the login button<br/>
        2. You may find see random generated data my input stock code on search box<br/>
        (Please use search button - if you press "Enter", nothing will happen)<br/>
        3. Please make sure the server is running<br/>
    </Container>
);