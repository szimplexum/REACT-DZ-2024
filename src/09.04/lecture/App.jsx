import React from 'react';
import InlineStyling from './components/InlineStyling';
import CssFile from './components/CssFile';
import OtherComponent from './components/OtherComponent';
import CssModule from './components/CssModule';
import Bootstrap from './components/Bootstrap';
import CardDesign from './components/CardDesign';

export default function App() {
  return (
    <div>
      <InlineStyling />
      <CssFile />
      <OtherComponent />
      <CssModule />
      <Bootstrap />
      <CardDesign />
    </div>
  );
}
