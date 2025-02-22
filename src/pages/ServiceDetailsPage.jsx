import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Spacing from '../components/Spacing';
import SectionHeadingStyle3 from '../components/SectionHeading/SectionHeadingStyle3';
import CtaStyle2 from '../components/Cta/CtaStyle2';
import PricingTableList from '../components/PricingTable/PricingTableList';
import SectionHeading from '../components/SectionHeading';
import AboutStyle6 from '../components/About/AboutStyle6';
import CardStyle3 from '../components/Card/CardStyle3';
import { pageTitle } from '../helpers/PageTitle';
import ApiHandler from '../api/api';

export default function ServiceDetailsPage() {
  const { serviceDetailsId } = useParams();
  const [serviceData, setServiceData] = useState(null);
  const [loading, setLoading] = useState(true);

  const serviceApi = ApiHandler({
    baseUrl: 'https://gstechhub-api.onrender.com/api',
    localFallbackPath: '/data/services.json'
  });

  useEffect(() => {
    const fetchServiceDetails = async () => {
      try {
        const endpoint = `service-categories/${serviceDetailsId}?populate=*`;
        console.log('Calling API endpoint:', endpoint);
        const response = await serviceApi.fetchData(endpoint);
        // Structured logging for better debugging
        console.log({
          serviceCategory: response.data,
          serviceItems: response.data.attributes.service_items.data[0].attributes,
          features: response.data.attributes.service_items.data[0].attributes.features,
          pricing: response.data.attributes.service_items.data[0].attributes.pricing
        });
        setServiceData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching service details:', error);
        setLoading(false);
      }
    };

    if (serviceDetailsId) {
      fetchServiceDetails();
    }
  }, [serviceDetailsId]);

  if (loading) return <div>Loading Service Details...</div>;
  if (!serviceData) return <div>Service not found</div>;

  const serviceItems = serviceData.attributes.service_items.data[0].attributes;
  const features = serviceItems.features.services;

  const imageMapping = {
    '1': '/images/others/serviceDetails_digital_marketing1.png',
    '2': '/images/others/serviceDetails_enterprise_management1.png',
    '3': '/images/others/serviceDetails_hardware1.png',
  };

  const aboutThumbnailMapping = {
    '1': '/images/others/serviceDetails_digital_marketing2.png',
    '2': '/images/others/serviceDetails_enterprise_management2.png',
    '3': '/images/others/serviceDetails_hardware2.png',
  };

  const backgroundImage = imageMapping[serviceDetailsId] || '/images/others/default_image.png'; // Fallback image
  const aboutThumbnail = aboutThumbnailMapping[serviceDetailsId] || '/images/others/default_about_image.png'; // Fallback image for AboutStyle6

  pageTitle('Service Details');
  
  return (
    <>
      <Spacing lg="70" md="70" />
      <Spacing lg="140" md="80" />
      <SectionHeadingStyle3
        title={serviceData.attributes.title}
        subTitle="Service Details"
        shape="shape_3"
      />
      <Spacing lg="75" md="60" />
      <div className="cs_service_info">
        <div className="container">
          <div className="row align-items-center cs_gap_y_40">
            <div className="col-lg-6">
              <div
                className="cs_service_info_thumb cs_bg_filed"
                style={{
                  backgroundImage: `url("${backgroundImage}")`,
                }}
              />
            </div>
            <div className="col-lg-6">
              <div className="row cs_gap_y_40">
                {features.slice(0, 4).map((feature, index) => (
                  <div className="col-sm-6" key={index}>
                    <CardStyle3
                      number={`0${index + 1}`}
                      title={feature.name}
                      subTitle={feature.description}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Spacing lg="150" md="80" />
      <AboutStyle6
        thumbnailSrc={aboutThumbnail}
        title="What you will get from this service?"
        subTitle={serviceData.attributes.description}
        featureList={features.map(feature => feature.name)}
        btnText="Check Live Projects"
        btnUrl="/portfolio"
      />
      <Spacing lg="150" md="80" />
      <section className="cs_gray_bg_2 cs_shape_animation_2">
        <div className="container">
          <SectionHeading
            title="Offering budget friendly pricing <br /> solutions for your business"
            subTitle="Our Pricing"
          />
          <Spacing lg="85" md="45" />
          <PricingTableList 
            pricing={serviceItems.pricing}
            commission={serviceItems.commission}
            features={features}
          />
        </div>
      </section>
      <Spacing lg="140" md="70" />
      <CtaStyle2
        title="Is there a specific project or goal <br />that you have in mind?"
        btnText="Send Message"
        btnUrl="/contact"
      />
      <Spacing lg="150" md="80" />
    </>
  );
}
