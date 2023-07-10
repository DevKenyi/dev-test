import React, { useEffect, useState } from "react";
import ApiService from "./service/ApiService";
import { useNavigate } from "react-router-dom";

const Appointments = () => {
  const jwtToken = localStorage.getItem("jwtToken");

  const [appointments, setAppointment] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  const fetchData = async () => {
    try {
      const response = await ApiService.appointmentList({
        Authorization: `Bearer ${jwtToken}`,
      });

      if (response.status === 200) {
        console.log("Check this response from Appointment", response);

        // Access the response data accordingly

        const appointmentData = response.data;
        setAppointment(appointmentData);
      }

      if (response.status === 302) {
        navigate("/login");
        console.log("Token expired!");
      }
    } catch (error) {
      console.log("Error getting data", error);
    }
  };

  return (
    <div>
      <h1>Appointment Data</h1>
      {appointments.map((data) => (
        <div key={data.id}>
          <h1>{data.dateOfAppointment}</h1>
          <h1>{data.timeOfAppointment}</h1>
          <h1>{data.doctors.getFirstname}</h1>
        </div>
      ))}
    </div>
  );
};

export default Appointments;
