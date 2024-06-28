const Landing = () => {
  return (
    <div className="flex flex-col items-center justify-center py-8">
      <h1 className="text-2xl font-bold mb-4">
        Driving Property Inquiries to Conversions
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ">
        <div className="flex flex-col items-center text-center p-4 mt-10">
          <img src="property1.png" alt="property1 logo" className="mb-12 " />
          <h2 className="text-xl font-bold ">
            Call-to-Action Optimization
          </h2>
          <p className="text-gray-600">
            Our carefully crafted CTAs guide potential buyers through the
            property journey, enhancing engagement and conversion rates.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-4 ">
          <img src="property2.png" alt="property2 logo" className="mb-3  " />
          <h2 className="text-xl font-bold mb-2">Landing Page Efficiency</h2>
          <p className="text-gray-600">
            Tailored landing pages are designed for maximum property lead
            conversion. They provide seamless user experiences and clear
            pathways for inquiry submission.
          </p>
        </div>

        <div className="flex flex-col items-center text-center p-4  ">
          <img src="property3.png" alt="property3" className="mb-4 " />
          <h2 className="text-xl font-bold mb-2">Social Proof Utilization</h2>
          <p className="text-gray-600">
            Leverage the power of testimonials and success stories from
            satisfied buyers to build trust and credibility, encouraging
            hesitant prospects to take action.
          </p>
        </div>  

        <div className="flex flex-col items-center text-center p-4  ">
          <img src="property4.png" alt="property4logo" className="mb-16" />
          <h2 className="text-xl font-bold mb-2">Mobile-Friendly Experience</h2>
          <p className="text-gray-600">
            With a responsive design approach, our strategies ensure a seamless
            browsing experience across all devices. This responsiveness enhances
            engagement and conversions by accommodating the preferences of
            on-the-go property seekers.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Landing;
