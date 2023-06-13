import React from "react";
import { CircleLoading, TextLoading } from "../../assets/images";

import styles from "./Loading.module.scss";

const Loading = ({ modifierClass }) => {
	return (
		<div className={`${styles.loading} ${modifierClass}`}>
			<img src={CircleLoading} className="" alt="" />
			<TextLoading />
		</div>
	);
};

/*
  //Insert this code to implement loading:

  import { useEffect, useState } from "react";
  import Loading from "../../components/Loading"; //Importing Loading

  Inside react function:
  const [loading, setLoading] = useState(false); //useState

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
        setLoading(false);
    }, 1000);
  }, []); // Loading setting, set to 1 second loading screen

  then create a ternary operation:
  return (
    <>
      {
        loading ?
        <Loading /> //Use the imported Loading
        :
        <div><p></p>Any div to be displayed after the loading.</p></div>
      }
    </>
  )
*/

export default Loading;
