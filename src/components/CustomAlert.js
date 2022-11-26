import { Alert, Snackbar } from "@mui/material";

const SuccessAlert = ({ open, handleClose }) => {
    return (
        <Snackbar
            open={open}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
            <Alert
                onClose={handleClose}
                severity='success'
                sx={{ width: "100%" }}
            >
                Hurray!! Well played!!
            </Alert>
        </Snackbar>
    );
};

const ErrorAlert = ({ open, handleClose }) => {
    return (
        <Snackbar
            open={open}
            autoHideDuration={3000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
        >
            <Alert
                onClose={handleClose}
                severity='error'
                sx={{ width: "100%" }}
            >
                Could not find the word
            </Alert>
        </Snackbar>
    );
};

export { SuccessAlert, ErrorAlert };
