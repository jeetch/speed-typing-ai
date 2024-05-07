"use client"

import RestartButton from '@/components/RestartButton';
import Results from '@/components/Results';
import {faker} from '@faker-js/faker'

const words = faker.word.words(10)

export default function Home() {
  return (
    <div>
      <CountdownTimer timeLeft={30} />  
      <GeneratedWords words={words} />  
      <RestartButton className='mx-auto mt-10 text-slate-500' onRestart={() => null}/>
      <Results  
        className="mt-10"
        errors = {10}
        accuracyPercentage = {90}
        total = {100}
      />
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
