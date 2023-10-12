import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Input,
} from "@material-tailwind/react";
import ApiService from "../service/ApiService";
import { HttpStatusCode } from "axios";

export function CreateMeetingModal({
  btnText,
  patientId,
  handleButtonClick,
  color,
}) {
  const [open, setOpen] = useState(false);
  const doctorsId = localStorage.getItem("doctorId");
  const jwtToken = localStorage.getItem("jwtToken");
  const [meetingTitle, setMeetingTitle] = useState("");
  const [meetingResponse, setMeetingResponse] = useState({});

  const handleOpen = () => setOpen(!open);

  const handleFunction = (patientId) => {
    handleButtonClick(patientId);
  };

  const createMeeting = async (e) => {
    e.preventDefault();

    const newMeeting = {
      title: meetingTitle,
      preferred_region: "ap-south-1",
      record_on_start: false,
      live_stream_on_start: false,
      recording_config: {
        max_seconds: 60,
        file_name_prefix: "string",
        video_config: {
          codec: "H264",
          width: 1280,
          height: 720,
          watermark: {
            url: "http://example.com",
            size: {
              width: 1,
              height: 1,
            },
            position: "left top",
          },
        },
        audio_config: {
          codec: "AAC",
          channel: "stereo",
        },
        storage_config: {
          type: "aws",
          access_key: "string",
          secret: "string",
          bucket: "string",
          region: "us-east-1",
          path: "string",
          auth_method: "KEY",
          username: "string",
          password: "string",
          host: "string",
          port: 0,
          private_key: "string",
        },
        dyte_bucket_config: {
          enabled: true,
        },
        live_streaming_config: {
          rtmp_url: "rtmp://a.rtmp.youtube.com/live2",
        },
      },
    };

    try {
      const response = await ApiService.createMeeting(doctorsId, newMeeting, {
        Authorization: `Bearer ${jwtToken}`,
      });

      console.log("here is the users jwt " + jwtToken);
      // Process the response here
      if (response.status === HttpStatusCode.Created) {
        console.log(
          "Meeting is booked successfully" + JSON.stringify(response.data)
        );
        setMeetingResponse(response.data.data); // Set the state to indicate successful booking
        const { id } = meetingResponse;
        console.log("meeting id destructured here " + id);
      } else {
        console.log("Failed to create meeting" + JSON.stringify(response.data));
      }
    } catch (error) {
      console.log("Error creating meeting", error);
      // setIsLoading(false);
    }

    // setOpenModal(false);
  };
  return (
    <>
      <Button
        className={`bg-${color}-500 text-black`}
        onClick={() => {
          handleOpen();
          handleButtonClick(patientId);
        }}
      >
        {btnText}
      </Button>
      <Dialog open={open} handler={handleOpen}>
        <div className="flex items-center justify-between">
          <DialogHeader>Meeting Setup </DialogHeader>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="mr-3 h-5 w-5"
            onClick={handleOpen}
          >
            {/* SVG path */}
          </svg>
        </div>
        <DialogBody divider>
          <div className="grid gap-6">
            <Input
              label="Title of the meeting here"
              type="text"
              value={meetingTitle}
              onChange={(e) => setMeetingTitle(e.target.value)}
            />
          </div>
        </DialogBody>
        <DialogFooter className="space-x-2">
          <Button variant="outlined" color="red" onClick={handleOpen}>
            close
          </Button>
          <Button variant="gradient" color="green" onClick={createMeeting}>
            Create Meeting
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
