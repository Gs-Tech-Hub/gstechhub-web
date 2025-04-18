import React, { useState, useEffect } from 'react';
import Spacing from '../components/Spacing';
import SectionHeadingStyle3 from '../components/SectionHeading/SectionHeadingStyle3';
import ServiceStyle2 from '../components/Service/ServiceStyle2';
import SectionHeading from '../components/SectionHeading';
import PricingTableList from '../components/PricingTable/PricingTableList';
import CtaStyle2 from '../components/Cta/CtaStyle2';
import { pageTitle } from '../helpers/PageTitle';
import ApiHandler from '../api/api';

export default function ServicePage() {
  const [services, setServices] = useState([]);
  const serviceApi = ApiHandler({
    baseUrl: 'https://gstechhub-api.onrender.com/api',
    localFallbackPath: '/data/services.json'
  });

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const endpoint = 'services-overview?populate[service_categories][populate][services]=*';
        const servicesData = await serviceApi.fetchData(endpoint);
        
        // Transform the API data to match ServiceStyle2's expected format
        const transformedServices = servicesData?.data?.attributes?.service_categories?.data?.map((category, index) => {
          // Rotate through different default icons
          const fallbackIcons = [
            "/images/digital-agency/digitalService2.png",
            "/images/digital-agency/digitalService3.png",
            "/images/digital-agency/digitalService4.png"
          ];
          const fallbackIcon = fallbackIcons[index % fallbackIcons.length];

          return {
            number: `0${index + 1}`,
            title: category.attributes.title,
            subTitle: category.attributes.description,
            thumbnailSrc: category.attributes.thumbnail?.data?.attributes?.url || fallbackIcon,
            href: `/service/${category.id}`
          };
        }) || [];

        setServices(transformedServices);
      } catch (error) {
        console.error("Failed to fetch services:", error);
        setServices([]);
      }
    };

    fetchServices();
  }, []);

  pageTitle('Service');
  
  return (
    <>
      <Spacing lg="70" md="70" />
      <Spacing lg="140" md="80" />
      <SectionHeadingStyle3
        title="GS Tech Hub offers solutions that drive growth and save time."
        subTitle="Our Services"
        shape="shape_2"
      />
      <Spacing lg="75" md="60" />
      <div className="container">
        <ServiceStyle2 data={services} />
      </div>
      <Spacing lg="150" md="80" />
      <section className="cs_gray_bg_2 cs_shape_animation_2">
        <div className="cs_shape_1 position-absolute">
          <svg
            width={57}
            height={41}
            viewBox="0 0 57 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M55.1923 32.7347C52.209 37.0618 42.704 43.3879 40.3199 34.8097C39.0585 30.2359 42.6536 24.5172 43.1266 19.9687C43.8204 13.2821 39.973 5.41874 32.4359 6.05135C31.8886 6.10385 31.3452 6.19047 30.8086 6.31072C29.5308 4.21019 27.6918 2.5107 25.5002 1.40489C23.3085 0.299087 20.8519 -0.168816 18.4087 0.0542238C11.0797 0.743766 5.31489 7.39247 2.40097 13.6616C0.297443 17.9159 -0.0470809 22.831 1.44227 27.3386C2.02253 28.9897 4.52649 28.3381 4.07868 26.6111C2.33789 19.994 6.55742 12.4976 11.1238 7.99978C15.6903 3.50194 23.1517 2.572 26.8919 7.71511C22.3191 9.96086 18.2321 14.1614 15.6019 17.957C12.4483 22.5245 9.15598 31.3746 15.1794 35.2589C21.0135 39.0165 27.7181 36.5241 30.9852 30.8306C34.3217 24.9727 34.2461 16.9828 32.6377 10.6251C32.4379 9.84013 32.1764 9.07227 31.8556 8.32873C34.7948 7.65817 37.6078 8.80319 39.4747 11.7765C42.4517 16.502 40.9317 21.6009 39.5126 26.5289C38.1691 31.1785 36.6617 38.618 42.9185 40.5728C48.4057 42.2935 54.6246 38.6054 56.4853 33.2978C56.7691 32.507 55.6275 32.1085 55.1923 32.7347ZM27.8253 28.0345C26.6396 30.7231 24.5519 32.7537 21.5181 32.9751C16.3336 33.3547 15.3434 29.0909 16.4723 25.0739C18.1122 19.3298 23.2274 13.4845 28.1407 10.0684C28.1664 10.1199 28.1896 10.1727 28.2101 10.2266C30.2749 16.0071 30.1378 22.349 27.8253 28.0345Z"
              fill="#4F4747"
            />
          </svg>
        </div>
        <div className="cs_shape_2 position-absolute">
          <svg
            width={21}
            height={24}
            viewBox="0 0 21 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
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
      <div className="cs_height_140 cs_height_lg_70" />
      <CtaStyle2
        title="Is there a specific project or goal <br />that you have in mind?"
        btnText="Send Message"
        btnUrl="/contact"
      />
      <div className="cs_height_150 cs_height_lg_80" />
    </>
  );
}
