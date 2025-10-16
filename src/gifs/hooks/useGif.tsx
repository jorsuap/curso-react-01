import { useRef, useState } from "react";
import type { Gif } from "../interfaces/interface";
import { getGifsByQuery } from "../actions/get-gif-by-query.actions";

// const gifsCache: Record<string, Gif[]> = {};
export const useGif = () => {
    const [gifList, setGifList] = useState<Gif[]>([]);
    const [previusTerms, setPreviousTerms] = useState<string[]>([]);
    const gifsCache = useRef<Record<string, Gif[]>>({});


    const handleTermClick = async (term: string) => {
        if (gifsCache.current[term]) {
            setGifList(gifsCache.current[term]);
            return;
        }
        const gifs = await getGifsByQuery(term);
        setGifList(gifs);
    };

    const handleSearch = async (query: string) => {
        if (query !== '') {
            query = query.toLowerCase().trim();
            if (!previusTerms.includes(query)) {
                setPreviousTerms([query, ...previusTerms].splice(0, 7));
                const gifs = await getGifsByQuery(query);
                setGifList(gifs);
                gifsCache.current[query] = gifs
            }
        }
    }

    return {
        gifList,
        previusTerms,
        handleTermClick,
        handleSearch
    }
}