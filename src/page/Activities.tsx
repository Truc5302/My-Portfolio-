import React, { useState } from "react";
import altImg from "../assets/no-image.png"
import paint1 from "../assets/activities/painting/paint-1.jpg"
import paint2 from "../assets/activities/painting/paint-2.jpg"
import paint3 from "../assets/activities/painting/paint-3.jpg"
import paint4 from "../assets/activities/painting/paint-4.jpg"
import paint5 from "../assets/activities/painting/paint-5.jpg"
import paint6 from "../assets/activities/painting/paint-6.jpg"
import paint7 from "../assets/activities/painting/paint-7.jpg"


import sport from "../assets/activities/sports/fb1.jpg"
import sport1 from "../assets/activities/sports/sp1.jpg"
import sport2 from "../assets/activities/sports/sp2.jpg"
import sport3 from "../assets/activities/sports/sp3.jpg"
import sport4 from "../assets/activities/sports/sp4.jpg"
import sport5 from "../assets/activities/sports/sp5.jpg"
import sport6 from "../assets/activities/sports/sp6.jpg"


import cooking from "../assets/activities/cooking/c1.jpg";
import cooking2 from "../assets/activities/cooking/c2.jpg";
import cooking3 from "../assets/activities/cooking/c3.jpg";
import cooking4 from "../assets/activities/cooking/c4.jpg";
import cooking5 from "../assets/activities/cooking/c5.jpg";
import cooking6 from "../assets/activities/cooking/c6.jpg";
import cooking7 from "../assets/activities/cooking/c7.jpg";
import cooking8 from "../assets/activities/cooking/c8.jpg";
import cooking9 from "../assets/activities/cooking/c9.jpg";
import cooking10 from "../assets/activities/cooking/c10.jpg";
import cooking11 from "../assets/activities/cooking/c11.jpg";



import noel1 from "../assets/activities/christmas-gift/noel.jpg"
import noel2 from "../assets/activities/christmas-gift/noel2.jpg"
import noel3 from "../assets/activities/christmas-gift/noel3.jpg"
import noel4 from "../assets/activities/christmas-gift/noel4.jpg"
import noel5 from "../assets/activities/christmas-gift/noel5.jpg"
import noel6 from "../assets/activities/christmas-gift/noel6.jpg"
import noel7 from "../assets/activities/christmas-gift/noel7.jpg"
import { AppBar, Dialog, DialogContent, IconButton, Toolbar, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointer } from "@fortawesome/free-regular-svg-icons";



type Props = {};

interface Activity {
  title: string;
  description: string;
  mainImg?: string;
  detailImg?: string[];
}

const activities = [
  {
    title: "Cooking for the Homeless and Those in Need",
    description: "From time to time, I participate in volunteer activities where I cook meals for the poor and the homeless. After preparing and packaging the food, we go around the city to personally deliver it to those in need.",
    mainImg: cooking,
    detailImg: [cooking, cooking2, cooking3, cooking4, cooking5, cooking6, cooking7, cooking8, cooking9, cooking10, cooking11],
  },

  {
    title: "Painted a house for a family facing difficult circumstances.",
    description: "We raised funds and helped paint a house for a family going through difficult circumstances. The goal was to support them both financially and emotionally by improving their living environment.",
    mainImg: paint1,
    detailImg: [paint1, paint2, paint3, paint4, paint5, paint6, paint7],
  },

  {
    title: "Christmas Gift Giving for the Homeless",
    description: "I had the opportunity to participate twice in delivering Christmas gifts to homeless people around Ho Chi Minh City, together with one of my friends. It was a meaningful experience that brought joy to others and helped me appreciate the value of small acts of kindness.",
    mainImg: noel1,
    detailImg: [noel1, noel2, noel3, noel4, noel5, noel6, noel7],
  },
  {
    title: "Sports Activities",
    description: "I regularly participate in various sports activities such as football, badminton, and jogging. These activities not only help me stay healthy but also enhance my teamwork, discipline, and stress management skills, contributing to a balanced and active lifestyle.",
    mainImg: sport,
    detailImg: [sport, sport1, sport2, sport3, sport4, sport5, sport6],
  },
]

const Activities = (props: Props) => {
  const [open, setOpen] = useState(false);
  const [selectAct, setSelectAct] = useState<Activity>({} as Activity);

  const handleClickOpen = (project: Activity) => {
    setSelectAct(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectAct({} as Activity);
  };

  return <div className="pt-16 min-h-screen">
    <p className="py-2 px-5 border-b border-[#b97979]">
      During my studies, I actively participated in various extracurricular activities,
      which enriched my overall experience, expanded my network, and helped me develop essential soft skills.
    </p>
    <div className="py-10 md:px-20 px-5 grid md:grid-cols-2 grid-cols-1 gap-5 bg-gray-50">
      {activities.map((act) => (
        <div className="w-100% flex flex-col items-center justify-center md:p-5 p-2 bg-[#fff rounded-lg shadow-md] border-2 border-[#b97979]">
          <img src={act.mainImg ? act.mainImg : altImg} alt={act.title} className="max-h-[300px]" />
          <h3 className="text-xl text-center font-bold py-2">{act.title}</h3>
          <p className="text-gray-700">{act.description}</p>
          <button onClick={() => { handleClickOpen(act) }} className="mt-2 py-1 px-5 bg-[#b97979] rounded-sm hover:cursor-pointer hover:transform hover:scale-110">
            Explore<FontAwesomeIcon icon={faHandPointer} className="ml-2" />
          </button>
        </div>
      ))}


      {selectAct && (
        <React.Fragment key={selectAct.title}>
          <Dialog
            open={open}
            onClose={handleClose}
            maxWidth="md"
            fullWidth

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
                  {selectAct.title}
                </Typography>

              </Toolbar>
            </AppBar>
            <DialogContent>
              <div className=" grid grid-cols-2 gap-5">
                {selectAct.detailImg && selectAct.detailImg.map((img) => (
                  <div className="flex items-center justify-center">
                    <img src={img ? img : altImg} alt={selectAct.title} className="max-h-[300px]" />
                  </div>
                ))}
              </div>
            </DialogContent>

          </Dialog>
        </React.Fragment>
      )}
    </div>

  </div>;
};

export default Activities;
