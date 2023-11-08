import './css/Podium.css';

const Pillar = (total, num, title, display) => {
    const pillHeight = (100 - num * 10);
    const pillWidth = (90 / total);

    let posLeft = Math.ceil(num/2);
    if (num % 2 === 0 ) {posLeft = -posLeft;}

    const pillTransform = 'translateX(' + (posLeft * 100) + '%)';

    return (
        <div className="pillar" id = {'pillar' + num} style={
            {
                // backgroundColor:,
                height: pillHeight + '%',
                width: pillWidth + '%',
                transform: pillTransform,
                zIndex: 1000 - num,
            }
        }>
            
            <div className="pillar-display">{display}</div>

            <div className="pillar-body">
                <div className="pillar-title">{title}</div>
            </div>
        </div>
    )
}

const Podium = (data) => {
    const total = data.prizes.length;
    let pillarcount = 0;

    return (
        <div className="podium">
            {data.prizes.map(prize => {
                return (
                    Pillar(total, pillarcount++, prize,)
                )
            })}
        </div>
    )
}
export default Podium;