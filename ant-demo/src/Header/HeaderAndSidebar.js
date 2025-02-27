import React, { useState } from 'react'
import { Layout, Menu, Card } from 'antd';

import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData'
import Slider from './Slider';

const { Sider } = Layout;

export const HeaderAndSidebar = ({ children }) => {
    console.log(children);
    const [state, setState] = useState(false)
    const onCollapse = () => setState(!state);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={state} onCollapse={() => { onCollapse() }}>
                <div className="logo" />

                <Menu theme="dark"  defaultSelectedKeys={['1']} mode="inline" >
                    {
                        SidebarData() && SidebarData().map((item, index) => {
                            return (
                                <>
                                    <Menu.Item key={index + 1} icon={item.icon} >
                                        <Link to={item.path} >
                                            <span>{item.title}</span>
                                        </Link>
                                    </Menu.Item>
                                </>
                            )
                        })
                    }
                </Menu>
            </Sider>
                    
            
            <Layout>
                <Navbar bg="light" >
                    <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#link">Link</Nav.Link>
                            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Form inline>
                            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                            <Button variant="outline-success">Search</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
                    <Slider />
                    {children}
            </Layout>
        </Layout>
    );
}

export default HeaderAndSidebar