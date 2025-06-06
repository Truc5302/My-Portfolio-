import { faFacebook, faGithub, faLinkedin, faSquareInstagram, faSquareThreads } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Tooltip, TooltipProps } from 'antd';
import React, { useMemo, useState } from 'react'

type Props = {}

const Footer = (props: Props) => {
  const [arrow, setArrow] = useState<'Show' | 'Hide' | 'Center'>('Show');

  const mergedArrow = useMemo<TooltipProps['arrow']>(() => {
    if (arrow === 'Hide') {
      return false;
    }

    if (arrow === 'Show') {
      return true;
    }

    return {
      pointAtCenter: true,
    };
  }, [arrow]);

  const socialsMed = [
    {
      route: "https://www.linkedin.com/in/truongthuytruc/",
      textColor: "text-blue-700",
      icon: faLinkedin,
      tooltip: "Linkedin",
    },
    {
      route: "https://github.com/Truc5302?tab=repositories",
      textColor: "",
      icon: faGithub,
      tooltip: "Git",
    },
    {
      route: "https://www.facebook.com/truong.thuy.truc.2024",
      textColor: "text-blue-600",
      icon: faFacebook,
      tooltip: "Facebook",
    },
    {
      route: "https://www.instagram.com/trucie_5302/",
      textColor: "text-pink-600",
      icon: faSquareInstagram,
      tooltip: "Instagram",
    },

    {
      route: "https://www.threads.com/@trucie_5302",
      textColor: "",
      icon: faSquareThreads,
      tooltip: "Threads",
    },



  ]

  return (
    <div className='px-10 py-5 bg-[#b97979] flex justify-between'>
      <div>
        <h1
          className="text-3xl text-[#fff  ] h-[100%] tracking-tightest hover:cursor-pointer"
          style={{ fontFamily: "Pacifico" }}
        >
          TTT 's Portfolio
        </h1>
        <p className='text-white text-sm'>© 2025 TTT.</p>
      </div>
      <div className="flex gap-4 mt-4">
        {socialsMed.map((item) => (
          <Tooltip key={item?.route} title={item.tooltip} arrow={mergedArrow}>
            <a
              href={item.route}
              target="_blank"
              className={`text-3xl ${item.textColor} border-2 border-[#000] p-1 rounded-xl w-10 h-10 flex items-center justify-center bg-[#fff]`}
            >
              <FontAwesomeIcon icon={item.icon} />
            </a>
          </Tooltip>
        ))}

      </div>
    </div>
  )
}

export default Footer