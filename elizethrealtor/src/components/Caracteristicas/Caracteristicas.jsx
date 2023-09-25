import './Caracteristicas.css'

const Caracteristicas = () => {
    const carac = [
        {
            title: "Baños",
            res: "2"
        },
        {
            title: "Baños",
            res: "2"
        },
        {
            title: "Baños",
            res: "2"
        },
        {
            title: "Baños",
            res: "2"
        },
        {
            title: "Baños",
            res: "2"
        },
        {
            title: "Baños",
            res: "2"
        },
        {
            title: "Baños",
            res: "2"
        },
        {
            title: "Baños",
            res: "2"
        },
        {
            title: "Baños",
            res: "2"
        },
        {
            title: "Baños",
            res: "2"
        },
        {
            title: "Baños",
            res: "2"
        },
        {
            title: "Baños",
            res: "2"
        },
        {
            title: "Baños",
            res: "2"
        },
        {
            title: "Baños",
            res: "2"
        },
    ]

    return(
        <div className='contCarc'>
            <div className='Carac'>
                {carac.map((item) => (
                    <div className='containerCarac'>
                        <div className='containerTitle'>
                            <p className='titleCarac'>{item.title}</p>
                        </div>
                        <div className='containerRes'>
                            <p className='resCarac'>{item.res}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Caracteristicas