import { Box, Button, MenuItem, TextField } from "@mui/material";
import { ErrorAlert, SuccessAlert } from "./CustomAlert";
import React, { useEffect, useState } from "react";

import WordGrid from "./WordGrid";
import WordList from "./WordList";
import { puzzles } from "../utils.js/puzzle";
import searchWord from "../utils.js/searchWord";

const HomePage = () => {
    const [currentPuzzle, setCurrentPuzzle] = useState(0);
    const [input, setInput] = useState("");
    const [searchedCoordinates, setSearchedCoordinates] = useState({});
    const [searchedWords, setSearchedWords] = useState([]);
    const [showError, setShowError] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const handleInputChange = (e) => {
        e.preventDefault();
        setInput(e.target.value.toUpperCase());
    };

    const handleChangePuzzle = (e) => {
        e.preventDefault();
        setInput("");
        setSearchedCoordinates({});
        setSearchedWords([]);
        setCurrentPuzzle(e.target.value);
    };

    const handleSubmit = () => {
        if (puzzles[currentPuzzle].find_words.includes(input)) {
            const coordinates = searchWord(
                puzzles[currentPuzzle].Alphabet_grid,
                input
            );
            if (coordinates) {
                setInput("");
                setSearchedCoordinates({
                    ...searchedCoordinates,
                    ...coordinates,
                });
                setSearchedWords([...searchedWords, input]);
            } else {
                setShowError(true);
            }
        } else {
            setShowError(true);
        }
    };

    useEffect(() => {
        if (searchedWords.length === puzzles[currentPuzzle].find_words.length) {
            setShowSuccess(true);
        }
        // eslint-disable-next-line
    }, [searchedWords]);

    const handleClose = (event, reason) => {
        if (reason === "clickaway") {
            return;
        }
        if (showSuccess) {
            setInput("");
            setSearchedCoordinates({});
            setSearchedWords([]);
        }
        setShowError(false);
        setShowSuccess(false);
    };

    return (
        <>
            {showSuccess && <SuccessAlert open handleClose={handleClose} />}
            {showError && (
                <ErrorAlert open={showError} handleClose={handleClose} />
            )}
            <Box
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                    mt: 2,
                }}
            >
                <TextField
                    select
                    label='Select a puzzle'
                    value={currentPuzzle}
                    onChange={handleChangePuzzle}
                    sx={{ width: 200 }}
                    InputProps={{
                        readOnly: showError,
                    }}
                >
                    {Array.from(Array(puzzles.length).keys()).map(
                        (_, index) => {
                            return (
                                <MenuItem key={index} value={index}>
                                    Puzzle {index + 1}
                                </MenuItem>
                            );
                        }
                    )}
                </TextField>
                <Box
                    sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                    }}
                >
                    <TextField
                        label='Enter the word'
                        value={input}
                        onChange={handleInputChange}
                        type='search'
                        InputProps={{
                            readOnly: showError || showSuccess,
                        }}
                    />
                    <Button
                        onClick={handleSubmit}
                        variant='contained'
                        size='large'
                        disabled={!input.length}
                    >
                        Search
                    </Button>
                </Box>
            </Box>
            <Box
                sx={{
                    display: "flex",
                    alignItems: "start",
                    width: "100%",
                    mt: 4,
                    gap: 5,
                }}
            >
                <WordList
                    words={puzzles[currentPuzzle].find_words}
                    searchedWords={searchedWords}
                />
                <WordGrid
                    grid={puzzles[currentPuzzle].Alphabet_grid}
                    coordinates={searchedCoordinates}
                />
            </Box>
        </>
    );
};

export default HomePage;
