import React from "react";
import DocIcon from "../avaters/thumbs_up_doc.png";
import CalendarIcon from "../avaters/calendar.png";
import ClockSession from "../avaters/clock_session.png";
import PendingAppointmeneIcon from "../avaters/pending.png";
import Patient from "../avaters/patient_3359183.png";
const DoctorDashboard = () => {
  return (
    <div className="m-8 p-8 ">
      <div className="font-bold m-4 text-4xl text-black">DASHBOARD</div>
      <div className="flex lg:flex-row sm:flex-col md: flex-grow">
        <div className="w-64 h-32  border shadow-md p-4 m-4 ">
          <div className="font-bold">Patients</div>
          <div className="flex flex-row justify-between items-end">
            <div className="font-bold text-2xl">115</div>
            <div className="w-16 h-16 rounded-full flex">
              <img src={Patient} alt="doctIcon" />
            </div>
          </div>
          <div></div>
        </div>
        <div className="w-64 h-32  border shadow-md p-4 m-4 ">
          <div className="font-bold">Upcoming Appointments</div>
          <div className="flex flex-row justify-between items-end">
            <div className="font-bold   text-2xl">50</div>
            <div className="w-16 h-16 rounded-full flex">
              <img src={CalendarIcon} alt="calendarIcon " />
            </div>
          </div>
          <div></div>
        </div>
        <div className="w-64 h-32  border shadow-md p-4 m-4 ">
          <div className="font-bold">Currently in Session</div>
          <div className="flex flex-row justify-between items-end">
            <div className="font-bold text-2xl">20</div>
            <div className="w-16 h-16 rounded-full flex">
              <img src={ClockSession} />
            </div>
          </div>
          <div></div>
        </div>
        <div className="w-64 h-32  border shadow-md p-4 m-4 ">
          <div className="font-bold"> Pending Appointments</div>
          <div className="flex flex-row justify-between items-end">
            <div className="font-bold text-2xl">30</div>
            <div className="w-16 h-16 rounded-full flex">
              <img src={PendingAppointmeneIcon} />
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDashboard;
