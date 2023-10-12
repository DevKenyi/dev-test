import React from "react";
import { DyteProvider, useDyteClient } from "@dytesdk/react-web-core";
import { useEffect } from "react";
const MeedingVideoConferencing = () => {
  const [meeting, initMeeting] = useDyteClient();
  useEffect(() => {
    initMeeting({
      authToken: "27c8515bb47830275ecb",
      defaults: {
        audio: false,
        video: false,
      },
    });
  }, []);

  return <DyteProvider value={meeting} ></DyteProvider>;
};

export default MeedingVideoConferencing;
