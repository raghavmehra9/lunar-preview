import {
  CategoryColorObject,
  CelestialClockTypes,
  InstructionItem,
  TabsType,
} from "@/components/celestial_clock/Types";

const TABS: TabsType[] = [
  {
    tabName: "Hora",
    name: "current_hora",
    textColor: "#B57FB3",
    borderColor: "#B57FB3",
  },
  {
    tabName: "Rahukaal",
    name: "rahukaal",
    textColor: "#C1587E",
    borderColor: "#C1587E",
  },
  {
    tabName: "Abhijeet",
    name: "abhijit_muhurta",
    textColor: "#EBB48D",
    borderColor: "#EBB48D",
  },
];

const INSTRUCTIONS: InstructionItem[] = [
  {
    label: "Do this",
    content: "Be disciplined, Work hard, and Plan ahead.",
  },
  {
    label: "Avoid this",
    content:
      "Procrastinating, Starting anything new – finish what you’ve started. This is a time for completion.",
  },
];

const CATEGORYCOLOR: Record<CelestialClockTypes, CategoryColorObject> = {
  current_hora: {
    backgroundColor: "#805AA4",
    planetBackgroundColor: "#6C4392",
    highlightColor: "rgba(255, 255, 255, 0.45)",
  },
  rahukaal: {
    backgroundColor: "#C1587E",
    planetBackgroundColor: "#B1446B",
    highlightColor: "rgba(236, 87, 87, 0.45)",
  },
  abhijit_muhurta: {
    backgroundColor: "#FFC194",
    planetBackgroundColor: "#fff",
    highlightColor: "rgba(255, 246, 143, 0.45)",
  },
};

const DESCRIPITON: Record<CelestialClockTypes, string> = {
  abhijit_muhurta: `Abhijit Muhurata is a very lucky period that occurs almost everyday and is considered ideal for starting important tasks and activities. Any task started during this time is believed to lead to success and favorable outcomes. Abhijit Muhurta is considered a "universal good time" for important activities. It's a great tool to use when planning your day, week, or even your month!`,
  current_hora: `A hora is a unit of time used to determine the best moments for various activities. Each Hora lasts for one hour and is influenced by the characteristics of its ruling planet, which affects the energy of that time period. By using horas to help plan your day, you can maximize your productivity, reduce stress, and achieve the best results from your daily tasks!`,
  rahukaal: `Rahu Kaal is a time of the day that's seen as unlucky for starting anything new or important. It's tied to the shadow planet Rahu, which is known for causing challenges, delays, and disruptions. Rahu Kaal is a time to pause and be patient. It is best to avoid starting anything important during this time. By being mindful of this period and aligning activities with auspicious timings, you can sidestep unnecessary obstacles and enhance the likelihood of success throughout the day!
`,
};

export { TABS, INSTRUCTIONS, CATEGORYCOLOR, DESCRIPITON };
