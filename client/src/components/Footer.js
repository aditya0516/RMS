import React from 'react';
import { MDBFooter, Fa } from 'mdbreact';

const Footer = () => {
    return (
        <MDBFooter color="blue" className="text-center font-small darken-2">

            <div className="pb-4">
                <Fa icon="facebook" className="mr-3"/>
                <Fa icon="twitter" className="mr-3"/>
                <Fa icon="youtube" className="mr-3"/>
                <Fa icon="google-plus" className="mr-3"/>
                <Fa icon="dribbble" className="mr-3"/>
                <Fa icon="pinterest" className="mr-3"/>
                <Fa icon="github" className="mr-3"/>
                <Fa icon="codepen" className="mr-3"/>
            </div>

        </MDBFooter>
    );
}

export default Footer;