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
              image="https://media.licdn.com/dms/image/C4D03AQHjMQhlIKIS4g/profile-displayphoto-shrink_200_200/0/1625678725840?e=1678320000&v=beta&t=d59LTGCF9cchaX2KR5zYo87Cc3ex2vX2g2m-6nnIvX4"
              job="Developer"
              linkedin="https://www.linkedin.com/in/timoteo-gambella-4b6418210/"
              name="Timoteo Gambella"
            />
            <FooterWorkerCard
              image="https://media.licdn.com/dms/image/C4D03AQG7AMvyKJoMfQ/profile-displayphoto-shrink_200_200/0/1654825100218?e=1678320000&v=beta&t=3AKM3ZNuhzlhYRsdujLY-h32coTVeVu2YPh4-OFjRxM"
              job="Developer"
              linkedin="https://www.linkedin.com/in/patoalbornoz/"
              name="Patricio Albornoz"
            />
            <FooterWorkerCard
              image="https://media.licdn.com/dms/image/C4D03AQGkZYbT_MwRKQ/profile-displayphoto-shrink_200_200/0/1642646030689?e=1678320000&v=beta&t=wVRFOpFfTVFoEiMoU9ueGUDS_7_-5_lVhD6fANEdrzE"
              job="UX UI Designer"
              linkedin="https://www.linkedin.com/in/candelaria-guzm%C3%A1n-65b594203/"
              name="Candelaria Guzmán"
            />
            <FooterWorkerCard
              image="https://media.licdn.com/dms/image/C4D03AQFHv2ZYZak7Iw/profile-displayphoto-shrink_200_200/0/1632952313097?e=1678320000&v=beta&t=2vIwOkMAy8oKhok_4mOtRci1_rahdWes9F8HtNGD4Ys"
              job="UX UI Designer"
              linkedin="https://www.linkedin.com/in/sof%C3%ADa-ocampo-roure-5b7236170/"
              name="Sofía Ocampo Roure"
            />
          </Box>
        </Box>
      </Modal>
    </div>
  );
};

export default FooterSocials;
