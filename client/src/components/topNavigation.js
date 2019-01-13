import React, { Component } from 'react';
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink } from 'mdbreact';

class TopNavigation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collapse: false,
        };
    this.onClick = this.onClick.bind(this);
    this.toggle = this.toggle.bind(this);
    }

    onClick(){
        this.setState({
            collapse: !this.state.collapse,
        });
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <Navbar className="flexible-navbar" light expand="md" scrolling>
                <NavbarBrand href="/">
                    <strong>RMS</strong>
                </NavbarBrand>
                <NavbarToggler onClick = { this.onClick } />
                <Collapse isOpen = { this.state.collapse } navbar>
                    <NavbarNav left>
                        <NavItem active>
                            <NavLink to="#">Home</NavLink>
                        </NavItem>

                    </NavbarNav>

                </Collapse>
            </Navbar>
        );
    }
}

export default TopNavigation;