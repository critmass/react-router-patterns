import {
    Card,
    CardHeader,
    CardImg,
    CardTitle
} from "reactstrap"
import React from "react"
import { Link } from "react-router-dom"

const DogCard = ({dog}) => {
    return (
        <Link to={`/dogs/${dog.name}`}>
            <Card>
                <CardHeader>
                    <CardTitle>
                        {dog.name}
                    </CardTitle>
                </CardHeader>
                <CardImg src={dog.src}/>
            </Card>
        </Link>
    )
}

export default DogCard