import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Header';

import { Container } from './styles';

export default function AdminLayout({ children }) {
  return (
    <Container>
      <Header />
      {children}
    </Container>
  );
}

AdminLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
