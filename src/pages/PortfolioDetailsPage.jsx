import React, { useEffect, useState } from 'react';
import Spacing from '../components/Spacing';
import SectionHeadingStyle3 from '../components/SectionHeading/SectionHeadingStyle3';
import { useParams } from 'react-router-dom';
import ApiHandler from '../api/api';
import { pageTitle } from '../helpers/PageTitle';

export default function PortfolioDetailsPage() {
  const { portfolioDetailsId } = useParams();
  const [portfolioData, setPortfolioData] = useState(null);
  const serviceApi = ApiHandler({
    baseUrl: 'https://gstechhub-api.onrender.com/api',
    localFallbackPath: '/data/portfolios.json'
  });

  useEffect(() => {
    const fetchPortfolioDetails = async () => {
      try {
        const response = await serviceApi.fetchData(`portfolios/${portfolioDetailsId}?populate=*`);
        setPortfolioData(response.data);
        pageTitle(response.data.attributes.Title);
      } catch (error) {
        console.error("Failed to fetch portfolio details:", error);
      }
    };

    if (portfolioDetailsId) {
      fetchPortfolioDetails();
    }
  }, [portfolioDetailsId]);

  if (!portfolioData) return <div>Loading Portfolio Details...</div>;

  const { Title, Client, Location, ProjectStatus, ClientInfo, PortfolioDetails, CoverPhoto } = portfolioData.attributes;

  return (
    <>
      <Spacing lg="70" md="70" />
      <Spacing lg="140" md="80" />
      <SectionHeadingStyle3 title={Title} subTitle="Portfolio Details" />
      <Spacing lg="75" md="60" />
      <div className="container">
        {CoverPhoto?.data?.url && (
          <img
            src={CoverPhoto.data.url}
            alt={Title}
            width={800}
            height={500}
          />
        )}
        <Spacing lg="100" md="40" />
        <div className="cs_portfolio_details_in">
          <ul className="cs_portfolio_details_info cs_mp0">
            <li><h3>Client:</h3><p>{Client}</p></li>
            <li><h3>Location:</h3><p>{Location}</p></li>
            <li><h3>Project Status:</h3><p>{ProjectStatus}</p></li>
            <li><h3>Client Info:</h3><p>{ClientInfo}</p></li>
          </ul>
        <div>

        {PortfolioDetails && PortfolioDetails.length > 0 ? (
  <>
    {PortfolioDetails.map(({ id, Heading, Description }) => {
      if (!Heading || !Description) return null; // Skip empty sections

      // Performance Metrics Table Handling
      if (Heading.includes("Performance Metrics")) {
        const lines = Description.split("\n").map(line => line.trim()).filter(line => line); // Clean up data

        console.log("Lines:", lines); // Log the lines for debugging

        // Extract headers dynamically by targeting lines with numbers (e.g., "1:", "2:")
        const headers = lines
          .filter(line => /^\d+:\s/.test(line)) // Filter lines that start with a number followed by a colon
          .map(line => line.trim().replace(/^\d+:\s*/, "")); // Trim values and remove numbering (1:, 2:, etc.)

        console.log("Headers:", headers); // Log the headers for debugging

        // Extract data rows dynamically, ensuring they are not empty
        const dataStartIndex = headers.length; // Start extracting data after headers
        const tableData = [];
        
        for (let i = dataStartIndex; i < lines.length; i += headers.length) {
            const row = [];
            for (let j = 0; j < headers.length; j++) {
                if (lines[i + j]) {
                    row.push(lines[i + j].trim());
                }
            }
            if (row.length === headers.length) {
                tableData.push(row); // Only add complete rows
            }
        }

        console.log("Table Data:", tableData); // Log the table data for debugging

        return (
          <section key={id}>
            <article className="grid" style={{ margin: "20px", padding: "15px" }}>
              <h3>{Heading}</h3>
              <table className="border-collapse border border-gray-300 w-full mt-4">
                <thead>
                  <tr className="bg-gray-200">
                    {headers.map((header, index) => (
                      <th key={index} className="border border-gray-300 px-4 py-2">{header}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, rowIndex) => (
                    <tr key={rowIndex} className="border border-gray-300">
                      {row.map((cell, cellIndex) => (
                        <td key={cellIndex} className="border border-gray-300 px-4 py-2">{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </article>
          </section>
        );
      }

      // Display descriptions as bullet points for other sections
      return (
        <section key={id}>
          <article className="grid" style={{ margin: "20px", padding: "15px" }}>
            <h3>{Heading}</h3>
            <p>
              {Description.split("\n").map((line, index) =>
                line.trim() ? <span key={index}>{line.trim()}<br /></span> : null
              )}
            </p>
          </article>
        </section>
      );
    })}
  </>
) : (
  <p>No portfolio details available.</p>
)}
 </div>
   </div>
    </div>
      <Spacing lg="150" md="80" />
    </>
  );
}
