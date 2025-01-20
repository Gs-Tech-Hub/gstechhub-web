import React from 'react';
import { useState } from 'react';
import PricingTable from '.';

export default function PricingTableList() {
  const [tab, setTab] = useState('monthly');
  return (
    <div className="cs_tabs cs_style1">
      <ul className="cs_tab_links cs_style1 cs_mp0 cs_pricing_control">
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
      </ul>
      <div className="row cs_gap_y_30">
        <div className="col-lg-4">
          {tab === 'monthly' && (
            <PricingTable
              title="Digital Marketing Outsourcing"
              subTitle="Control your choices for effective business growth and more customers."
              price="50"
              currency="$"
              timeline="Monthly"
              features={[
                'Limited content',
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
              title="Digital Marketing Outsourcing"
              subTitle="Control your choices for effective business growth and more customers."
              price="499"
              currency="$"
              timeline="yearly"
              features={[
                'Limited content',
                'Ad campaign',
                'Branding consultancy',
                'Video ad banner',
              ]}
              btnText="Choose Packedge"
              btnLink="/"
            />
          )}
        </div>
        <div className="col-lg-4">
          {tab === 'monthly' && (
            <PricingTable
              title="Enterprise Management Software Service"
              subTitle="Control your choices for effective business growth and more customers."
              price="299"
              currency="$"
              timeline="monthly"
              features={[
                'Limited content',
                'Social ad campaign',
                'Premium consultancy',
                'Secret strategy',
                'Single Feature Enterprise Management Software',

              ]}
              btnText="Choose Packedge"
              btnLink="/"
              popular
            />
          )}
          {tab === 'yearly' && (
            <PricingTable
              title="Gold"
              subTitle="Control your choices for effective business growth and more customers."
              price="2500"
              currency="$"
              timeline="yearly"
              features={[
                'Limited content',
                'Social ad campaign',
                'Premium consultancy',
                'Secret strategy',
                'Single Feature Enterprise Management Software',
              ]}
              btnText="Choose Packedge"
              btnLink="/"
              popular
            />
          )}
        </div>
        <div className="col-lg-4">
          {tab === 'monthly' && (
            <PricingTable
              title="Premium Enterprise Management Services"
              subTitle="Control your choices for effective business growth and more customers."
              price="599"
              currency="$"
              timeline="monthly"
              features={[
                'Unlimited content',
                'Ad campaign',
                'Branding consultancy',
                'Video ad banner',
                'Full featured Enterprise management Software',
              ]}
              btnText="Choose Packedge"
              btnLink="/"
            />
          )}
          {tab === 'yearly' && (
            <PricingTable
              title="Premium Enterprise Management Services"
              subTitle="Control your choices for effective business growth and more customers."
              price="5999"
              currency="$"
              timeline="yearly"
              features={[
                'Unlimited content',
                'Ad campaign',
                'Branding consultancy',
                'Video ad banner',
                'Full featured Enterprise management Software',
              ]}
              btnText="Choose Packedge"
              btnLink="/"
            />
          )}
        </div>
      </div>
    </div>
  );
}
