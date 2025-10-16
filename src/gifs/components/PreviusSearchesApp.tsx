import { type FC } from "react";

interface Props {
    searches: string[];
    onLabelclick: (term: string) => void
}

const PreviusSearchesApp: FC<Props> = ({ searches, onLabelclick }) => {
    return (
        <div className="previous-searches">
            <h2>Busquedas previas</h2>
            <ul className="previous-searches-list">
                {
                    searches.map((term) => (
                        <li
                            key={term}
                            onClick={() => onLabelclick(term)}
                        >{term}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default PreviusSearchesApp
