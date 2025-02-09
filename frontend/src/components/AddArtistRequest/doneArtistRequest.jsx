import done from "../../images/done.png"
import { LightButton2 } from "../UI/Button/button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const DoneArtistRequest = () => {
    const navigate = useNavigate()

    const handleGoArtistCatalog = () => {
        navigate("/catalog-applications")
    }

    const handleGoMyApplications = () => {
        navigate("/my-applications")
    }

    return (
        <div className="h-screen flex flex-col items-center justify-center px-[16px]">
            <img src={done} alt="done" className="mb-[72px]" />
            <div className="w-full"><LightButton2 onClick={handleGoArtistCatalog} text={"Каталог заявок"} /></div>
            <Link to={"/catalog-artist"} className="mt-[12px] w-full underline text-center">Анкеты других артистов</Link>
        </div>
    );
}
 
export default DoneArtistRequest;