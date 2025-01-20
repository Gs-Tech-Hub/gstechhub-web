import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import PortfolioStyle2 from '../Portfolio/PortfolioStyle2';

export default function PortfolioSlider({ data }) {
  const portfolios = data && data.data ? data.data : [];
  if (!Array.isArray(portfolios) || portfolios.length === 0) {
      return <div>No testimonials available Now.</div>;
  }
  // const pagination = {
  //   clickable: true,
  //   renderBullet: function (index, className) {
  //     return `<span className="cs_primary_font cs_fs_29 cs_semibold ${className}">${
  //       index + 1
  //     }</span>`;
  //   },
  // };
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return `<span class="cs_primary_font cs_fs_29 cs_fs_29 ${className}">${
        index + 1
      }</span>`;
    },
  };
  return (
    <div className="position-relative">
      <div className="container">
        <Swiper
          pagination={pagination}
          speed={800}
          modules={[Pagination]}
          className="cs_number_pagination"
        >
            {portfolios.map((portfolio, index) => {
                  const {
                    miniTitle,
                    Title,
                    SubTitle,
                    urlSlug, } = portfolio.attributes;
                    const CoverPhoto = portfolio.attributes.CoverPhoto.data.attributes.url;
                    console.log(urlSlug);
                  return (
                    <SwiperSlide key={index}>
                      <PortfolioStyle2
                        coverPhoto={CoverPhoto}
                        title={Title}
                        miniTitle={miniTitle}
                        subTitle={SubTitle}
                        href={urlSlug}
                      />
                    </SwiperSlide>
                  );
                })}
        </Swiper>
      </div>
    </div>
  );
}
