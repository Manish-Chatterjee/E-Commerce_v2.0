import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
import type { SlideProps } from "@mui/material/Slide";

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}

type SnackBarAlertProps = {
  open: boolean;
  handleClose: () => void;
  message: React.ReactNode;
};

export default function SnackBarAlert({
  open,
  handleClose,
  message,
}: SnackBarAlertProps) {
  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      TransitionComponent={SlideTransition}
      message={message}
      autoHideDuration={1500}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      slotProps={{
        content: {
          sx: {
            backgroundColor: "white",
            color: "black",
            borderRadius: "15px",
          },
        },
      }}
    />
  );
}
