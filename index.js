
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


const RevButton = () => <img id="button" src="boton.png" onclick="reviewerhelp('dwdw')"></img>

module.exports.reviewerhelp = RevButton;