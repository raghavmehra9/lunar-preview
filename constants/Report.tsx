import Air from "@/assets/svg/element/Air";
import Earth from "@/assets/svg/element/Earth";
import Fire from "@/assets/svg/element/Fire";
import Water from "@/assets/svg/element/Water";
import { IconDimension } from "@/assets/svg/IconTypes";
import Cardinal from "@/assets/svg/modality/Cardinal";
import Fixed from "@/assets/svg/modality/Fixed";
import Mutable from "@/assets/svg/modality/Mutable";
import {
  AscendantReport,
  Element,
  Modality,
  MoonSignReport,
} from "@/components/report/Types";

const ELEMENT: Record<Element, React.ComponentType<IconDimension>> = {
  Fire: Fire,
  Water: Water,
  Air: Air,
  Earth: Earth,
};
const MODALITY: Record<Modality, React.ComponentType<IconDimension>> = {
  Cardinal: Cardinal,
  Fixed: Fixed,
  Mutable: Mutable,
};

const ASCENDANT_REPORT: { data: AscendantReport } = {
  data: {
    sign: "Gemini",
    symbol: "Twins",
    element: "Air",
    modality: "Mutable",
    rulingPlanets: ["Mercury"],
    traits: {
      good: [
        "Witty",
        "Charming",
        "Intelligent",
        "Adaptable",
        "Curious",
        "Outgoing",
        "Energetic",
        "Communicative",
        "Open-Minded",
      ],
      needsWork: [
        "Restless",
        "Indecisive",
        "Emotionally Detached",
        "Superficial",
        "Easily Distracted",
        "Overthinking",
        "Flighty",
        "Inconsistent",
      ],
    },
    lagna:
      "Gemini is ruled by Mercury, the planet of communication, intellect, and learning. Individuals with Gemini Lagna are quick-witted, talkative, and always eager to learn something new. They bring energy and charm to any situation and easily adapt to different environments. Effortlessly engaging with people from all walks of life!\nWhile they are natural charmers with deep intellect, (read as- can be little know it alls). Geminis need constant stimulation and variety in life. Routine bores them, and they thrive in dynamic, ever-changing situations. They have a sharp mind, a way with words, and a natural ability to entertain, persuade, and connect with others.\nGemini Ascendant can struggle with consistency. They tend to jump from one thing to another—one day, they're obsessed with a new hobby, the next, they've moved on to something completely different. Their biggest challenge is sticking to one thing long enough to see results. Due to the influence of Mercury, their mind is always running at full speed, which can sometimes make them scatterbrained or prone to overthinking. They process emotions intellectually rather than deeply feeling them, which can make them seem emotionally detached or unpredictable.\nGemini Lagna thrive on variety, movement, and mental stimulation. They're natural storytellers and have a witty charming way of expressing themselves. Their adaptable and versatile nature helps them handle change with ease. These are the people who can juggle multiple projects, maintain a wide circle of friends, and pick up new skills effortlessly (and the people who leave you questioning how they seem to be doing it all).",
    loveAndRelationships:
      "In love, Gemini Lagna individuals are fun-loving, charming, and engaging partners. They value intellectual stimulation and communication in their relationships above all else. They tend to fall for people who they find fascinating. Someone who is intelligent, witty, and who can hold their interest along with a conversation.\nGeminis are drawn to variety and excitement, so they value partners who are spontaneous, adventurous, and open to trying new things. They need a relationship that feels fresh and dynamic, since routine and predictability can make them lose interest.\nGeminis also have a flirtatious streak and love the thrill of connecting with others. Tying a Gemini down is a feat in and of itself (they can be little heartbreakers). As they have a tendency to fall in and out of love rather quickly. While they are loyal when they commit, they need freedom and space in a relationship to explore their interests and friendships. Partners who are overly clingy or demanding may struggle to keep their attention.\nDespite their lighthearted and playful nature, Gemini Lagna are capable of deep love when they find someone who balances their need for freedom and intellectual connection with emotional support and understanding.",
    friendship:
      "Geminis are the life of the party! They're outgoing chatterboxes who are always ready for a good time. They love to make you laugh with their killer sense of humor and quick wit. If you're looking for a friend who can keep you entertained and keep the party going, then Gemini Lagna is your person!\nGeminis love to connect with others and have a natural talent for making friends from all walks of life. They thrive on social interaction and are often the ones initiating group chats, planning hangouts, or sparking deep conversations late at night.\nBecause they're so adaptable, they can blend into almost any social setting. They're the friend who can chat about anything—from the latest gossip to deep philosophical ideas, (and everything in between). They have an inner restlessness, which coupled with a short attention span might create issues in maintaining long-term friendships, unless the connection feels exciting and engaging.\nGemini Lagna individuals are great problem-solvers and will often help their friends think through challenges with their sharp minds and logical approach. They can come off as emotionally detached when their friends need deeper emotional support, as they tend to analyze their feelings from a logical perspective rather than an emotional one.",
    careers: [
      "Journalist or Writer",
      "Travel Blogger",
      "Event Planner",
      "Teacher or Professor",
      "Public Speaker",
      "Marketing Specialist",
    ],
  },
};
const MOON_SIGN_REPORT: { data: MoonSignReport } = {
  data: {
    sign: "Aquarius",
    description:
      "If your Moon is in Aquarius, your emotional world is unique, unconventional, and highly intellectual. Ruled by Saturn and Rahu, you have a deep desire for independence, innovation, and forward-thinking ideals. You process emotions through logic and observation rather than raw feeling, which can make you seem detached or emotionally distant at times.\nYou thrive on intellectual stimulation, humanitarian causes, and social change. You are drawn to big ideas, progress, and futuristic thinking, and your emotions are often tied to the greater good rather than personal concerns. Because of this, you may sometimes struggle with deep personal connections, preferring friendships and group dynamics over intense one-on-one emotional intimacy.\nYou don't like being emotionally confined or controlled, and you need freedom to explore your thoughts and ideas. While you enjoy relationships, you may sometimes prioritize independence over emotional closeness. You are more comfortable analyzing emotions from a distance rather than getting too caught up in them.\nIn love, you are loyal, intellectually stimulating, and highly independent. You need a partner who respects your freedom, shares your vision, and engages with you on a mental level. You are not the most emotionally expressive, but you show love through loyalty, open-mindedness, and a shared sense of purpose. Learning to embrace emotional vulnerability and deep personal intimacy will help you create stronger, more fulfilling relationships.\n\n",
    strengths: [
      "You are highly intelligent, innovative, and forward-thinking.",
      "You are emotionally independent and don't rely on others for validation.",
      "Your broad-mindedness makes you open to all kinds of people and experiences.",
    ],
    watchOutFor: [
      "You may struggle with emotional depth and personal vulnerability.",
      "Others may see you as emotionally detached or distant.",
      "You sometimes prioritize friendships or ideals over deep emotional bonds.",
    ],
    loveNeeds: [
      "You need a partner who values intellectual connection and independence.",
      "Emotional drama and clinginess are a turn-off—you prefer a calm, rational approach to love.",
      "You may take time to open up, but once you do, you are a deeply loyal and reliable partner.",
    ],
  },
};

export { ELEMENT, MODALITY, ASCENDANT_REPORT, MOON_SIGN_REPORT };
