import React from "react";
import List from "../List";
import { DivStyle } from "../Home";

function jsxhandler(isLoading, data, name, media_type, type) {
  return (
    <DivStyle>
      {isLoading ? (
        <div className="nfLoader"></div>
      ) : (
        <List datas={data} name={name} media_type={media_type} type={type} />
      )}
    </DivStyle>
  );
}

export default jsxhandler;
