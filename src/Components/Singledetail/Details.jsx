

import { useEffect, useState } from "react";
import Detail from "./Detail";
import { useParams } from "react-router-dom";

const Details = () => {
  const [detail, setDetail] = useState({});

  const { id } = useParams();

  useEffect(() => {
    // Fetch the product details based on the _id
    fetch(`https://brand-ass-10-server-cubouic43-mahmuda-sultanas-projects.vercel.app/products/${id}`)
      .then((response) => response.json())
      .then((data) => setDetail(data));
  }, [id]);




  return (
    <div>
      <div>
        <Detail key={detail._id} detail={detail}></Detail>
      </div>
    </div>
  );
};

export default Details;












