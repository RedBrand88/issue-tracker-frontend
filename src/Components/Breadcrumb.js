import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

export default function SimpleBreadcrumbs() {
  return (
    <Breadcrumbs aria-label='breadcrumb' color='white' >
      <Link href='/' style={{ color: 'white' }}>
        Home
      </Link>
      <Link href='/view-tickets' style={{ color: 'white' }}>Tickets</Link>
    </Breadcrumbs>
  );
}
