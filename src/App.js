import { Routes, Route } from 'react-router-dom';
import React, { useState, useEffect, createContext } from 'react';
import { io } from 'socket.io-client';
import './App.css';
import DefaultLayout from './DefaultLayout';
import SidebarLayout from './SidebarLayout';
import GetSlider from './GetSliders/GetSlider';
import TopBar from './TopBar/TopBar';
import GetClient from './GetClients/GetClient';
import GetAboutUs from './GetAboutUs/GetAboutUs';
import IndustriesServicesHeaders from './IndustriesServices/IndustriesServicesHeaders';
import GetPartner from './Partners/GetPartners';
import GetPerformanceCounter from './GetPerformanceIndicatorsCounter/GetPerformanceCounter';
import RecruitmentProcess from './RecruitmentProcess/RecruitmentProcess';
import GetWorkProcessData from './WorkProcess/GetWorkProcess';
import GetChooseUsData from './ChooseUs/GetChooseUs';
import GetPricingPlanData from './PricingPlan/GetPricingPlan';
import GetConsultationBannerData from './ConsultationBanner/GetConsultationBanner';
import GetReviewAllData from './Reviews/GetReviews';
import GetFAQsData from './FAQs/GetFAQs';
import GetInsightsData from './Insights/GetInsights';
import GetCompanyInfoAllData from './CompanyInfo/GetCompanyInfo';
import GetAboutUsDetailData from './GetAboutUs/AboutUsDetail';
import GetPricingDetails from './PricingPlan/GetPricingDetail';
import GetInsightsDetailsData from './Insights/GetInsightsDetails';
import GetContactUsDetailData from './ContactUs/GetContactUsDetail';
import GetCalture from './CompanyCalture/GetCompanyCalture';
import GetCompanyCatureHeadersData from './CompanyCalture/GetCompanyCaltureHeaders';
import GetCaltureTop from './CompanyCalture/CompanyCaltureTop';
import GetWorkEnvironmentData from './WorkEnvironment/GetWorkEnvironment';
import GetCompanyCaltureDetailData from './CompanyCalture/CompanyCaltureDetail';
import GetContactUsData from './ContactUs/GetContactUs';
import GetITData from './Industries/IT';
import GetEducationData from './Industries/Education';
import GetTeleData from './Industries/Tele';
import GetHealthCareData from './Industries/HealthCare';
import BottomToTop from './TopBar/BottomToTop';
import Banner from './TopBar/Banner';
import GetArticalInsightsData from './Insights/GetArticalInsights';
import Sidebar from './CMS/Sidebar';
import GetIndustryData from "./IndustriesServices/Industriesdetail";
import ConsultationList from "./ContactUs/GetConsultation";
import { CountryProvider } from './CountryContext';

export const RefreshContext = createContext(0);

function App() {
  const [refreshKey, setRefreshKey] = useState(0);

  useEffect(() => {
    const socket = io("http://localhost:8001");
    socket.on("contentUpdated", () => {
      console.log("Database updated! Triggering re-render for all components...");
      setRefreshKey(prev => prev + 1);
    });
    return () => socket.disconnect();
  }, []);

  return (
     <CountryProvider>
    <RefreshContext.Provider value={refreshKey}>
      <div className="App">
        {/* <TopBar /> */}

        <Routes>
          {/* Sidebar-only page */}
          <Route path="/Sidebar" element={
            <SidebarLayout>
              <Sidebar />
            </SidebarLayout>

          } />

          {/* Home page */}
          <Route path="/" element={
            <DefaultLayout>
              <>
                <GetSlider />
                <GetClient />
                <GetAboutUs />
                <IndustriesServicesHeaders />
                <GetPartner />
                <GetPerformanceCounter />
                <RecruitmentProcess />
                <GetWorkProcessData />
                <GetChooseUsData />
                <GetPricingPlanData />
                <GetConsultationBannerData />
                <GetReviewAllData />
                <GetFAQsData />
                <GetInsightsData />
              </></DefaultLayout>
          } />
          {/* About Us Detail page */}
          <Route path="/AboutUsDetail" element={
            <DefaultLayout>
              <>
                <GetAboutUsDetailData />
                <GetContactUsDetailData />
              </> </DefaultLayout>

          } />
          <Route path="/GetPricingDetail" element={
            <DefaultLayout>
              <>
                <GetPricingDetails />
                <GetPricingPlanData />
                <GetReviewAllData />
                <GetFAQsData />
                <GetConsultationBannerData />
              </></DefaultLayout>
          } />
          <Route path="/GetInsightsDetails" element={
            <DefaultLayout>
              <GetInsightsDetailsData /></DefaultLayout>
          } />
          <Route path="/GetCompanyCalture" element={
            <DefaultLayout>
              <GetCaltureTop />
              <GetCompanyCatureHeadersData />
              <GetCalture />
              <GetWorkEnvironmentData />
              <GetCompanyCaltureDetailData />
            </DefaultLayout>

          } />
          <Route path="/GetContactUs" element={
            <DefaultLayout>
              <GetContactUsData />
              <GetContactUsDetailData />
            </DefaultLayout>

          } />
          <Route path="/GetConsultation" element={
            <DefaultLayout>
              <ConsultationList />
            </DefaultLayout>

          } />
          <Route path="/GetIndustrydetailByName/:industryName" element={
            <DefaultLayout>
              {/* <Banner /> */}
              <GetIndustryData />
            </DefaultLayout>
          } />
          {/* <Route path="/IT" element={
          <DefaultLayout>
             <GetITData />
            </DefaultLayout>
         
          }
          />
            <Route path="/Education" element={
            <DefaultLayout>
            <GetEducationData/>          
            </DefaultLayout>
          }
          />  
            <Route path="/Tele" element={
            <DefaultLayout>
            <GetTeleData />      
            </DefaultLayout>
         
          }/>
            <Route path="/HealthCare" element={
            <DefaultLayout>
            <GetHealthCareData />      
            </DefaultLayout>
          }/>  */}
          <Route path="/GetFAQs" element={
            <DefaultLayout>
              <Banner />
              <GetFAQsData />
            </DefaultLayout>

          } />
          <Route path="/IndustriesServicesHeaders" element={
            <DefaultLayout>
              <Banner />
              <IndustriesServicesHeaders />
            </DefaultLayout>
          } />
          <Route path="/GetArticalInsights/:index/:userId" element={
            <DefaultLayout>
              <Banner />
              <GetArticalInsightsData />
            </DefaultLayout>
          } />
          {/* Add more routes here as needed */}
        </Routes>
        {/* <BottomToTop />
      <GetCompanyInfoAllData /> */}
      </div>
    </RefreshContext.Provider>
</CountryProvider>
  );
}

export default App;
