import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { IconButton } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";

function createData(name, calories, answer) {
  return { name, calories, answer };
}

const rows = [
  createData(
    "Frozen yoghurt",
    10,
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis enim quaerat aliquam eaque cupiditate, magnam earum maiores veniam dolor voluptates delectus? Magni libero eaque deleniti dolores nihil placeat natus tenetur?"
  ),
  createData(
    "Ice cream sandwich",
    5,
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis enim quaerat aliquam eaque cupiditate, magnam earum maiores veniam dolor voluptates delectus? Magni libero eaque deleniti dolores nihil placeat natus tenetur?"
  ),
  createData(
    "Eclair",
    9,
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis enim quaerat aliquam eaque cupiditate, magnam earum maiores veniam dolor voluptates delectus? Magni libero eaque deleniti dolores nihil placeat natus tenetur?"
  ),
  createData(
    "Cupcake",
    8,
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis enim quaerat aliquam eaque cupiditate, magnam earum maiores veniam dolor voluptates delectus? Magni libero eaque deleniti dolores nihil placeat natus tenetur?"
  ),
  createData(
    "Gingerbread",
    8,
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis enim quaerat aliquam eaque cupiditate, magnam earum maiores veniam dolor voluptates delectus? Magni libero eaque deleniti dolores nihil placeat natus tenetur?"
  ),
];

export default function QuestionList(props) {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead style={{ background: "#1042B2", color: "white" }}>
          <TableRow>
            <TableCell style={{ color: "white" }}>#</TableCell>
            <TableCell style={{ color: "white" }}>Question</TableCell>
            <TableCell style={{ color: "white" }}>Priority</TableCell>
            <TableCell style={{ color: "white" }}>Answer</TableCell>
            {/* <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {i + 1}
              </TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.calories}</TableCell>
              <TableCell>{row.answer}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
