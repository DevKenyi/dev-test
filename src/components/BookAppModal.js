import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";

export default function BookAppModal({ disabled }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);

  return (
    <React.Fragment>
      <Button disabled={disabled} onClick={handleOpen}>
        Book Appointment
      </Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardHeader
            variant="gradient"
            color="blue"
            className="mb-4 grid h-28 place-items-center"
          >
            <Typography variant="h3" color="white">
              Book Appointment
            </Typography>
          </CardHeader>
          <CardBody className="flex flex-col gap-4">
            <Input label="Password" size="lg" />
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={handleOpen} fullWidth>
              Book now
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </React.Fragment>
  );
}
