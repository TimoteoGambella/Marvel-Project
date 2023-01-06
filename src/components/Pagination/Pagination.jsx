import React from "react";
import { Link, useLocation } from "react-router-dom";
import MuiPagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import fetchData from "../../helpers/fetchData";

const Pagination = ({cantidad,pags,setPags, setData,setLoading,categoryID}) => {
  const { pathname } = useLocation();

  const handleChange = (event, value) => {
    setPags(value)

    window.scrollTo({
        top: 0,
        behavior: 'auto',
    });

    setLoading(true)
    fetchData(setData, setLoading, categoryID, value*30);
  };

  return (
    <MuiPagination
      count={cantidad}
      page={pags}
      onChange={handleChange}
      renderItem={(item) => (
        <PaginationItem
            sx={{
                color:"white"
            }}
          component={Link}
          to={`${pathname}`}
          {...item}
        />
      )}
    />
  );
};

export default Pagination;