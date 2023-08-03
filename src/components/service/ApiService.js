import axios from "axios";

const baseUrl = "http://localhost:1992";

class ApiService {
  static patientRegPost(data) {
    return axios.post(baseUrl + "/patient", data);
  }

  static login(data) {
    return axios.post(baseUrl + "/login", data);
  }

  static appointmentList(headers) {
    const encodedUrl = encodeURI(baseUrl + "/appointments");
    return axios.get(encodedUrl, { headers });
  }

  static doctorRegPost(data) {
    return axios.post(baseUrl + "/doctor", data);
  }
  static docotorsList(headers) {
    const encodedUrl = encodeURI(baseUrl + "/doctors-list");
    return axios.get(encodedUrl, { headers });
  }

  static bookAppointmentPost(doctorId, data, headers) {
    const url = `${baseUrl}/appointment-bookings/${doctorId}`;
    return axios.post(url, data, { headers });
  }
}

export default ApiService;
