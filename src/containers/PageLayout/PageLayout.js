import { Container } from '@material-ui/core';
import { element } from 'prop-types';
import Content from '../../components/Content/Content';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';

const PageLayout = ({ children }) => (
  <Container maxWidth='lg'>
    <Header />
    <Content>{children}</Content>
    <Footer />
  </Container>
);

PageLayout.propTypes = { children: element };

export default PageLayout;
