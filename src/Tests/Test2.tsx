import { NavibarBack } from "../Index_page/Navbar/NaviBarBack"
import { Test } from "./components/Test"
// @ts-ignore
import stylesMain from "../main.module.css"
// @ts-ignoreFА
import stylesPsy from "./Psy.module.css"

// eslint-disable-next-line import/prefer-default-export
export function Test2() {
  const questionContent2 = [
    {
      question: "The most important thing in life:",
      answers: [
        {
          type: "Ravenclaw",
          content: "Career success",
        },
        {
          type: "Hufflepuff",
          content: "Friendships and relationships",
        },
        {
          type: "Gryffindor",
          content: "Adventurousness and a pure heart",
        },
        {
          type: "Slytherin",
          content: "Wealth and respect of others",
        },
      ],
    },
    {
      question: "What books appeal to you the most?",
      answers: [
        {
          type: "Gryffindor",
          content: "With unexpected twists and turns",
        },
        {
          type: "Hufflepuff",
          content: "Atmospheric, with well-developed characters",
        },
        {
          type: "Ravenclaw",
          content: "Useful",
        },
        {
          type: "Slytherin",
          content: "Complex and meaningful to world culture",
        },
      ],
    },
    {
      question: "What do you appreciate most about people?",
      answers: [
        {
          type: "Ravenclaw",
          content: "Hard work",
        },
        {
          type: "Gryffindor",
          content: "Courage",
        },
        {
          type: "Slytherin",
          content: "Cunning",
        },
        {
          type: "Hufflepuff",
          content: "Honesty",
        },
      ],
    },
    {
      question: "How do you behave in a dangerous situation?",
      answers: [
        {
          type: "Ravenclaw",
          content: "I will carefully analyze everything and come up with a plan",
        },
        {
          type: "Hufflepuff",
          content: "I try not to get into trouble",
        },
        {
          type: "Slytherin",
          content: "I am the cause of the danger",
        },
        {
          type: "Gryffindor",
          content: "The first thing I'll do is save everyone else",
        },
      ],
    },
    {
      question: "How do you want to live your life?",
      answers: [
        {
          type: "Hufflepuff",
          content: "Calm and measured, no surprises.",
        },
        {
          type: "Gryffindor",
          content: "What's life without action?",
        },
        {
          type: "Ravenclaw",
          content: "I dream to never stop developing myself.",
        },
        {
          type: "Slytherin",
          content: "I want to earn as much money as possible and not be deprived of anything",
        },
      ],
    },
    {
      question: "What gift would you like to receive?",
      answers: [
        {
          type: "Ravenclaw",
          content: "A smart and useful book",
        },
        {
          type: "Hufflepuff",
          content: "A handmade gift, as long as it's from the heart",
        },
        {
          type: "Gryffindor",
          content: "Something memorable: a balloon ride or a parachute jump",
        },
        {
          type: "Slytherin",
          content: "Money",
        },
      ],
    },
    {
      question: "What style of clothing do you prefer?",
      answers: [
        {
          type: "Slytherin",
          content: "Expensive, high quality",
        },
        {
          type: "Hufflepuff",
          content: "What's important is that it's comfortable",
        },
        {
          type: "Gryffindor",
          content: "Something unusual and original",
        },
        {
          type: "Ravenclaw",
          content: "Simple and neat",
        },
      ],
    },
  ]
  
  const resultContent2 = [
    {
      result: "Gryffindor",
      description:
        "This is the faculty of the honest, noble and... a little reckless bravery. You love to do heroic deeds and are willing to do anything for justice. The graduates of Gryffindor: Harry Potter and Albus Dumbledore.",
      imageURL: "https://i.pinimg.com/564x/00/09/79/000979fd0c8dde64e588734f102c7fd4.jpg",
    },
    {
      result: "Hufflepuff",
      description:
        "Your strongest trait is your ability to work to a perfect result. You are a great comrade and always ready to stand up for your loved ones. By the way, Hufflepuff has produced the least number of dark wizards. Graduates of Hufflepuff: Cedric Diggory and Newt Salamander.",
      imageURL:
        "https://i.pinimg.com/564x/60/a1/ca/60a1ca13fc1e53bc38c46af008991107--cozy-knit-hufflepuff-pride.jpg",
    },
    {
      result: "Ravenclaw",
      description:
        "Those who are constantly reaching for new knowledge are valued here. You solve every difficulty with your mind and logic. Your brain is your greatest weapon. Graduates of Ravenclaw: Luna Lovegood and Zhou Chang.",
      imageURL: "https://i.pinimg.com/550x/af/1f/bd/af1fbd430a8ae1c548115ae91b432cab.jpg",
    },
    {
      result: "Slytherin",
      description:
        "You know your worth! You see the goal and know how to achieve it. You are a natural-born leader and easily make a spectacular impression on people you talk to. Graduates of Slytherin: Draco Malfoy and Severus Snape.",
      imageURL: "https://trikky.ru/wp-content/blogs.dir/1/files/2019/02/02/4I5iDf0.jpg",
    },
    {
      result: "Undetermined",
      description:
        "Your personality fits several Hogwarts houses at once. Listen to your heart and it will tell you which house should be yours.",
      imageURL: "https://i.pinimg.com/originals/c2/34/87/c23487e1d5a1bb12fa705f1d796e463a.jpg",
    },
  ]
  
  return (
    <body className={stylesMain.body}>
      <NavibarBack />
      <h1 className={stylesPsy.headline}>Your Hogwarts House</h1>
      <Test questionContent={questionContent2} resultContent={resultContent2} />
    </body>
  )
}
