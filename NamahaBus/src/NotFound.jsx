import * as React from 'react';
import Stack from '@mui/material/Stack';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import CheckIcon from '@mui/icons-material/Check';
import CloseIcon from '@mui/icons-material/Close'
export default function NotFound() {
   const [open, setOpen] = React.useState(true);
   const [error,setError] = React.useState("");
    // useEffect(() => {
    //        axios.post("http://localhost:3000/error")
    //          .then((res) => {
    //            setErrror(res.data);
    //          })
    //          .catch((err)=>{
    //            console.log(err);
    //          })
       
    //      }, []);
  return (
    <div>
      {/* <h1>404 - Page Not Found</h1> */}
    {/* <Stack sx={{ width: '100%',heigh:"100%" }} spacing={2}>
     <Alert severity="error"><h3>404 - Page Not Found.</h3></Alert>
    </Stack> */}
    <Collapse in={open}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setOpen(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
          sx={{ mb: 2,mt:4,width:"100%",}}
        >
          <h2>error</h2>
        </Alert>
      </Collapse>
    </div>
  );
}