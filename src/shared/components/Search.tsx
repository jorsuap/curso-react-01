import { useEffect, useState, type KeyboardEvent } from "react";

interface Props {
    placeHolder?: string;
    onQuery: (query: string) => void
}

const Search = ({ placeHolder = 'Buscar', onQuery }: Props) => {
    const [query, setQuery] = useState('');

    useEffect(() => {
        const timeId = setTimeout(() => {
            onQuery(query);
        }, 700);

        return () => {
            //funcion de limpieza, cuando se desmonta el componente o se dispara el effecto
            clearTimeout(timeId);
        }
    }, [query, onQuery]);//dependencia de cambio

    const handleSearch = () => {
        onQuery(query);
        setQuery('');
    };

    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
        if (event.code === 'Enter') {
            handleSearch();
        }
    };

    return (
        <div className="search-container">
            <input
                type="text"
                placeholder={placeHolder}
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                onKeyDown={handleKeyDown}
            />
            <button
                onClick={handleSearch}
            >Buscar</button>
        </div>
    )
}

export default Search