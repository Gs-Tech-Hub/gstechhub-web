import React, { useEffect, useState } from 'react';
import ApiHandler from '../api/api';
import Spacing from '../components/Spacing';
import SectionHeadingStyle3 from '../components/SectionHeading/SectionHeadingStyle3';
import Portfolio from '../components/Portfolio';
import CtaStyle2 from '../components/Cta/CtaStyle2';
import { pageTitle } from '../helpers/PageTitle';

export default function PortfolioPage() {
  const [portfolioData, setPortfolioData] = useState([]);
  const serviceApi = ApiHandler({
    baseUrl: 'https://gstechhub-api.onrender.com/api',
    localFallbackPath: '/data/portfolios.json'
  });

  useEffect(() => {
    const fetchPortfolios = async () => {
      try {
        const portfoliosResponse = await serviceApi.fetchData('portfolios');
        const portfolios = portfoliosResponse.data;

        const filteredPortfolios = portfolios.map(({ id, attributes: { Title, urlSlug } }) => ({
          id,
          title: Title,
          imgUrl: urlSlug
        }));

        setPortfolioData(filteredPortfolios);
        console.log("Fetched portfolio data:", filteredPortfolios);
      } catch (error) {
        console.error("Failed to fetch portfolio data:", error);
      }
    };

    fetchPortfolios();
    pageTitle('Portfolio');
  }, []);

  return (
    <>
      <Spacing lg="70" md="70" />
      <Spacing lg="140" md="80" />
      <SectionHeadingStyle3
        title="We have completed a series of noteworthy projects"
        subTitle="Our Portfolio"
        shape="shape_3"
      />
      <Spacing lg="75" md="60" />
      <div className="container">
        <Portfolio data={portfolioData} />
        <div className="cs_height_75 cs_height_lg_40" />
        <CtaStyle2
          title="Is there a specific project or goal <br />that you have in mind?"
          btnText="Send Message"
          btnUrl="/contact"
        />
        <div className="cs_height_150 cs_height_lg_80" />
      </div>
    </>
  );
} 