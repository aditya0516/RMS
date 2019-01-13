import React from 'react';
import { Card, CardBody, Fa, Breadcrumb, BreadcrumbItem, FormInline, Button } from 'mdbreact';

const BreadcrumSection = () => {
  return (
    <Card className="mb-5">
        <CardBody id="breadcrumb" className="d-flex align-items-center justify-content-between">
            <Breadcrumb>
                <BreadcrumbItem>Home</BreadcrumbItem>
                <BreadcrumbItem active>Dashboard</BreadcrumbItem>
            </Breadcrumb>

        </CardBody>
    </Card>
  )
}

export default BreadcrumSection;

