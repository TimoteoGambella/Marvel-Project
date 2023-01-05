import { Box, Button, Modal, Typography } from "@mui/material";
import { useState } from "react";

const style = {
  display:"flex",
  flexDirection:"column",
  alignItems:"center",
  textAlign:"center",
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#f9fbe7",
  border: "none",
  borderRadius:"20px",
  boxShadow: 24,
  p: 4,
};

const FooterSocials = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="footer-socials">
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
          <Typography id="modal-modal-title" fontFamily="AvengeanceMightiestAvenger" fontSize="36px" variant="h6" component="h2">
            WORK TEAM
          </Typography>
          <i className="fa-solid fa-minus"></i>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  );
};

export default FooterSocials;
