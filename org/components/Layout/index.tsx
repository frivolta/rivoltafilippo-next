import Footer from 'components/Footer/Footer';
import Navbar from 'components/Navbar/Navbar';
import Newsletter from 'components/Newsletter/Newsletter';
import React from 'react';
import Sticky from 'react-stickynode';
import ScrollToTop from 'react-scroll-up';
import ScrollUpButton from 'components/ScrollUpButton/ScrollUpButton';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      <Sticky top={0} innerZ={9999} activeClass="nav-sticky">
        <Navbar />
      </Sticky>

      {children}

      <Newsletter />
      <Footer>
        Copyright &copy; {new Date().getFullYear()}
        <a href="https://www.rivoltafilippo.com/"> Filippo Rivolta.</a>
      </Footer>
      <ScrollToTop
        showUnder={300}
        duration={700}
        easing="easeInOutCubic"
        style={{ bottom: 30, right: 20 }}
      >
        <ScrollUpButton />
      </ScrollToTop>
    </>
  );
};

export default Layout;
