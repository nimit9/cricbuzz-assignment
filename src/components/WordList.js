import { Paper, Typography } from "@mui/material";

import React from "react";

const WordList = ({ words, searchedWords }) => {
    return (
        <Paper sx={{ width: "30%", p: 4, ml: 8 }} elevation={4}>
            <Typography variant='h4'>Find the words</Typography>
            <ul>
                {words.map((word) => (
                    <li key={word}>
                        {searchedWords.includes(word) ? <s>{word}</s> : word}
                    </li>
                ))}
            </ul>
        </Paper>
    );
};

export default WordList;
