import {faker} from '@faker-js/faker'

const words = faker.word.words(10)

export default function Home() {
  return (
    <div>
      <CountdownTimer timeLeft={30} />  
      <GeneratedWords words={words} />  
    </div>
  );
}

const GeneratedWords = ({words} : {words: string}) => {
  return (
    <div className="text-center text-4xl text-slate-500">
        {words}   
    </div>
  ) 
}
const CountdownTimer = ({timeLeft} : {timeLeft: number}) => {
  return (
    <h2 className="text-primary-400 font-medium">
        Time Left: {timeLeft} s
    </h2>
  ) 
}
