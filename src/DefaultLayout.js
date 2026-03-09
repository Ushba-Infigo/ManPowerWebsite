import React from "react";
import TopBar from './TopBar/TopBar';
import GetCompanyInfoAllData from './CompanyInfo/GetCompanyInfo';
import BottomToTop from './TopBar/BottomToTop';
const DefaultLayout = ({ children }) => (
  <div className="default-layout">
    <TopBar />
    <div className="page-content">
      {children}
    </div>
    <BottomToTop />
    <GetCompanyInfoAllData />
  </div>
);


export default DefaultLayout;
