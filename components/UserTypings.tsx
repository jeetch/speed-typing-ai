

const UserTypings = ({
    userInput,
    className
} : {
    userInput: string;
    className?: string;
}) => {

    const typedCharacters = userInput.split("");

    return (
        <div className={className}>
            {typedCharacters.map((char, index) => {
                return (
                    <Character key={`${index}_${char}`} char={char} />
                )
            })}
        
        </div>
    )
};


const Character = ({char} : {char:string}) => {
    return <span className="text-primary-400">{char}</span>
}


export default UserTypings;
