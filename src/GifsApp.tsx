
import ListGifApp from "./gifs/components/ListGifApp"
import PreviusSearchesApp from "./gifs/components/PreviusSearchesApp"
import CustomHeader from "./shared/components/CustomHeader"
import Search from "./shared/components/Search"
import { useGif } from "./gifs/hooks/useGif"

const GifsApp = () => {
    const {
        gifList,
        handleSearch,
        handleTermClick,
        previusTerms
    } = useGif();
    return (
        <>
            <CustomHeader title="Buscador de Gif" description="Descrube y comparte tus gif" />
            <Search
                placeHolder="Buscar"
                onQuery={handleSearch}
            ></Search>
            <PreviusSearchesApp
                searches={previusTerms}
                onLabelclick={handleTermClick}
            ></PreviusSearchesApp>
            <ListGifApp gifList={gifList}></ListGifApp>
        </>
    )
}

export default GifsApp
