import { Box } from "@mui/material";
import React from "react";

const WordGrid = ({ grid, coordinates }) => {
    return (
        <Box sx={{ width: "80%" }}>
            <table>
                <tbody>
                    {grid.map((row, rowIndex) => {
                        return (
                            <tr key={rowIndex}>
                                {[...row].map((letter, colIndex) => (
                                    <td
                                        key={colIndex}
                                        className={
                                            coordinates[
                                                JSON.stringify([
                                                    rowIndex,
                                                    colIndex,
                                                ])
                                            ]
                                                ? "colored"
                                                : ""
                                        }
                                    >
                                        {letter}
                                    </td>
                                ))}
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </Box>
    );
};

export default WordGrid;
