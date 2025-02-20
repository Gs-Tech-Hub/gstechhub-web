import React from "react";
import { useState, useEffect } from "react";
import ApiHandler from "../api/api";
import HeroStyle4 from "../components/Hero/HeroStyle4";
import Spacing from "../components/Spacing";
import SectionHeading from "../components/SectionHeading";
import PostGridCustom from "../components/PostGrid/postGridCustom";
import Brands from "../components/Brands";
import Cta from "../components/Cta";
import TestimonialSlider from "../components/Slider/TestimonialSlider";
import FunFact from "../components/FunFact";
import AboutStyle4 from "../components/About/AboutStyle4";
import AboutStyle5 from "../components/About/AboutStyle5";
import IconBoxStyle2 from "../components/IconBox/IconBoxStyle2";
import PortfolioSlider from "../components/Slider/PortfolioSlider";
import PricingTableList from "../components/PricingTable/PricingTableList";
import { pageTitle } from "../helpers/PageTitle";
import { brandList, brandListDark } from "../constants";
import IconBoxStyle4 from '../components/IconBox/IconboxStyle4';


export default function DigitalAgencyPage({ darkMode }) {
   pageTitle("Home");
   const serviceApi = ApiHandler({ 
     baseUrl: 'https://gstechhub-api.onrender.com/api',
     localFallbackPath: '/data/services.json'
   });
   const [funfactData, setFunfactData] = useState([]);
   const [postData, setPostData] = useState([]); 
   const [testimonialData, setTestimonialData] = useState([]);
   const [portfolioData, setPortfolioData] = useState([]);
   const [services, setServices] = useState([]);

   useEffect(() => {
      const fetchData = async () => {
         try {
            // Fetch local data
            const localData = await fetch("/data/HomeData.json").then((res) => res.json());
            setFunfactData(localData.funfactData);
            setPostData(localData.postData);
            setPortfolioData(localData.portfolioData || []); 

            // Fetch testimonials from API
            const testimonialResponse = await serviceApi.fetchData('testimonials');

            // Ensure we're working with an array and transform the data
            const testimonialItems = Array.isArray(testimonialResponse?.data) 
               ? testimonialResponse.data 
               : [];

            // Transform the testimonial data to match the expected format
            const formattedTestimonials = testimonialItems.map(item => ({
               text: item.attributes?.Description || '',
               avatarName: item.attributes?.Name || '',
               avatarDesignation: item.attributes?.CompanyPosition && item.attributes?.NameOfCompany
                  ? `${item.attributes.CompanyPosition} at ${item.attributes.NameOfCompany}`
                  : ''
            }));

            setTestimonialData(formattedTestimonials);

            const endpoint = 'services-overview?populate[service_categories][populate][services]=*';
            const servicesData = await serviceApi.fetchData(endpoint);
            
            // Extract the service categories array
            const serviceCategories = servicesData?.data?.attributes?.service_categories?.data || [];
            setServices(serviceCategories);
         } catch (error) {
            console.error("Failed to fetch data:", error);
            setServices([]);
            setTestimonialData([]); // Set empty array on error
         }
      };

      fetchData();
   }, []);

   return (
      <>
         <HeroStyle4
            title="Why Are You Still Running Your Business Like It's 2010?"
            subTitle="Your competitors are automating, growing, and running 24/7. Let's make sure your business does the same—with smarter systems designed for results."
            thumbnailSrc={darkMode ? "/images/digital-agency/hero_bg_dark.jpeg" : "/images/digital-agency/hero_bg.jpeg"}
            videoSrc="https://www.youtube.com/embed/VcaAVWtP48A?si=vndld55D7mte_-2P"
            bgUrl="/images/digital-agency/hero_vid_bg.png"
         />
         <div className="cs_primary_bg">
            <Spacing lg="125" md="80" />
            <div className="container">
               <FunFact data={funfactData} colorVariant="cs_color_1" />
            </div>
            <Spacing lg="125" md="80" />
         </div>
         <Spacing lg="150" md="80" />
         <AboutStyle4
            thumbnailSrc="/images/digital-agency/about_1.png"
            miniTitle="Company Info"
            title="We Build Smarter Systems for Nigerian Businesses"
            subTitle="GS Tech Hub specializes in helping businesses like yours scale faster, streamline operations through automation, and attract more customers with cutting-edge technology solutions. Our team is dedicated to understanding your unique challenges and providing tailored strategies that drive growth, enhance customer engagement and much more. GS Tech Hub is your trusted partner for success in the ever-evolving digital landscape."
            btnText="See Our Services"
            btnUrl="/service"
         />

         <Spacing lg="150" md="80" />
         <AboutStyle5
            thumbnailSrc="/images/digital-agency/about_2.png"
            videoSrc="/images/digital-agency/video.mp4"
            miniTitle="What We Do"
            title="Best value service provider agency"
            subTitle="We make specializing in strategic digital marketing, partners with aiming the world's leading brands. Breaking from the norm, we push boundaries and do merge imaginative thinking posible dolores."
            progressBarList={[
               { title: "Digital Marketing", percentage: "75" },
               { title: "Brand Strategy", percentage: "85" },
               { title: "Competitor Analysis", percentage: "95" },
            ]}
         />
         <Spacing lg="150" md="80" />
         <section className="cs_primary_bg">
            <Spacing lg="143" md="75" />
            <div className="container">
               <SectionHeading
                  title="Exceeding expectations <br /> Our service is our promise"
                  subTitle="Services"
                  variantColor="cs_white_color"
               />
               <Spacing lg="85" md="45" />
               <div className="row cs_gap_y_45">
                  {Array.isArray(services) ? services.map((service, index) => {
                     // Rotate through different default icons
                     const fallbackIcons = [
                        "/images/digital-agency/service_icon_1.svg",
                        "/images/digital-agency/service_icon_2.svg",
                        "/images/digital-agency/computer-monitor.svg",
                        "/images/digital-agency/service_icon_4.svg"
                     ];
                     const fallbackIcon = fallbackIcons[index % fallbackIcons.length];

                     return (
                        <div className="col-lg-4" key={service.id}>
                           <IconBoxStyle4
                              iconSrc={service.attributes.icon?.data?.attributes?.url || fallbackIcon}
                              title={service.attributes.title}
                              subTitle={service.attributes.description}
                              features={service.attributes.services?.data?.map(item => item.attributes.title) || []}
                              btnUrl={`/service/${service.id}`}
                              btnText="Learn More"
                           />
                        </div>
                     );
                  }) : (
                     <div>Loading services...</div>
                  )}
               </div>
            </div>
            <Spacing lg="143" md="75" />
         </section>
         <section>
            <Spacing lg="143" md="75" />
            <div className="container">
               <SectionHeading title="Some featured work" subTitle="Portfolio" />
               <Spacing lg="85" md="45" />
            </div>
            <PortfolioSlider data={portfolioData} />
            <Spacing lg="150" md="80" />
         </section>
         <section className="cs_gray_bg_2 cs_shape_animation_2">
            <div className="cs_shape_1 position-absolute">
               <svg width={57} height={41} viewBox="0 0 57 41" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                     opacity="0.5"
                     d="M55.1923 32.7347C52.209 37.0618 42.704 43.3879 40.3199 34.8097C39.0585 30.2359 42.6536 24.5172 43.1266 19.9687C43.8204 13.2821 39.973 5.41874 32.4359 6.05135C31.8886 6.10385 31.3452 6.19047 30.8086 6.31072C29.5308 4.21019 27.6918 2.5107 25.5002 1.40489C23.3085 0.299087 20.8519 -0.168816 18.4087 0.0542238C11.0797 0.743766 5.31489 7.39247 2.40097 13.6616C0.297443 17.9159 -0.0470809 22.831 1.44227 27.3386C2.02253 28.9897 4.52649 28.3381 4.07868 26.6111C2.33789 19.994 6.55742 12.4976 11.1238 7.99978C15.6903 3.50194 23.1517 2.572 26.8919 7.71511C22.3191 9.96086 18.2321 14.1614 15.6019 17.957C12.4483 22.5245 9.15598 31.3746 15.1794 35.2589C21.0135 39.0165 27.7181 36.5241 30.9852 30.8306C34.3217 24.9727 34.2461 16.9828 32.6377 10.6251C32.4379 9.84013 32.1764 9.07227 31.8556 8.32873C34.7948 7.65817 37.6078 8.80319 39.4747 11.7765C42.4517 16.502 40.9317 21.6009 39.5126 26.5289C38.1691 31.1785 36.6617 38.618 42.9185 40.5728C48.4057 42.2935 54.6246 38.6054 56.4853 33.2978C56.7691 32.507 55.6275 32.1085 55.1923 32.7347ZM27.8253 28.0345C26.6396 30.7231 24.5519 32.7537 21.5181 32.9751C16.3336 33.3547 15.3434 29.0909 16.4723 25.0739C18.1122 19.3298 23.2274 13.4845 28.1407 10.0684C28.1664 10.1199 28.1896 10.1727 28.2101 10.2266C30.2749 16.0071 30.1378 22.349 27.8253 28.0345Z"
                     fill="#4F4747"
                  />
               </svg>
            </div>
            <div className="cs_shape_2 position-absolute">
               <svg width={21} height={24} viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                     opacity="0.5"
                     d="M1.83883 0.992714L20.9086 13.6609L0.402728 23.8417L1.83883 0.992714Z"
                     fill="#4F4747"
                  />
               </svg>
            </div>
            <div className="cs_height_143 cs_height_lg_75" />
            <div className="container">
               <SectionHeading
                  title="Offering budget friendly pricing <br /> solutions for your business"
                  subTitle="Our Pricing"
               />
               <Spacing lg="85" md="45" />
            </div>
            <div className="container">
               <PricingTableList />
            </div>
            <div className="cs_height_150 cs_height_lg_80" />
         </section>
         <TestimonialSlider data={testimonialData} />
         <Cta
            title="Is there a specific project or goal <br/>that you have in mind?"
            btnText="Contact Us"
            btnUrl="/contact"
            bgUrl="/images/creative-agency/cta_bg.jpeg"
            variant="cs_type_1"
         />
         <section className="cs_shape_animation_3">
            <div className="cs_shape_1 position-absolute">
               <svg width={509} height={458} viewBox="0 0 509 458" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx={254} cy={229} r="228.5" stroke="currentColor" />
                  <circle cx={26} cy={237} r="25.5" className="anio_3_c_1" fill="white" stroke="currentColor" />
                  <circle cx={26} cy={237} r={15} fill="currentColor" />
                  <circle cx={483} cy={229} r="25.5" className="anio_3_c_1" fill="white" stroke="currentColor" />
                  <circle cx={483} cy={229} r={15} fill="currentColor" />
               </svg>
            </div>
            <Spacing lg="143" md="75" />
            <div className="container">
               <SectionHeading title="Some recent news" subTitle="Our Blog" />
               <Spacing lg="85" md="45" />
               <PostGridCustom data={postData} />
            </div>
         </section>
         <Spacing lg="135" md="70" />
         <Spacing lg="84" md="50" />
         <div className="container">
            <Brands data={darkMode ? brandListDark : brandList} />
         </div>
         <Spacing lg="135" md="80" />
      </>
   );
}
