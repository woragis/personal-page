import {
  FaCss3,
  FaGit,
  FaGolang,
  FaHtml5,
  FaJava,
  FaJs,
  FaLinux,
  FaNodeJs,
  FaReact,
  FaRust,
} from "react-icons/fa6";
import { SkillInterface } from "../../types/Skill.section.types";

export const useSkillsModel = () => {
  const skills: SkillInterface[] = [
    {
      title: "HTML",
      icon: <FaHtml5 />,
      text: "",
      proficiencyLevel: 100,
      color: "#E44D26",
    },
    {
      title: "CSS",
      icon: <FaCss3 />,
      text: "I use css for styling my apps and have years of experience using it in html and my personal projects",
      proficiencyLevel: 100,
      color: "#1572B6",
    },
    {
      title: "JAVASCRIPT",
      icon: <FaJs />,
      text: "Javascript is great for using with my app, my experience is great as frontend with react and backend with nodejs and express",
      proficiencyLevel: 100,
      color: "#F7DF1E",
    },
    {
      title: "REACT",
      icon: <FaReact />,
      text: "React is great to building frontend projects, I can say without any fear, that it's the best javascript framework to building fronted apps",
      proficiencyLevel: 100,
      color: "#61DAFB",
    },
    {
      title: "NODE.JS",
      icon: <FaNodeJs />,
      text: "Node js is great for building backend apps",
      proficiencyLevel: 100,
      color: "#339933",
    },
    {
      title: "RUST",
      icon: <FaRust />,
      text: "",
      proficiencyLevel: 100,
      color: "#DEA584",
    },
    {
      title: "GOLANG",
      icon: <FaGolang />,
      text: "",
      proficiencyLevel: 100,
      color: "#00ADD8",
    },
    {
      title: "GIT",
      icon: <FaGit />,
      text: "",
      proficiencyLevel: 100,
      color: "#F05033",
    },
    {
      title: "LINUX",
      icon: <FaLinux />,
      text: "",
      proficiencyLevel: 100,
      color: "#FCC624",
    },
    {
      title: "JAVA",
      icon: <FaJava />,
      text: "",
      proficiencyLevel: 100,
      color: "#5382A1",
    },
  ];

  const height = "350px";
  const width = "280px";
  const reverse = false;
  const time = 20;
  const timeString = `${time}s`;

  function initBattery() {
    const batteryLiquid = document.querySelector(".battery__liquid");
    const batteryStatus = document.querySelector(".battery__status");
    const batteryPercentage = document.querySelector(".battery__percentage");
    if (batteryLiquid && batteryStatus && batteryPercentage) {
      let proficiencyLevel = 0.5;
      const updateBattery = () => {
        let level = Math.floor(proficiencyLevel * 100);
        batteryPercentage.innerHTML = level + "%";
        batteryLiquid.setAttribute("level", `${proficiencyLevel}%`);
        if (proficiencyLevel <= 20) {
          // red color
          batteryLiquid.classList.add("animated-red");
          batteryLiquid.classList.remove(
            "animated-orange",
            "animated-yellow",
            "animated-green"
          );
        } else if (proficiencyLevel <= 50) {
          // orange color
          batteryLiquid.classList.add("animated-orange");
          batteryLiquid.classList.remove(
            "animated-red",
            "animated-yellow",
            "animated-green"
          );
        } else if (proficiencyLevel <= 70) {
          // yellow color
          batteryLiquid.classList.add("animated-yellow");
          batteryLiquid.classList.remove(
            "animated-red",
            "animated-orange",
            "animated-green"
          );
        } else {
          // green color
          batteryLiquid.classList.add("animated-green");
          batteryLiquid.classList.remove(
            "animated-red",
            "animated-orange",
            "animated-yellow"
          );
        }
      };
      updateBattery();
    }
  }

  return { skills, height, width, reverse, time, timeString };
};
