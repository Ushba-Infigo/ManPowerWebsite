import { Routes, Route } from 'react-router-dom';
import './App.css';
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
import { GetPricingPlanData } from './PricingPlan/GetPricingPlan';
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

function App() {
  return (
    <div className="App">
      <TopBar />

      <Routes>
 {/* Sidebar-only page */}
      {/* <Route path="/Sidebar" element={<Sidebar/>} /> */}

        {/* Home page */}
        <Route path="/" element={
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
          </>
        } />
        {/* About Us Detail page */}
        <Route path="/AboutUsDetail" element={
          <>
          <GetAboutUsDetailData/>
          <GetContactUsDetailData/>
          </> 
          
          } />
        <Route path="/GetPricingDetail" element={
          <>
          <GetPricingDetails />
          <GetPricingPlanData />
          <GetReviewAllData />
          <GetFAQsData />
          <GetConsultationBannerData />
          </>
          } />
        <Route path="/GetInsightsDetails" element={
          <GetInsightsDetailsData />
          } />
        <Route path="/GetCompanyCalture" element={
          <>
            <GetCaltureTop />
           <GetCompanyCatureHeadersData/>
            <GetCalture />
            <GetWorkEnvironmentData/>
            <GetCompanyCaltureDetailData/>
          </>
        
          } />
          <Route path="/GetContactUs" element={
            <>
             <GetContactUsData />
          <GetContactUsDetailData />
            </>
         
          } />
        <Route path="/IT" element={
            <>
             <GetITData />
            </>
         
          }
          />
            <Route path="/Education" element={
            <>
            <GetEducationData/>          
            </>
          }
          />  
            <Route path="/Tele" element={
            <>
            <GetTeleData />      
            </>
         
          }/>
            <Route path="/HealthCare" element={
            <>
            <GetHealthCareData />      
            </>
          }/> 
            <Route path="/GetFAQs" element={
            <>
            <Banner/>
            <GetFAQsData />      
            </>
         
          }/>
            <Route path="/IndustriesServicesHeaders" element={
            <>
            <Banner/>
            <IndustriesServicesHeaders />      
            </>
          }/>
           <Route path="/GetArticalInsights/:id" element={
            <>
            <Banner/>
            <GetArticalInsightsData />      
            </>
          }/>
        {/* Add more routes here as needed */}
      </Routes>
      <BottomToTop />
      <GetCompanyInfoAllData />
    </div>
  );
}

export default App;
