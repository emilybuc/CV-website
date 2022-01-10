import Typewriter from 'typewriter-effect'
import { Container } from './TypeWriter.styles'

const TypeWriter = () => {
    return (
        <Container>
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
        </Container >
    )
}

export default TypeWriter;