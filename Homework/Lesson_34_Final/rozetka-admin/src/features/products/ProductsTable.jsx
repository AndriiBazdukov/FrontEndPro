import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableRow,
    IconButton,
    Paper,
    TableContainer,
    Box,
    Button
} from "@mui/material";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

import {
    fetchProducts,
    addProduct,
    updateProduct,
    deleteProduct
} from "./productsSlice";

export default function ProductsTable({ openEdit, openDeleteModal }) {
    const products = useSelector(state => state.products.products);
    const dispatch = useDispatch();

    return (
        <Box display="flex" flexDirection="column" alignItems="center">
            <TableContainer
                component={Paper}
                sx={{
                    width: "900px",
                    borderRadius: "8px",
                    overflow: "hidden",
                    boxShadow: "0 8px 25px rgba(0,0,0,0.25)"
                }}
            >
                <Table>
                    {/* HEADER */}
                    <TableHead>
                        <TableRow
                            sx={{
                                backgroundColor: "#18a05e"
                            }}
                        >
                            <TableCell sx={{ color: "#fff", fontWeight: 700 }}>ID</TableCell>
                            <TableCell sx={{ color: "#fff", fontWeight: 700 }}>
                                Category
                            </TableCell>
                            <TableCell sx={{ color: "#fff", fontWeight: 700 }}>
                                Name
                            </TableCell>
                            <TableCell sx={{ color: "#fff", fontWeight: 700 }}>
                                Quantity
                            </TableCell>
                            <TableCell sx={{ color: "#fff", fontWeight: 700 }}>
                                Price (₴)
                            </TableCell>
                            <TableCell sx={{ color: "#fff", fontWeight: 700 }}>
                                Actions
                            </TableCell>
                        </TableRow>
                    </TableHead>

                    {/* BODY */}
                    <TableBody>
                        {products.map(p => (
                            <TableRow
                                key={p.id}
                                sx={{
                                    backgroundColor: "#e7e7e7",
                                    "&:nth-of-type(even)": {
                                        backgroundColor: "#dcdcdc"
                                    },
                                    "&:hover": {
                                        backgroundColor: "#b7e4c7",
                                        transition: "0.2s"
                                    }
                                }}
                            >
                                <TableCell>{p.id}</TableCell>
                                <TableCell>{p.category || "—"}</TableCell>
                                <TableCell>{p.title}</TableCell>
                                <TableCell>{p.quantity || 0}</TableCell>
                                <TableCell>{Number(p.price).toLocaleString()}</TableCell>

                                <TableCell>
                                    <IconButton onClick={() => openEdit(p)}>
                                        <EditIcon />
                                    </IconButton>

                                    <IconButton onClick={() => openDeleteModal(p)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>

        </Box>
    );
}
