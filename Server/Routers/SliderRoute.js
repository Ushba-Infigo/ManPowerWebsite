import express, { Router } from "express"
import {GetSliderData} from '../Controllers/SliderController.js'
import {GetClientsData} from '../Controllers/ClientsController.js'
import { GetAboutUsData } from '../Controllers/AboutUsController.js';
import { GetIndustriesandServices,GetIndustriesandServicesTabs } from '../Controllers/IndustriesServicesHeaderController.js';
import {GetPartnersData} from '../Controllers/PartnersController.js'
import {PerformanceCounterData} from '../Controllers/PerformanceindicatorsCounterController.js'
import {GetRecruitmentProcessData,GetRecruitmentRequirementsData} from '../Controllers/RecruitmentProcessController.js'
import {GetWorkProcessData,GetWorkProcessDetailData} from '../Controllers/WorkprocessController.js'
import {GetChooseUsData,GetChooseUsDetailData} from '../Controllers/ChooseUsController.js'
import {GetCostOptimizationData,GetPricingPlansData,GetExpertRequestsData} from '../Controllers/PricingPlanController.js'
import {GetConsultationBannerData} from '../Controllers/ConsultationBannerController.js'
import { GetClientsReviewsHeaderData ,GetClientsReviewsData} from "../Controllers/ReviewsController.js";
import { GetFAQsData} from "../Controllers/FAQsController.js";
import { GetInsightsData,GetInsightsDataById} from "../Controllers/InsightsController.js";
import { GetCompanyInfoData} from "../Controllers/CompanyInfoController.js";
import { GetMissionDetailData} from "../Controllers/AboutMissionController.js";
import { GetHistoryDetailData,GetHistoryData} from "../Controllers/HistoryController.js";
import { GetCoreHeadersData,GetCoreDetailData} from "../Controllers/CoreValuesController.js";
import { GetContactUsDetailData} from "../Controllers/ContactUsDetailController.js";
import { GetCompanyCaltureData,GetCompanyCaltureDetailData} from "../Controllers/CompanyCaltureController.js";
import { GetWorkEnvironmentsData} from "../Controllers/WorkEnvironmentController.js";
import { GetContactUsData} from "../Controllers/ContactUsController.js";
import { GetTelecommunicationData} from "../Controllers/TelecommunicationCotroller.js";
import { GetITData} from "../Controllers/ITController.js";
import { GetHealthCareData} from "../Controllers/HealthCareController.js";
import { GetEducationData} from "../Controllers/EducationController.js";
import { GetTechnologiesData} from "../Controllers/ITController.js";
import { GetOpeningHoursData} from "../Controllers/HealthCareController.js";
import { GetContactInfoData} from "../Controllers/ContactUsInfoController.js";
import { GetProfile,GetArticalInsightDetails,GetArticalAllInsights} from "../Controllers/ArticalInsightController.js";

const route=express.Router();
route.get('/GetSlider',GetSliderData);
route.get('/GetClients',GetClientsData);
route.get('/GetAboutUs',GetAboutUsData);
route.get('/IndustriesHeader',GetIndustriesandServices);
route.get('/IndustriesTabs',GetIndustriesandServicesTabs);
route.get('/GetPartners',GetPartnersData);
route.get('/GetPerformanceCounter',PerformanceCounterData);
route.get('/GetRecruitmentProcess',GetRecruitmentProcessData);
route.get('/GetRecruitmentRequirements',GetRecruitmentRequirementsData);
route.get('/GetWorkProcess',GetWorkProcessData);
route.get('/GetWorkProcessDetail',GetWorkProcessDetailData);
route.get('/GetChooseUs',GetChooseUsData);
route.get('/GetChooseUsDetail',GetChooseUsDetailData);
route.get('/GetCostOptimization',GetCostOptimizationData);
route.get('/GetPricingPlans',GetPricingPlansData);
route.get('/GetExpertRequests',GetExpertRequestsData);
route.get('/GetConsultationBanner',GetConsultationBannerData);
route.get('/GetClientsReviews',GetClientsReviewsHeaderData);
route.get('/GetClientsReviewsDetail',GetClientsReviewsData);
route.get('/GetFAQs',GetFAQsData);
route.get('/GetInsights',GetInsightsData);
route.get('/GetCompanyInfo',GetCompanyInfoData);
route.get('/GetCore',GetCoreHeadersData);
route.get('/GetCoreDetail',GetCoreDetailData);
route.get('/GetHistory',GetHistoryData);
route.get('/GetHistoryDetail',GetHistoryDetailData);
route.get('/GetMission',GetMissionDetailData);
route.get('/GetContactUsDetail',GetContactUsDetailData);
route.get('/GetCompanyCalture',GetCompanyCaltureData);
route.get('/GetWorkEnvironment',GetWorkEnvironmentsData);
route.get('/GetCompanyCaltureDetail',GetCompanyCaltureDetailData);
route.get('/GetContactUs',GetContactUsData);
route.get('/GetTelecommunication',GetTelecommunicationData);
route.get('/GetEducation',GetEducationData);
route.get('/GetHealthCare',GetHealthCareData);
route.get('/GetIT',GetITData);
route.get('/GetOpeningHours',GetOpeningHoursData);
route.get('/GetTechnologies',GetTechnologiesData);
route.get('/GetContactInfo',GetContactInfoData);
route.get('/GetArticalInsights',GetArticalAllInsights);
route.get('/GetArticalInsightDetails',GetArticalInsightDetails);
route.get('/GetProfile',GetProfile);
route.get('/GetInsightsDataById/:id',GetInsightsDataById);

export default route;