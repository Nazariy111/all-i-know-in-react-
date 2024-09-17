import axios from "axios";
import { useEffect, useState } from "react"
import { getPhotoByQuery } from "../../redux/vanillaHttp/vanillaOperations";
import VanillaList from "../../components/VanillaList/VanillaList";
import toast from "react-hot-toast";

const VanillaHttpPage = () => {
    const [searchWord, setSearchWord] = useState("");
    const [photos, setPhotos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    

    const onSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        console.log(form.elements.searchWord.value);
        const mySearchWord = e.target.elements.searchWord.value;
        if (mySearchWord.trim() === '') {
            toast.error('please enter search word')
            return

        }
        setSearchWord(e.target.elements.searchWord.value);
        form.reset();
    }
    
    useEffect(() => { 
        const fetchPhotos = async () => {
            try {
                setIsLoading(true);
                const response = await getPhotoByQuery(searchWord);
                setPhotos(response.data.results);
                setIsLoading(false)
            } catch (error) {
                toast.error(error.message);          
            } finally {
                setIsLoading(false);
            }
        }
        
        if (searchWord !== "") {
            fetchPhotos();
        }

                
    }, [searchWord]);
    
    return (
        <div>
            <h3>Vanilla HTTP</h3>
            <p>here we are using Unsplash api</p>
            <p>your search word: {searchWord }</p>
            <form onSubmit={ onSubmit}>
                <input type="text" name="searchWord" placeholder="find image" />
                <button type="submit">search</button>
            </form>
            {isLoading && <p>loading..please wait</p>}

            <div>
                { (photos.length > 0) && <VanillaList photos={ photos} />}

            </div>
            
        </div>
    )
}

export default VanillaHttpPage