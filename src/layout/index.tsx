import React from 'react';
import { Wrapper, Header, Contents, Footer } from '@/layout/index.style';

interface Props {
  header: JSX.Element[] | JSX.Element;
  children: JSX.Element[] | JSX.Element;
  footer?: JSX.Element[] | JSX.Element | null;
}

function Layout({ header, children, footer = null, ...props }: Props) {
  return (
    <Wrapper {...props}>
      <Header>{header}</Header>
      <Contents>{children}</Contents>
      <Footer>{footer}</Footer>
    </Wrapper>
  );
}

export default Layout;
