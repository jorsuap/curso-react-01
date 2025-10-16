import type { Gif } from "../interfaces/interface"

interface Props {
    gifList: Gif[]
}

const ListGifApp = ({ gifList }: Props) => {
    return (
        <div className="gifs-container">
            {
                gifList.map((gif) => (
                    <div key={gif.id} className="gif-card">
                        <img src={gif.url} alt={gif.title} />
                        <h3>{gif.title}</h3>
                        <p>
                            {gif.width}x{gif.height} (1.5mb)
                        </p>
                    </div>
                ))
            }
        </div>
    )
}

export default ListGifApp
