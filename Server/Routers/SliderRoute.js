import express, { Router } from "express"
import {GetSliderData} from '../Controllers/SliderController.js'
import {GetClientsData} from '../Controllers/ClientsController.js'
import { GetAboutUsData } from '../Controllers/AboutUsController.js';
import { GetIndustriesandServices} from '../Controllers/IndustriesServicesHeaderController.js';
import {GetPartnersData} from '../Controllers/PartnersController.js'
import {PerformanceCounterData} from '../Controllers/PerformanceindicatorsCounterController.js'
import {GetRecruitmentProcessData,GetRecruitmentRequirementsData} from '../Controllers/RecruitmentProcessController.js'
import {GetWorkProcessData} from '../Controllers/WorkprocessController.js'
import {GetChooseUsData} from '../Controllers/ChooseUsController.js'
import {GetCostOptimizationData} from '../Controllers/PricingPlanController.js'
import {GetConsultationBannerData} from '../Controllers/ConsultationBannerController.js'
import { GetClientsReviewsHeaderData ,GetClientsReviewsData} from "../Controllers/ReviewsController.js";
import { GetFAQsData} from "../Controllers/FAQsController.js";
import { GetInsightsData,GetInsightsDataById} from "../Controllers/InsightsController.js";
import { GetCompanyInfoData} from "../Controllers/CompanyInfoController.js";
import { GetMissionDetailData} from "../Controllers/AboutMissionController.js";
import { GetHistoryData} from "../Controllers/HistoryController.js";
import { GetCoreData} from "../Controllers/CoreValuesController.js";
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
import { getIndustryByName} from "../Controllers/IndustriesDetailController.js";
import { GetProfile,GetArticalInsightDetails,GetArticalAllInsights} from "../Controllers/ArticalInsightController.js";
import { GetUserDatabyID,GetUserData} from "../Controllers/UserController.js";

const route=express.Router();
route.get('/GetSlider',GetSliderData);
route.get('/GetClients',GetClientsData);
route.get('/GetAboutUs',GetAboutUsData);
route.get('/IndustriesHeader',GetIndustriesandServices);
route.get('/GetPartners',GetPartnersData);
route.get('/GetPerformanceCounter',PerformanceCounterData);
route.get('/GetRecruitmentProcess',GetRecruitmentProcessData);
route.get('/GetRecruitmentRequirements',GetRecruitmentRequirementsData);
route.get('/GetHowItWorks',GetWorkProcessData);
route.get('/GetChooseUs',GetChooseUsData);
route.get('/GetPricingPlans',GetCostOptimizationData);
route.get('/GetConsultationBanner',GetConsultationBannerData);
route.get('/GetClientsReviews',GetClientsReviewsHeaderData);
route.get('/GetClientsReviewsDetail',GetClientsReviewsData);
route.get('/GetFAQs',GetFAQsData);
route.get('/GetInsights',GetInsightsData);
route.get('/GetCompanyInfo',GetCompanyInfoData);
route.get('/GetCore',GetCoreData);
route.get('/GetHistory',GetHistoryData);
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
route.get('/GetIndustrydetailByName/:industryName',getIndustryByName);
route.get('/GetUser/:id',GetUserDatabyID);
route.get('/GetUser',GetUserData);

export default route;