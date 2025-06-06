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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import { DialogContent } from '@mui/material';
import p1 from '../../assets/personal-projects/portfolio/p1.jpg';
import p2 from '../../assets/personal-projects/portfolio/p2.jpg';
import p3 from '../../assets/personal-projects/portfolio/p3.jpg';
import p4 from '../../assets/personal-projects/portfolio/p4.jpg';
import p5 from '../../assets/personal-projects/portfolio/p5.jpg';

type Props = {}

interface Project {
  title: string;
  tech: string;
  git: string;
  web: string;
  detail: string; // HTML string
  detailImages?: string[];
}

const projects = [
  {
    title: 'My Portfolio (Personal project - 2025)',
    tech: 'React, TypeScript, Tailwind CSS, v.v',
    git: 'https://github.com/Truc5302/My-Portfolio-.git',
    web: 'https://portfolio-ttt5302.vercel.app/',
    detail: `
      <div class='font-mono'>
     <p class="text-red-600">Technology Stack:</p>
  <ul class="list-disc pl-5">
    <li><strong>Framework & Languages:</strong> React, TypeScript</li>
    <li><strong>Build Tool:</strong> Vite</li>
    <li><strong>Styling:</strong> Tailwind CSS, MUI, Ant Design, Emotion, Font Awesome</li>
    <li><strong>Routing:</strong> React Router</li>
    <li><strong>Build Enhancers:</strong> PostCSS, Autoprefixer</li>
    <li><strong>Code Quality:</strong> ESLint</li>
    <li><strong>Deployment:</strong> Vercel</li>
  </ul>

  <p class="mt-4"><strong>Role:</strong> Frontend Developer</p>
      <p>Designed and developed a personal portfolio website to showcase my skills, projects, and
contact information. Built with React and TypeScript, featuring a clean UI and responsive layout. Deployed
on Vercel.</p>
      </div>
      </div>
    `,
    detailImages: [p1, p2, p3, p4, p5],
  }
];

const PersonalProjects = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  const [selectedProject, setSelectedProject] = React.useState<Project>({} as Project);

  const handleClickOpen = (project: Project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject({} as Project);
  };


  return (
    <div className="p-6 rounded-md bg-green-50 my-10 shadow-md flex flex-col items-center">
      <h2 className="text-2xl font-bold text-green-700 mb-6">Personal Projects</h2>

      {projects.map((project) => (
        <div className="w-2/3 mb-6 py-4 px-10 bg-white rounded-md shadow-sm border-l-10 border-[#b97979] flex justify-between items-center gap-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              <FontAwesomeIcon icon={faCloud} /> {project.title}
            </h3>
            <p className="text-sm text-gray-600 mb-1">Technology: <span className="font-medium">{project.tech}</span></p>
            <p className="text-sm text-gray-600">Web: <a href={project.web} target="_blank" className="text-blue-600 hover:underline">{project.web}</a></p>

            <p className="text-sm text-gray-600 mb-1">
              Git: <a href={project.git} target="_blank" className="text-blue-600 hover:underline">{project.git}</a>
            </p>
          </div>
          <div>
            <button
              onClick={() => handleClickOpen(project)}
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



          </div>
        </div>
      ))}

      {selectedProject && (
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
                  {selectedProject.title}
                </Typography>

              </Toolbar>
            </AppBar>
            <DialogContent>
              <div dangerouslySetInnerHTML={{ __html: selectedProject.detail }} />
              <div className="flex flex-wrap gap-4 mt-4 grid grid-cols-2 justify-center">
                {selectedProject.detailImages && selectedProject.detailImages.map((img, idx) => (
                  <img
                    key={idx}
                    src={img}
                    alt={`detail-${idx}`}
                    className="max-h-60 rounded-lg border shadow w-fit mr-auto ml-auto"
                  />
                ))}
              </div>
            </DialogContent>

          </Dialog>
        </React.Fragment>
      )}


    </div>
  )
}

export default PersonalProjects