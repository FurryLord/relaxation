import { NavibarBack } from "../Index_page/Navbar/NaviBarBack"
import { Test } from "./components/Test"
// @ts-ignore
import stylesMain from "../main.module.css"
// @ts-ignore
import stylesPsy from "./Psy.module.css"

// eslint-disable-next-line import/prefer-default-export
export function Test1() {
  const questionContent1 = [
    {
      question: "What is your main positive quality?",
      answers: [
        {
          type: "Water",
          content: "Empathy",
        },
        {
          type: "Earth",
          content: "Restraint",
        },
        {
          type: "Air",
          content: "Openness",
        },
        {
          type: "Fire",
          content: "Independence",
        },
      ],
    },
    {
      question: "What about negative quality?",
      answers: [
        {
          type: "Earth",
          content: "Straightforwardness",
        },
        {
          type: "Air",
          content: "Discontinuity",
        },
        {
          type: "Fire",
          content: "Hot-tempered",
        },
        {
          type: "Water",
          content: "Touchy-feely",
        },
      ],
    },
    {
      question: "How would you react if you were offended?",
      answers: [
        {
          type: "Fire",
          content: "Shout mean things back",
        },
        {
          type: "Water",
          content: "I will be very unpleasant. I may even cry",
        },
        {
          type: "Earth",
          content: "I offend for a long time only if it is something serious",
        },
        {
          type: "Air",
          content: "I forget offences quickly",
        },
      ],
    },
    {
      question: "What is your favorite film genre",
      answers: [
        {
          type: "Air",
          content: "Comedy",
        },
        {
          type: "Fire",
          content: "Thriller",
        },
        {
          type: "Water",
          content: "Drama",
        },
        {
          type: "Earth",
          content: "Action",
        },
      ],
    },
    {
      question: "How do you spend your weekends?",
      answers: [
        {
          type: "Earth",
          content: "With family",
        },
        {
          type: "Air",
          content: "With friends",
        },
        {
          type: "Water",
          content: "Alone",
        },
        {
          type: "Fire",
          content: "At parties",
        },
      ],
    },
    {
      question: "How would you spend a million dollars?",
      answers: [
        {
          type: "Water",
          content: "Charity",
        },
        {
          type: "Air",
          content: "Entertainment",
        },
        {
          type: "Fire",
          content: "My business",
        },
        {
          type: "Earth",
          content: "Real estate",
        },
      ],
    },
  ]

  const resultContent1 = [
    {
      result: "Water",
      description:
        "Empathy is your middle name, you subtly feel the mood of your interlocutor, you know how to find the right words. And you also love to be alone with yourself.",
      imageURL: "https://i.pinimg.com/564x/98/85/5b/98855b048c163a95b400bb3df78a0757.jpg",
    },
    {
      result: "Earth",
      description:
        "If anyone can be relied upon in this life, it is you. You are pragmatic, goal-oriented, and you forgive insults easily (unless, of course, they are betrayals).",
      imageURL: "https://i.pinimg.com/originals/69/b2/c6/69b2c6f41e85eca7ab5f8bb9aaf7eecf.jpg",
    },
    {
      result: "Fire",
      description:
        "Temperamental, hot-tempered, but resilient. You know perfectly well what you want and go to the goal like an armored train.",
      imageURL: "https://i.pinimg.com/originals/33/0a/aa/330aaa49e4e4e4cbfc3b1f5b46d88333.jpg",
    },
    {
      result: "Air",
      description:
        "The easiest of all the elements. You're like a chameleon, adjusting to people and circumstances without detriment to yourself. And you look for the positives everywhere.",
      imageURL: "https://s8.favim.com/orig/150411/aesthetics-air-art-beauty-Favim.com-2640135.jpg",
    },
    {
      result: "Undetermined",
      description:
        "You combine the traits of several elements at once. A multifaceted and ambiguous personality.",
      imageURL: "https://i.pinimg.com/474x/ba/a7/72/baa772c9219145a7fa32ec87ba062bb7.jpg",
    },
  ]  

  return (
    <body className={stylesMain.body}>
      <NavibarBack />
      <h1 className={stylesPsy.headline}>What element are you?</h1>
      <Test questionContent={questionContent1} resultContent={resultContent1} />
    </body>
  )
}
