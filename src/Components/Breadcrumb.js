import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';

export default function SimpleBreadcrumbs() {
  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/">
        Home
      </Link>
      <Typography color="textPrimary">Tickets</Typography>
    </Breadcrumbs>
  );
}
