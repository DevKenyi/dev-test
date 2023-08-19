import React from "react";
import TestDoc from "./test_doc.jpg";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";

export function SideNavBarDoctor() {
  //const greetings = "Welcome to your ";
  return (
    <Card className="h-[calc(100vh-2rem)] w-full md:w-[20rem] p-4 shadow-xl shadow-blue-gray-900/5">
      <div className="mb-1 p-2 w-full border shadow-sm ">
        <div className="flex items-center justify-center">
          <img
            src={TestDoc}
            alt="Doctor"
            className="h-32 w-32 rounded-full mt-12"
          />
        </div>
        <div className="flex flex-col justify-center mb-12 mt-4 items-center">
          <Typography variant="h5" color="blue-gray">
            Dr. John Doe
          </Typography>
          <Typography variant="subtitle2" color="blue-gray">
            Cardiologist
          </Typography>
        </div>
      </div>
      <List>
        <ListItem>
          <ListItemPrefix>
            <PresentationChartBarIcon className="h-5 w-5" />
          </ListItemPrefix>
          Dashboard
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <ShoppingBagIcon className="h-5 w-5" />
          </ListItemPrefix>
          Appointments
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Patient List
          <ListItemSuffix>
            <Chip
              value="14"
              size="sm"
              variant="ghost"
              color="blue-gray"
              className="rounded-full"
            />
          </ListItemSuffix>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <InboxIcon className="h-5 w-5" />
          </ListItemPrefix>
          Schedule
          <ListItemSuffix>
            <Chip
              value="14"
              size="sm"
              variant="ghost"
              color="red"
              className="rounded-full"
            />
          </ListItemSuffix>
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <UserCircleIcon className="h-5 w-5" />
          </ListItemPrefix>
          Profile
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <Cog6ToothIcon className="h-5 w-5" />
          </ListItemPrefix>
          Settings
        </ListItem>
        <ListItem>
          <ListItemPrefix>
            <PowerIcon className="h-5 w-5" />
          </ListItemPrefix>
          Log Out
        </ListItem>
      </List>
    </Card>
  );
}
