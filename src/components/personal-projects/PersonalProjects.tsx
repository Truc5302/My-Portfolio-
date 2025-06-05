import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';

type Props = {}

const PersonalProjects = (props: Props) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="p-6 rounded-md bg-gray-50 my-10 shadow-md ">
      <h2 className="text-2xl font-bold text-green-700 mb-6">Personal Projects</h2>

      <div className="w-2/3 mb-6 py-4 px-10 bg-white rounded-md shadow-sm border-l-10 border-[#b97979] flex justify-between items-center gap-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-800">
            <FontAwesomeIcon icon={faCloud} /> FPT Evaluation Project (Team Project - 2023)
          </h3>
          <p className="text-sm text-gray-600 mb-1">Technology: <span className="font-medium">React, TypeScript, v.v</span></p>
          <p className="text-sm text-gray-600">Web: <a href="https://portfolio-ttt5302.vercel.app/" target="_blank" className="text-blue-600 hover:underline">portfolio-ttt5302.vercel.app/</a></p>

          <p className="text-sm text-gray-600 mb-1">
            Git: <a href="https://github.com/Truc5302/My-Portfolio-.git" target="_blank" className="text-blue-600 hover:underline">github.com/Truc5302/My-Portfolio-.git</a>
          </p>
        </div>
        <div>
          <button
            onClick={handleClickOpen}
            className="cursor-pointer relative bg-white/10 py-2 rounded-full min-w-[8.5rem] min-h-[2.92rem] group max-w-full flex items-center justify-start hover:bg-[#b97979] transition-all duration-[0.8s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] shadow-[inset_1px_2px_5px_#00000080]"

          >
            <div className="absolute flex px-1 py-0.5 justify-start items-center inset-0">
              <div
                className="w-[0%] group-hover:w-full transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]"
              ></div>
              <div
                className="rounded-full shrink-0 flex justify-center items-center shadow-[inset_1px_-1px_3px_0_black] h-full aspect-square bg-[#b97979] transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:bg-black"
              >
                <div
                  className="size-[0.8rem] text-black group-hover:text-white group-hover:-rotate-45 transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)]"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 16"
                    height="100%"
                    width="100%"
                  >
                    <path
                      fill="currentColor"
                      d="M12.175 9H0V7H12.175L6.575 1.4L8 0L16 8L8 16L6.575 14.6L12.175 9Z"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
            <div
              className="pl-[3.4rem] pr-[1.1rem] group-hover:pl-[1.1rem] group-hover:pr-[3.4rem] transition-all duration-[1s] ease-[cubic-bezier(0.510,0.026,0.368,1.016)] group-hover:text-white text-black"
            >
              Explore
            </div>
          </button>

          <React.Fragment>
            <Dialog
              fullScreen
              open={open}
              onClose={handleClose}

            >
              <AppBar sx={{ position: 'relative', backgroundColor: "#b97979" }}>
                <Toolbar>
                  <IconButton
                    edge="start"
                    color="inherit"
                    onClick={handleClose}
                    aria-label="close"
                  >
                    <CloseIcon />
                  </IconButton>
                  <Typography sx={{ ml: 2, flex: 1, backgroundColor: "#b97979" }} variant="h6" component="div">
                    Details
                  </Typography>

                </Toolbar>
              </AppBar>

            </Dialog>
          </React.Fragment>

        </div>
      </div>


    </div>
  )
}

export default PersonalProjects