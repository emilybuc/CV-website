import Typewriter from 'typewriter-effect'

const TypeWriter = () => {
    return (
        <Typewriter
            onInit={(typewriter) => {
                typewriter
                    .typeString("Cat Hugger")
                    .pauseFor(2000)
                    .changeDeleteSpeed(10)
                    .deleteAll()
                    .typeString("Full Stack JS Developer")
                    .start()
            }}
        />
    )
}

export default TypeWriter;