import { Box, Button, Modal, Typography } from "@mui/material";
import { useState } from "react";
import FooterWorkerCard from "../FooterWorkerCard/FooterWorkerCard";

const style = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  textAlign: "center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 'fit-content',
  bgcolor: "#f9fbe7",
  border: "none",
  borderRadius: "20px",
  boxShadow: 24,
  p: 4,
};

const FooterSocials = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button className="footer-socials-logos" onClick={handleOpen}>
        <i className="fa-brands fa-linkedin-in"></i>
        <i id="socials-divider" className="fa-solid fa-minus"></i>
        <i className="fa-brands fa-behance"></i>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            fontFamily="AvengeanceMightiestAvenger"
            fontSize="36px"
            variant="h6"
            component="h2"
          >
            WORK TEAM
          </Typography>
          <Box id="modal-modal-description" display="flex" gap='10px' sx={{ mt: 2 }}>
            <FooterWorkerCard
              image="https://media.licdn.com/dms/image/C4D03AQG7AMvyKJoMfQ/profile-displayphoto-shrink_200_200/0/1654825100218?e=1678320000&v=beta&t=3AKM3ZNuhzlhYRsdujLY-h32coTVeVu2YPh4-OFjRxM"
              job="Developer"
              linkedin="https://www.linkedin.com/in/patoalbornoz/"
              name="Patricio Albornoz"
            />
            <FooterWorkerCard
              image="https://media.licdn.com/dms/image/C4D03AQG7AMvyKJoMfQ/profile-displayphoto-shrink_200_200/0/1654825100218?e=1678320000&v=beta&t=3AKM3ZNuhzlhYRsdujLY-h32coTVeVu2YPh4-OFjRxM"
              job="Developer"
              linkedin="https://www.linkedin.com/in/patoalbornoz/"
              name="Patricio Albornoz"
            />
            <FooterWorkerCard
              image="https://media.licdn.com/dms/image/C4D03AQG7AMvyKJoMfQ/profile-displayphoto-shrink_200_200/0/1654825100218?e=1678320000&v=beta&t=3AKM3ZNuhzlhYRsdujLY-h32coTVeVu2YPh4-OFjRxM"
              job="Developer"
              linkedin="https://www.linkedin.com/in/patoalbornoz/"
              name="Patricio Albornoz"
            />
            <FooterWorkerCard
              image="https://media.licdn.com/dms/image/C4D03AQG7AMvyKJoMfQ/profile-displayphoto-shrink_200_200/0/1654825100218?e=1678320000&v=beta&t=3AKM3ZNuhzlhYRsdujLY-h32coTVeVu2YPh4-OFjRxM"
              job="Developer"
              linkedin="https://www.linkedin.com/in/patoalbornoz/"
              name="Patricio Albornoz"
            />
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default FooterSocials;
