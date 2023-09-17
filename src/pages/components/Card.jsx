import Container from "./Container"
import './css/Card.css'

const Card = ({titleAsset, asset, id}) => {
    return (
        // <div className="cardz">
            <Container 
                id = {id}
                child = {
                    <div className = 'cardz' id = {'cardz-' + id}>
                        <div className= 'top'>
                            {/* "portfolios" */}
                            {asset}
                        </div>

                        <div className = 'bottom'>
                            {titleAsset}
                        </div>
                    </div>
                }
            /> 
        // </div>
    )
}

export default Card