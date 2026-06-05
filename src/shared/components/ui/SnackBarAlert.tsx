import Snackbar from "@mui/material/Snackbar";
import Slide from "@mui/material/Slide";
import type { SlideProps } from "@mui/material/Slide";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";

function SlideTransition(props: SlideProps) {
  return <Slide {...props} direction="up" />;
}

type SnackBarAlertProps = {
  open: boolean;
  handleClose: () => void;
  message: React.ReactNode;
  variant?: "success" | "error";
};

export default function SnackBarAlert({
  open,
  handleClose,
  message,
  variant = "success",
}: SnackBarAlertProps) {
  const icon =
    variant === "success" ? (
      <CheckCircleIcon fontSize="small" sx={{ color: "green" }} />
    ) : (
      <ErrorIcon fontSize="small" sx={{ color: "red" }} />
    );

  return (
    <Snackbar
      open={open}
      onClose={handleClose}
      TransitionComponent={SlideTransition}
      message={
        <span
          style={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
          }}
        >
          {message}
          {icon}
        </span>
      }
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
