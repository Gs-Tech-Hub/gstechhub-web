import React from 'react';
import { useState } from 'react';
import PricingTable from '.';

export default function PricingTableList() {
  const [tab, setTab] = useState('yearly');
  return (
    <div className="cs_tabs cs_style1">
     {/* <ul className="cs_tab_links cs_style1 cs_mp0 cs_pricing_control">
        <li
          className={tab === 'monthly' ? 'active' : ''}
          onClick={() => setTab('monthly')}
        >
          <span>Monthly</span>
          <span className="cs_switch"></span>
        </li>
        <li
          className={tab === 'yearly' ? 'active' : ''}
          onClick={() => setTab('yearly')}
        >
          <span>Yearly</span>
        </li>
      </ul> */}
      <div className="row cs_gap_y_30 mx-auto">
        <div className="col-lg-5">
        {/*   {tab === 'monthly' && (
            <PricingTable
              title="Silver"
              subTitle="Control your choices for effective business growth and more customers."
              price="399"
              currency="$"
              timeline="monthly"
              features={[
                'Limited content',
                'Ad campaign',
                'Branding consultancy',
                'Video ad banner',
              ]}
              btnText="Choose Packedge"
              btnLink="/"
            />
          )} */}
          {tab === 'yearly' && (
            <PricingTable
              title="Executive Package"
              subTitle="Control your choices for effective business growth and more customers."
              price="500"
              currency="$"
              timeline="yearly"
              features={[
                'Everything you need to automate your core operations',
                'No hidden charges, no suprise fees',
                'Full setup and training included',
              ]}
              btnText="Choose Package"
              btnLink="/contact"
            />
          )}
        </div>
        <div className="col-lg-5">
        {/*  {tab === 'monthly' && (
            <PricingTable
              title="Gold"
              subTitle="Control your choices for effective business growth and more customers."
              price="449"
              currency="$"
              timeline="monthly"
              features={[
                'Limited content',
                'Social ad campaign',
                'Premium consultancy',
                'Secret strategy',
              ]}
              btnText="Choose Packedge"
              btnLink="/"
              popular
            />
          )} */}
          {tab === 'yearly' && (
            <PricingTable
              title="Premium Package"
              subTitle="Control your choices for effective business growth and more customers."
              price="1,500"
              currency="$"
              timeline="yearly"
              features={[
                'Complete business automation',
                'Piority support',
                'Custom features for your specific needs',
              ]}
              btnText="Choose Package"
              btnLink="/contact"
            />
          )}
        </div>
        {/*<div className="col-lg-4">
          {tab === 'monthly' && (
            <PricingTable
              title="Platinum"
              subTitle="Control your choices for effective business growth and more customers."
              price="599"
              currency="$"
              timeline="monthly"
              features={[
                'Unlimited content',
                'Ad campaign',
                'Branding consultancy',
                'Video ad banner',
              ]}
              btnText="Choose Packedge"
              btnLink="/"
            />
          )}
          {tab === 'yearly' && (
            <PricingTable
              title="Platinum"
              subTitle="Control your choices for effective business growth and more customers."
              price="899"
              currency="$"
              timeline="yearly"
              features={[
                'Unlimited content',
                'Ad campaign',
                'Branding consultancy',
                'Video ad banner',
              ]}
              btnText="Choose Packedge"
              btnLink="/"
            />
          )}
        </div> */}
      </div>
    </div>
  );
}
