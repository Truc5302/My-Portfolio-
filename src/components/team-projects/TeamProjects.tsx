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
import b1 from '../../assets/team-projects/booking-court/b1.jpg';
import b2 from '../../assets/team-projects/booking-court/b2.jpg';
import b3 from '../../assets/team-projects/booking-court/b3.jpg';
import b4 from '../../assets/team-projects/booking-court/b4.jpg';
import b5 from '../../assets/team-projects/booking-court/b5.jpg';
import b6 from '../../assets/team-projects/booking-court/b6.jpg';
import b7 from '../../assets/team-projects/booking-court/b7.jpg';

import t1 from '../../assets/team-projects/Mentor-Mentee/t1.jpg';
import t2 from '../../assets/team-projects/Mentor-Mentee/t2.jpg';
import t3 from '../../assets/team-projects/Mentor-Mentee/t3.jpg';
import t4 from '../../assets/team-projects/Mentor-Mentee/t4.jpg';
import t5 from '../../assets/team-projects/Mentor-Mentee/t5.jpg';
import t6 from '../../assets/team-projects/Mentor-Mentee/t6.jpg';
import t7 from '../../assets/team-projects/Mentor-Mentee/t7.jpg';
import t8 from '../../assets/team-projects/Mentor-Mentee/t8.jpg';
import t9 from '../../assets/team-projects/Mentor-Mentee/9.jpg';

import d1 from '../../assets/team-projects/gradute-thesis-defense/d1.jpg';
import d2 from '../../assets/team-projects/gradute-thesis-defense/d2.jpg';
import d3 from '../../assets/team-projects/gradute-thesis-defense/d3.jpg';

;

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
        title: 'FPT Evaluation Project (Team Project - 2023)',
        tech: 'React.JS',
        git: 'github.com/Truc5302/SWP_evalution_fe.git',
        web: '',
        detail: `
      <div class='font-mono'>
       <p class="text-red-600">Technology Details:</p>
  <ul class="list-disc pl-5 space-y-1">
    <li>ReactJS</li>
    <li>React Router</li>
    <li>Axios</li>
    <li>React-Bootstrap</li>
    <li>React-Toastify</li>
    <li>Formik & Yup</li>
    <li>react-cookie</li>
    <li>Sass/SCSS</li>
    <li>FontAwesome</li>
    <li>Moment.js</li>
  </ul>
      <p><strong>Role:</strong> Frontend Developer</p>

      <div>
      <p class='text-red-600'>Descriptions:</p>
      <p>A web application developed for FPT University to help lecturers manage graduation thesis
projects. The system allows teachers to view, track, and evaluate student capstone projects efficiently. It
streamlines the scoring process and improves transparency in project assessment.</p>
      </div>
      </div>
    `,
        detailImages: [],
    },
    {
        title: 'Mentor-Mentee Connection Platform (Team Project - 2024)',
        tech: 'React.JS',
        git: 'github.com/RYI-TorTee/TorTee-client',
        web: 'feexe.vercel.app',
        detail: `
      <div class='font-mono'>
      <p class='text-red-600 list-none'>Technology Stack:</p>
      <ul class="list-disc pl-5">
        <li><strong>Framework & Languages:</strong> React, TypeScript.</li>
        <li><strong>Libraries:</strong> Tailwind, MUI, AntDesign, Font Awesome.</li>
      </ul>
      <p><strong>Role:</strong> Frontend Developer</p>

      <div>
      <p class='text-red-600'>Descriptions:</p>
      <p>A web-based platform designed to connect mentors and mentees for guided learning and
skill-sharing. Mentors can open tutorial sessions for selected mentees and share hard/soft skills within 1000
hours. The platform offers personal branding, networking, and job opportunities for both mentors and
mentees, enhancing knowledge exchange and career development.</p>
      </div>
      </div>
    `,
        detailImages: [t1, t2, t3, t4, t5, t6, t7, t8, t9],
    },
    {
        title: 'BOOK VINHOME SPORTS COURT (Team Project – 2024)',
        tech: 'ReactJS',
        git: 'github.com/Truc5302/SWD_FE.git',
        web: 'jocular-melomakarona-9e927f.netlify.app',
        detail: `
      <div class='font-mono'>
      <p class='text-red-600 list-none'>Technology Stack:</p>
      <ul class="list-disc pl-5">
        <li><strong>Framework & Languages:</strong> React, TypeScript.</li>
        <li><strong>Libraries:</strong> Tailwind, MUI, AntDesign, Font Awesome.</li>
      </ul>
      <p><strong>Role:</strong> Frontend Developer</p>

      <div>
      <p class='text-red-600'>Descriptions:</p>
      <p> A web application that allows guests to join and reserve sports courts at Vinhomes Grand
Park, District 9. Users can register, browse available time slots, and book courts efficiently. The app
enhances community engagement by facilitating guest access to modern sports facilities.
</p>
      </div>
      </div>
    `,
        detailImages: [b1, b2, b3, b4, b5, b6, b7],
    },
    {
        title: 'TOUR REQUESTS AND IMPLEMENTATION SYSTEM (Graduation Thesis Defense (8/2024 – 12/2024))',
        tech: ' React, TypeScript, Redux Toolkit',
        git: 'github.com/Truc5302/footprints-tour-request-and-implementation-system.git',
        web: '',
        detail: `
      <div class="font-mono">
  <p class="text-red-600">Technology Stack:</p>
  <ul class="list-disc pl-5">
    <li><strong>Frontend:</strong> React, TypeScript, Redux Toolkit, Tailwind</li>
    <li><strong>Backend:</strong> ASP.Net API, ASP.Net Identity, EF Core, JWT, Hangfire, SignalR, OAuth 2.0, Twilio, Redis, VietQR</li>
    <li><strong>Database:</strong> SQL Server</li>
    <li><strong>Mobile App:</strong> React Native</li>
    <li><strong>Algorithm:</strong> Custom-built tour suggestion</li>
    <li><strong>Cloud Services:</strong> VPS Server Hosting, Azure</li>
    <li><strong>Project Management Tools:</strong> Lark Suite (Scheduling), GitHub (Tasks, Defects)</li>
  </ul>

  <p class="mt-4"><strong>Role:</strong> Frontend Developer</p>
</div>

      <p class='text-red-600'>Descriptions:</p>
      <p>Developed a B2C Tour Management System in collaboration with the Tour Operations
Department of Công đoàn – Báo Người Lao Động. The system allows customers to submit personalized tour
requests and receive tailored suggestions. Staff can customize and manage tour designs, while tour guides
access itineraries, send SMS updates, and manage check-ins via a mobile app. The platform improves
planning efficiency and enhances customer satisfaction.</p>
      </div>
      </div>
    `,
        detailImages: [d1, d2, d3],
    }
];

const TeamProjects = (props: Props) => {
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
        <div className="p-6 rounded-md bg-gray-50 my-10 shadow-md ">
            <h2 className="text-2xl font-bold text-red-700 mb-6">Team Projects</h2>

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
                                    Details
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

export default TeamProjects