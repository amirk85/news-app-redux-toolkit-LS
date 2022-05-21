import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { CLOSE_ALERT } from "../../store/article-slice";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function NotificationAlert() {
  const dispatch = useDispatch();
  const success = useSelector((state) => state.articles.success);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(CLOSE_ALERT());
  };

  let alertWidth = "100%";

  if (window.innerWidth <= 600) {
    alertWidth = "95%";
  }

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={success}
        autoHideDuration={1500}
        transitionDuration={600}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Alert
          onClose={handleClose}
          severity="success"
          sx={{
            width: { alertWidth },
            fontSize: "1",
            backgroundColor: "#34A853",
          }}
        >
          Added to Favourite successfully!
        </Alert>
      </Snackbar>
    </Stack>
  );
}
