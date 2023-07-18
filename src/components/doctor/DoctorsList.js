import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ApiService from "../service/ApiService";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";

const DoctorsList = () => {
  const jwtToken = localStorage.getItem("jwtToken");

  const [doctorList, setDoctorsList] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  const fetchData = async () => {
    try {
      const response = await ApiService.docotorsList({
        Authorization: `Bearer ${jwtToken}`,
      });

      if (response.status === 200) {
        const doctorsListData = response.data;
        setDoctorsList(doctorsListData);
        console.log("doctors list here ", doctorsListData);
      }

      if (response.status === 302) {
        navigate("/login");
        console.log("Token expired!");
      }
    } catch (error) {
      console.log("Error getting response", error);
    }
  };

  return (
    <div className="grid grid-cols-1 gap-2 lg:grid-cols-3 mt-16">
      {doctorList.map((doctor, index) => (
        <div key={index}>
          <Card className="mt-6 w-96">
            <CardHeader color="blue-gray" className="relative h-56">
              <img
                src={`http://${doctor.profilePicture.imageUrl}`}
                alt="img-blur-shadow"
                layout="fill"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h5" color="blue-gray" className="mb-2">
                Dr. {`${doctor.firstname} ${doctor.lastname}`}
              </Typography>
              <Typography>Email: {doctor.email}</Typography>
            </CardBody>
            <CardFooter className="pt-0">
              <Button>Book Appointment</Button>
            </CardFooter>
          </Card>
        </div>
      ))}
    </div>
  );
};

export default DoctorsList;
