import React from 'react';

const CareerPage = () => {
  return (
    <div className="container mx-auto p-6">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold">Tetralance: Career Opportunities</h1>
        <p className="mt-2 text-lg">Join Our Team</p>
      </header>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Career Growth</h2>
        <ul className="list-disc list-inside mt-4">
          <li>Opportunity of good career growth.</li>
          <li>Stay upgraded with latest technologies.</li>
          <li>Get multi-domain experience.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Team Culture</h2>
        <ul className="list-disc list-inside mt-4">
          <li>A perfect place to uplift your strengths.</li>
          <li>Knowledge sharing sessions, more corporate & fun activities.</li>
          <li>A place of working on various ideas & implementing them for various businesses.</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Current Openings</h2>
        <div className="mt-4">
          <h3 className="font-bold">Development</h3>
          <ul className="list-disc list-inside mt-2">
            <li>LP Laravel Programmer (2 Yrs+ Exp.) - Full time, Bhubaneswar</li>
            <li>DP Django Programmer (1 Year+ Exp.) - Full time, Bhubaneswar</li>
            <li>SA System Analyst (1 Year+ Exp.) - Full time, Bhubaneswar</li>
            <li>AP Angular Programmer (1 Year+ Exp.) - Full time, Bhubaneswar</li>
          </ul>
        </div>
        <div className="mt-4">
          <h3 className="font-bold">Sales & Support</h3>
          <ul className="list-disc list-inside mt-2">
            <li>BE Business Development Executive (2-3 Yrs+ Exp.) - Full Time, Bhubaneswar</li>
            <li>JPM Junior Program Manager (3Yrs+ Exp.) - Full time, Bhubaneswar</li>
            <li>PA Presales Associates - Full time, Bhubaneswar</li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <p className="mt-2">Interested candidates can send their resume to <a href="mailto:info@tetralance.com" className="text-blue-500">info@tetralance.com</a></p>
      </section>

      <footer className="text-center mt-10">
        <p>© 2025 Tetralance Pvt. Ltd. All rights reserved.</p>
        <p>Corporate Office: 3390, Kamalvilla Jagannatha Matha Lane, Bhubaneswar, Khordha, Odisha, 751002</p>
        <p>Phone: (+91) 674-3501101</p>
      </footer>
    </div>
  );
};

export default CareerPage;
