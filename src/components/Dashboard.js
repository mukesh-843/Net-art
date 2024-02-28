import React from "react";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <header>
        <img src="logo.png" alt="Placeholder Image" />
      </header>
      <div className="content">
        <img src="1.png" alt="Placeholder Image" className="image-1" />
        <div className="text">
          <p>
            {" "}
            <b>
              C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for
              the 4th time.
            </b>{" "}
          </p>
          <ul>
            <li>
              C.R.I.'s energy efficient products are well recognized by various
              Government Institutions, as trustworthy products for various
              projects across the globe to save energy.
            </li>
            <li>
              C.R.I. is the highest contributor in the country for the projects
              of EESL (Energy Efficiency Services Limited) to replace the old
              inefficient pumps with 5 Star rated energy efficient smart pumps
              with IoT enabled control panel.
            </li>
          </ul>
          <img src="2.png" alt="Placeholder Image" className="image-2" />
          <p font-size="50px">
            Government of India has awarded the{" "}
            <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj,
            Joint Managing Director of C.R.I. Group received the award from Smt.
            Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh,
            Honorable Minister of State.
          </p>
        </div>

        <p className="text1">
          INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY
          RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF
          POWER FOR THE NATION.
        </p>
      </div>
      <img src="3.png" alt="Placeholder Image" className="image-3" />
      <div className="footer">
        <p>
          Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables -
          Solar Systems - Motors
        </p>
        <div className="red-line"></div>
      </div>
      <div className="additional-content">
        <p>
          {" "}
          <b>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</b>{" "}
        </p>

        <p>
          <span>CHEMICALS & PROCESS</span>
          <span className="separator">|</span>
          <span>POWER</span>
          <span className="separator">|</span>
          <span>WATER & WASTE WATER</span>
          <span className="separator">|</span>
          <span>OILS & GAS</span>
          <span className="separator">|</span>
          <span>PHARMA</span>
          <span className="separator">|</span>
          <span>SUGARS & DISTILLERIES</span>
          <span className="separator">|</span>
          <span>PAPER & PULP</span>
          <span className="separator">|</span>
          <span>MARINE & DEFENCE</span>
          <span className="separator">|</span>
          <span>METAL & MINING</span>
          <span className="separator">|</span>
          <span>FOOD & BEVERAGE</span>
          <span className="separator">|</span>
          <span>PETROCHEMICAL & REFINERIES</span>
          <span className="separator">|</span>
          <span>SOLAR</span>
          <span className="separator">|</span>
          <span>BUILDING</span>
          <span className="separator">|</span>
          <span>HVAC</span>
          <span className="separator">|</span>
          <span>FIRE FIGHTING</span>
          <span className="separator">|</span>
          <span>AGRICULTURE & RESIDENTIAL</span>
        </p>
      </div>

      <div className="contact">
  <div className="red-box">
    <span className="left-content">
      <span className="icon-left">&#x1F4DE;</span> Toll free 1800 200 1234
    </span>
    <span className="separator"></span>
    <span className="middle-content">
      <span className="icon">&#xf09a;</span> <a href="https://www.facebook.com/cripumps" target="_blank">www.facebook.com/cripumps</a>
    </span>
    <span className="separator"></span>
    <span className="right-content">
      <span className="icon">&#x1F310;</span> <a href="http://www.crigroups.com" target="_blank">www.crigroups.com</a>
    </span>
  </div>
</div>

    </div>
  );
};

export default Dashboard;
