import {
  Modal,
  Box,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { motion, AnimatePresence } from "framer-motion";
import { useLeadPopup } from "../context/LeadPopupContext";
import LeadForm from "./LeadForm";

const MotionBox = motion(Box);

export default function LeadPopup() {
  const { open, closeLeadPopup } = useLeadPopup();

  return (
    <AnimatePresence>
      {open && (
        <Modal
          open
          onClose={closeLeadPopup}
          closeAfterTransition
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MotionBox
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.25, ease: [0.25, 0.8, 0.25, 1] }}
            sx={{
              position: "relative",
              width: { xs: "92%", sm: 420 },
              maxHeight: "90vh",
              overflowY: "auto",
              bgcolor: "#fff",
              borderRadius: 3,
              p: { xs: 2.5, sm: 3 },
              boxShadow: "0 30px 80px rgba(0,0,0,0.25)",
              outline: "none",
            }}
          >
            {/* CLOSE */}
            <IconButton
              onClick={closeLeadPopup}
              sx={{ position: "absolute", top: 10, right: 10 }}
            >
              <CloseIcon />
            </IconButton>

            <LeadForm onClose={closeLeadPopup} />
          </MotionBox>
        </Modal>
      )}
    </AnimatePresence>
  );
}
