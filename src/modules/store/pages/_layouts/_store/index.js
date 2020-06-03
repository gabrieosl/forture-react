import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/modules/store/components/Header';
import Footer from '~/modules/store/components/Footer';

import { Container, Content } from './styles';

export default function StoreLayout({ children }) {
  return (
    <Container>
      <Header />
      {/* <Content>{children}</Content> */}
      {/* <Footer /> */}
    </Container>
  );
}

StoreLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
