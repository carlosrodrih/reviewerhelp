import {Image} from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import Boton from './boton.png'
function reviewerhelp(review) {

    if (review === null) {
        console.log("No review parsed.")
        return false;
    }
    else {
        console.log("Review found.")
        window.open(`http://localhost:3001/?rev=${review}`, 'popup', 'width=600 , height=600');
    }
}


const RevButton = (review) => {
    <Image src={Boton} onClick={reviewerhelp(review)}></Image>
}

export default RevButton;