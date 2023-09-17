import './css/Container.css';
const Container = ({child, id}) => {
    return (
        <div className="container" id = {id} data-tilt data-tilt-scale="1.0">
            {child}
        </div>
    )
}
export default Container;