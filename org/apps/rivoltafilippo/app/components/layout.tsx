'use client';
import React from 'react';
import Sticky from 'react-stickynode';
import ScrollToTop from 'react-scroll-up';
import Navbar from './Navbar/Navbar';
import Newsletter from './Newsletter/Newsletter';
import Footer from './Footer/Footer';
import ScrollUpButton from './ScrollUpButton/ScrollUpButton';

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
