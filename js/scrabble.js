// <!--
// File: scrabble.js
// GUI Assignment: Implementing a Bit of Scrabble with Drag-and-Drop
// Javier Solares, UMass Lowell Computer Science, Javier_Solares@student.uml.edu
// Copyright (c) 2023 by Javier. All rights reserved. May be freely copied or
// excerpted for educational purposes with credit to the author.
// updated by JS on December, 2023 at 11:38 PM
// Description: This is the javascript code for the Scrabble Game.
// I create an associative array in which stores all 100 letter tiles and their
// respective images. It also holds the point value of each letter and the number remaining.
// I used jquery to append draggable tiles onto the droppable blocks and updated the score
// accordingly. I also kept track of the current word and continuously updated it every time
// a letter block was dragged away/dropped in. 
// -->

var ScrabbleTiles = [] ;
ScrabbleTiles["A"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9, "image" : "img/Scrabble_Tiles/Scrabble_Tile_A.jpg"  } ;
ScrabbleTiles["B"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tiles/Scrabble_Tile_B.jpg"  } ;
ScrabbleTiles["C"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tiles/Scrabble_Tile_C.jpg"  } ;
ScrabbleTiles["D"] = { "value" : 2,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "img/Scrabble_Tiles/Scrabble_Tile_D.jpg"  } ;
ScrabbleTiles["E"] = { "value" : 1,  "original-distribution" : 12, "number-remaining" : 12, "image" : "img/Scrabble_Tiles/Scrabble_Tile_E.jpg"  } ;
ScrabbleTiles["F"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tiles/Scrabble_Tile_F.jpg"  } ;
ScrabbleTiles["G"] = { "value" : 2,  "original-distribution" : 3,  "number-remaining" : 3, "image" : "img/Scrabble_Tiles/Scrabble_Tile_G.jpg"  } ;
ScrabbleTiles["H"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tiles/Scrabble_Tile_H.jpg"  } ;
ScrabbleTiles["I"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9, "image" : "img/Scrabble_Tiles/Scrabble_Tile_I.jpg"  } ;
ScrabbleTiles["J"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1, "image" : "img/Scrabble_Tiles/Scrabble_Tile_J.jpg"  } ;
ScrabbleTiles["K"] = { "value" : 5,  "original-distribution" : 1,  "number-remaining" : 1, "image" : "img/Scrabble_Tiles/Scrabble_Tile_K.jpg"  } ;
ScrabbleTiles["L"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "img/Scrabble_Tiles/Scrabble_Tile_L.jpg"  } ;
ScrabbleTiles["M"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tiles/Scrabble_Tile_M.jpg"  } ;
ScrabbleTiles["N"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image" : "img/Scrabble_Tiles/Scrabble_Tile_N.jpg"  } ;
ScrabbleTiles["O"] = { "value" : 1,  "original-distribution" : 8,  "number-remaining" : 8, "image" : "img/Scrabble_Tiles/Scrabble_Tile_O.jpg"  } ;
ScrabbleTiles["P"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tiles/Scrabble_Tile_P.jpg"  } ;
ScrabbleTiles["Q"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1, "image" : "img/Scrabble_Tiles/Scrabble_Tile_Q.jpg"  } ;
ScrabbleTiles["R"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image" : "img/Scrabble_Tiles/Scrabble_Tile_R.jpg"  } ;
ScrabbleTiles["S"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "img/Scrabble_Tiles/Scrabble_Tile_S.jpg"  } ;
ScrabbleTiles["T"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image" : "img/Scrabble_Tiles/Scrabble_Tile_T.jpg"  } ;
ScrabbleTiles["U"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image" : "img/Scrabble_Tiles/Scrabble_Tile_U.jpg"  } ;
ScrabbleTiles["V"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tiles/Scrabble_Tile_V.jpg"  } ;
ScrabbleTiles["W"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tiles/Scrabble_Tile_W.jpg"  } ;
ScrabbleTiles["X"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1, "image" : "img/Scrabble_Tiles/Scrabble_Tile_X.jpg"  } ;
ScrabbleTiles["Y"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tiles/Scrabble_Tile_Y.jpg"  } ;
ScrabbleTiles["Z"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1, "image" : "img/Scrabble_Tiles/Scrabble_Tile_Z.jpg"  } ;
// ScrabbleTiles["_"] = { "value" : 0,  "original-distribution" : 2,  "number-remaining" : 2, "image" : "img/Scrabble_Tiles/Scrabble_Tile_Blank.jpg"  } ;


$(document).ready(function () {
    // This function shuffles all of the letter from the ScrabbleTiles array
    function shuffleScrabbleTiles(obj) {
        var keys = [];
    
        for (var letter in obj) {
            if (obj.hasOwnProperty(letter)) {
                for (let i = 0; i < obj[letter]["original-distribution"]; i++) {
                    keys.push(letter);
                }
            }
        }

        // Shuffling the array
        for (let i = keys.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [keys[i], keys[j]] = [keys[j], keys[i]];
        }

        // Returns the 7 letters that are selected
        return keys.slice(0, 7);
    }   

    var shuffledKeys = shuffleScrabbleTiles(ScrabbleTiles);


    function calculateScore(word) {
        // Checks to see if the string contains a '-'
        if (word.includes('-')) {
            // Display an error message
            $("#errorMessage").text("Invalid word: The word can't have any gaps in between.");
            return;
        }

        var score = 0;

        // Looping through each letter in the word string and adds up the score
        for (var i = 0; i < word.length; i++) {
            var letter = word[i];
            if (ScrabbleTiles.hasOwnProperty(letter)) {
                console.log(`Letter: ${letter}, Value: ${ScrabbleTiles[letter].value}, Remaining Tiles: ${ScrabbleTiles[letter]["number-remaining"]-1}`);
                score += ScrabbleTiles[letter].value;
            }
        }

        // If both doubleScoreTargetBlocks contain letterTile, then multiply by 4; if only one does, multiply by 2
        if ($('.doubleScoreTargetBlock').not(':has(.letterTile)').length === 0) {
            score *= 4;
        } else if ($('.doubleScoreTargetBlock').not(':has(.letterTile)').length === 1) {
            score *= 2;
        }

        return score;
    }
    
    // This variable will store the current word
    var currentWord = "";

    // This initializes the letters after shuffling keys
    var lettersSelected = shuffledKeys.slice(0, 7);

    updateTileHolder();

    $(".letterTile").draggable({
        revert: "invalid"    
    });
        
    // This makes targetBlock and doubleScoreTargetBlock droppable
    $(".targetBlock, .doubleScoreTargetBlock").droppable({
        accept: ".letterTile",
        drop: function(event, ui) {
            // Checks if the letter is in a droppable block
            if ($(this).find('.letterTile').length === 0) {
                var targetCenterX = $(this).width() / 2;
                var targetCenterY = $(this).height() / 2;

                ui.helper.css({
                    left: targetCenterX - ui.helper.width() / 1.7,
                    top: targetCenterY - ui.helper.height() / 1.25
                });

                // This appends the letter to the target
                ui.helper.appendTo($(this));

                updateCurrentWord();

                $(this).data('occupied', true);
            } else {
                ui.helper.draggable('option', 'revert', true);
            }
        }
    });

    // This is for the rack that holds the letters; makes it ui-droppable
    $("#tileHolder").droppable({
        accept: ".letterTile",
        drop: function (event, ui) {
            returnLetterToTileHolder(ui.helper);
        }
    });

    // This function returns a letter tile to the tile holder
    function returnLetterToTileHolder(letterTile) {
        // This resets the position of the letter tile so it can be placed to the end of the holder
        letterTile.css({
            left: 0,
            top: 0
        });

        letterTile.draggable('option', 'revert', 'invalid');
        letterTile.appendTo($("#tileHolder"));
        updateCurrentWord();
        console.log("Returned to tile holder");
    }

    // This function updates the current word and displays it
    function updateCurrentWord() {
        currentWord = "";
        $("#errorMessage").text("");
    
        // This is an array to store the letters and placeholders
        var orderedLetters = [];
    
        $(".targetBlock, .doubleScoreTargetBlock").each(function () {
            var letterTile = $(this).find('.letterTile');
            if (letterTile.length > 0) {
                var letterImg = letterTile.attr('src');
                var letter = letterImg.match(/Scrabble_Tile_([A-Z])\.jpg/)?.[1] || "";
                orderedLetters.push(letter);
            } else {
                orderedLetters.push('-');
            }
        });
    
        // This takes out the '-' before and after the word and displays the word
        currentWord = orderedLetters.join("").replace(/^-+|-+$/g, '');
    
        $(".wordLabel").text("Word: " + currentWord);
    }


    // This stores the cumulative score
    var cumulativeScore = 0;

    $("#checkButton").on("click", function () {
        // This gets the current word
        var currentWord = $(".wordLabel").text().replace("Word: ", "");

        // If the word doesn't have '-', then it's valid; else an error message displays
        if (!currentWord.includes('-')) {
            var currentScore = calculateScore(currentWord);

            cumulativeScore += currentScore;

            // This updates and displays the score
            $("#score").text(cumulativeScore);

            clearTargetBlocks();

            updateTileHolder();

             currentWord = "";

            $(".wordLabel").text("Word: " + currentWord);

        } else {
            $("#errorMessage").text("Invalid word: The word can't have any gaps in between.");
        }
    });

    // This clears off all the letters that are on a target block
    function clearTargetBlocks() {
        $(".targetBlock, .doubleScoreTargetBlock").each(function () {
            var letterTile = $(this).find('.letterTile');
            if (letterTile.length > 0) {
                var letterImg = letterTile.attr('src');
                var letter = letterImg.match(/Scrabble_Tile_([A-Z])\.jpg/)?.[1] || "";
                // This decrements the "number-remaining" for the letter
                ScrabbleTiles[letter]["number-remaining"]--;
                // This clears the target blocks
                letterTile.remove();
            }
            $(this).data('occupied', false);
        });
    }

    // This button refreshes the page
    $("#restartButton").on("click", function() {
        location.reload();
    });


    // This function and the getRemainingTiles function updates the tile holder to have up to 7 blocks again 
    function updateTileHolder() {
        var currentLetterTileCount = $(".letterTile").length;
        var remainingLetterTiles = getRemainingTiles();
    
        for (let i = currentLetterTileCount; i < 7; i++) {
            if (remainingLetterTiles.length > 0) {
                var randomIn = Math.floor(Math.random() * remainingLetterTiles.length);
                var letterID = "letter" + (i + 1);
                var letterImg = ScrabbleTiles[remainingLetterTiles[randomIn]].image;
    
                var $letterTile = $("<img>", {
                    class: "letterTile ui-draggable ui-draggable-handle",
                    id: letterID,
                    src: letterImg
                });
    
                // This appends the image to the tile holder
                $("#tileHolder").append($letterTile);
    
                remainingLetterTiles.splice(randomIn, 1);
            }
        }
    
        $(".letterTile").draggable({
            revert: "invalid",
        });
    }

    function getRemainingTiles() {
        var remainingLetterTiles = [];
        for (var letter in ScrabbleTiles) {
            if (ScrabbleTiles.hasOwnProperty(letter) && ScrabbleTiles[letter]["number-remaining"] > 0) {
                remainingLetterTiles.push(letter);
            }
        }
        return remainingLetterTiles;
    }
});
