import React from "react";
import Spinner from "../../icons/Spinner";

const Loader = ({ visible }) => {
	return (
    <>
      {
        visible ? (
          <Spinner />
        ) : (
          ""
        )
      }
    </>
  );
};

export default Loader;
