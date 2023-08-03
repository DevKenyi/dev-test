import React, { useState } from "react";
import { Button, Label, Modal, TextInput } from "flowbite-react";
import { HttpStatusCode } from "axios";
import ApiService from "./service/ApiService";

export default function DoctorModal({ disabled, doctorId }) {
  const [openModal, setOpenModal] = useState(false);
  const [appointmentDate, setAppointmentDate] = useState("");
  const [appointmentTime, setAppointmentTime] = useState("");
  const [purpose, setPurpose] = useState("");
  const [loading, setIsLoading] = useState(false);
  const jwtToken = localStorage.getItem("jwtToken");

  const handleBookAppointment = async (doctorId) => {
    console.log(
      "Appointment booked:",
      appointmentDate,
      appointmentTime,
      purpose
    );
    console.log("doctor id is " + doctorId);
    try {
      setIsLoading(true);

      const appointmentDateTimeString = `${appointmentDate}T${appointmentTime}`;
      const appointmentDateTime = new Date(appointmentDateTimeString);
      const formattedDateTime = appointmentDateTime.toISOString();

      const data = {
        appointmentDateTime: formattedDateTime, // Use the formatted date and time
        purpose,
      };

      const response = await ApiService.bookAppointmentPost(doctorId, data, {
        Authorization: `Bearer ${jwtToken}`,
      });

      console.log("here is the users jwt " + jwtToken);
      // Process the response here
      if (response.status === HttpStatusCode.Created) {
        console.log("Appointment is booked successfully");
      } else {
        console.log("Failed to book appointment" + response.status);
      }
    } catch (error) {
      console.log("Error booking appointment", error);
      setIsLoading(false);
    }

    setOpenModal(false);
  };

  return (
    <>
      <Button disabled={disabled} onClick={() => setOpenModal(true)}>
        Book Appointment
      </Button>
      <Modal
        show={openModal}
        size="md"
        popup
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header />
        <Modal.Body>
          <div className="space-y-6">
            <h3 className="text-xl font-medium text-gray-900 dark:text-white">
              Book Appointment
            </h3>
            <div>
              <Label htmlFor="appointment-date" value="Date of Appointment" />
              <TextInput
                type="date"
                id="appointment-date"
                value={appointmentDate}
                onChange={(e) => setAppointmentDate(e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor="appointment-time" value="Time of Appointment" />
              <TextInput
                type="time"
                id="appointment-time"
                value={appointmentTime}
                onChange={(e) => setAppointmentTime(e.target.value)}
                required
              />
            </div>
            <div>
              <Label
                htmlFor="appointment-purpose"
                value="Purpose of Appointment"
              />
              <TextInput
                id="appointment-purpose"
                value={purpose}
                onChange={(e) => setPurpose(e.target.value)}
                required
              />
            </div>
            <div className="w-full">
              <Button
                onClick={() => handleBookAppointment(doctorId)}
                disabled={loading}
              >
                {loading ? "Booking..." : "Book Appointment"}
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
