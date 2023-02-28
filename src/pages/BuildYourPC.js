import { useEffect, useState } from "react";
import Loading from "../components/Loading";

const BuildYourPC = ({ title }) => {
  document.title = title;
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <div>
      { loading ? 
        <Loading />
       : 
        <p>Build your PC</p>
      }
      
    </div>

  )
}

export default BuildYourPC