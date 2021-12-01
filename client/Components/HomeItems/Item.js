import {
  Table,
  TableCell,
  TableHead,
  TableRow,
  Button,
  Menu,
} from "@mui/material";
import React, { useState } from "react";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  inputs: {
    width: "200px",
    height: "300px",
    padding: "2%",
    paddingLeft: "5%",
    fontWeight: "bolder",
    fontSize: "15px",
    justifyContent: "space-around",
  },
  save: {
    color: "white",
    backgroundColor: "#1abc9c",
    border: "none",
    borderRadius: "3px",
  },
  savebutton: {
    padding: "2%",
    paddingLeft: "5%",
  },
  searchicon: {
    cursor: "pointer",
  },
}));

function Items() {
  const classes = useStyles();
  const headings = [
    "NAME",
    "USAGE UNIT",
    "DESCRIPTION",
    "RATE",
    "SKU",
    "SHOW IN STORE",
    "TYPE",
  ];
  const [checkedState, setCheckedState] = useState(
    new Array(headings.length).fill(false)
  );
  const [indexes, setIndexes] = useState(new Array(headings.length));
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  //   const handleIndex=(position)=>{
  //   setIndexes(indexes.push(position));
  //   }
  const handleSave = (position) => {
    const updatedCheckedState = checkedState.map((item, index) =>
      index === position ? !item : item
    );

    setCheckedState(updatedCheckedState);
  };
  return (
    <div>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>
              <Button
                id="basic-button"
                aria-controls="basic-menu"
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <img src="https://img.icons8.com/ios-glyphs/24/000000/add-property.png" />
              </Button>
              <Menu
                elevation={0.5}
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                  "aria-labelledby": "basic-button",
                }}
              >
                <div className={classes.inputs}>
                  {headings.map((item, index) => (
                    <div>
                      <input
                        key={index}
                        type="checkbox"
                        checked={checkedState[index]}
                        onChange={() => handleSave(index)}
                      />
                      {item}
                      <br />
                    </div>
                  ))}
                </div>
                <div className={classes.savebutton}>
                  <hr />
                  <Button
                    onClick={() => handleSave(0)}
                    className={classes.save}
                  >
                    Save
                  </Button>{" "}
                  <Button onClick={handleClose}>Cancel</Button>
                </div>
              </Menu>
            </TableCell>
            {headings.map((item, index) => (
              <TableCell key={index} align={index != 0 ? "right" : "left"}>
                {item}
              </TableCell>
            ))}
            <TableCell align="right">
              <img
                className={classes.searchicon}
                src="https://img.icons8.com/material-outlined/24/000000/search--v1.png"
              />
            </TableCell>
          </TableRow>
        </TableHead>
      </Table>
      <div
        style={{
          opacity: "0.8",
          cursor: "pointer",
          justifyContent: "center",
          textAlign: "center",
          padding: "1%",
        }}
      >
        <p>Goods and Services, if they have a price tag, put them here.</p>
      </div>
    </div>
  );
}

export default Items;
