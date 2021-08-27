import { Redirect, useParams } from "react-router-dom"


const Solution = () => {

    const {opp, num1, num2} = useParams()

    let result

    const x = Number(num1)
    const y = Number(num2)

    switch (opp) {
        case "add":
            result = x + y
            break;
        case "subject":
            result = x - y
            break
        case "multiply":
            result = x * y
            break
        case "divide":
            result = x / y
            break
        default:
            return <Redirect to="/calc"/>
    }

    return <h1>{result}</h1>

}

export default Solution