import React,{useEffect} from "react";
import { Link, useLocation } from "react-router-dom";
import MuiPagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import fetchData from "../../helpers/fetchData";

const Pagination = ({
  cantidad,
  pags,
  setPags,
  setData,
  setLoading,
  categoryID,
}) => {
  const { pathname } = useLocation();

  const handleChange = (event, value) => {
    setPags(value);

    window.scrollTo({
      top: 0,
      behavior: "auto",
    });

    setLoading(true);
    fetchData(setData, setLoading, categoryID, (value - 1) * 30);
  };

  useEffect(() => {
    setPags(1)
  }, [categoryID])// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <MuiPagination
      count={cantidad}
      page={pags}
      onChange={handleChange}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "50px",
      }}
      renderItem={(item) => (
        <PaginationItem
          sx={{
            color: "white",
            fontFamily: "Inter",
            fontSize: "18px",
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
