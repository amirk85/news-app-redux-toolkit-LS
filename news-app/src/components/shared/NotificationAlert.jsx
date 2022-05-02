import * as React from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useDispatch, useSelector } from "react-redux";
import { CLOSE_ALERT } from "../../context/article-slice";

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

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      <Snackbar
        open={success}
        autoHideDuration={1500}
        transitionDuration={800}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity="secondary"
          sx={{ width: "100%" }}
        >
          Add to favourites successfully!
        </Alert>
      </Snackbar>
    </Stack>
  );
}
