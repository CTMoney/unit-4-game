var wins = 0, losses = 0;

var desiredScore = (Math.floor(Math.random() * 100) + 1), crystal1Value = (Math.floor(Math.random() * 10) + 1), crystal2Value = (Math.floor(Math.random() * 10) + 1),
    crystal3Value = (Math.floor(Math.random() * 10) + 1), crystal4Value = (Math.floor(Math.random() * 10) + 1), currentScore = 0;

$(document).ready(function start() {

    $("#desiredScoreHTML").html(`Desired Score: ${desiredScore}`);
    $("#currentScoreHTML").html(`Current Score: ${currentScore}`);

    $("#crystal1").click(function () {
        currentScore += crystal1Value;
        $("#currentScoreHTML").html(`Current Score: ${currentScore}`);
        if (currentScore == desiredScore) {
            wins++;
            alert("you won!");
            $("#winsHTML").html(`Wins: ${wins}`);
            desiredScore = (Math.floor(Math.random() * 100) + 1), crystal1Value = (Math.floor(Math.random() * 10) + 1), crystal2Value = (Math.floor(Math.random() * 10) + 1),
                crystal3Value = (Math.floor(Math.random() * 10) + 1), crystal4Value = (Math.floor(Math.random() * 10) + 1), currentScore = 0;
            $("#desiredScoreHTML").html(`Desired Score: ${desiredScore}`);
            $("#currentScoreHTML").html(`Current Score: ${currentScore}`);
        }
        else if (currentScore > desiredScore) {
            losses++;
            $("#lossesHTML").html(`Losses: ${losses}`);
            desiredScore = (Math.floor(Math.random() * 100) + 1), crystal1Value = (Math.floor(Math.random() * 10) + 1), crystal2Value = (Math.floor(Math.random() * 10) + 1),
                crystal3Value = (Math.floor(Math.random() * 10) + 1), crystal4Value = (Math.floor(Math.random() * 10) + 1), currentScore = 0;
            $("#desiredScoreHTML").html(`Desired Score: ${desiredScore}`);
            $("#currentScoreHTML").html(`Current Score: ${currentScore}`);
        }
    })

    $("#crystal2").click(function () {
        currentScore += crystal2Value;
        $("#currentScoreHTML").html(`Current Score: ${currentScore}`);
        if (currentScore == desiredScore) {
            wins++;
            alert("you won!");
            $("#winsHTML").html(`Wins: ${wins}`);
            desiredScore = (Math.floor(Math.random() * 100) + 1), crystal1Value = (Math.floor(Math.random() * 10) + 1), crystal2Value = (Math.floor(Math.random() * 10) + 1),
                crystal3Value = (Math.floor(Math.random() * 10) + 1), crystal4Value = (Math.floor(Math.random() * 10) + 1), currentScore = 0;
            $("#desiredScoreHTML").html(`Desired Score: ${desiredScore}`);
            $("#currentScoreHTML").html(`Current Score: ${currentScore}`);
        }
        else if (currentScore > desiredScore) {
            losses++;
            $("#lossesHTML").html(`Losses: ${losses}`);
            desiredScore = (Math.floor(Math.random() * 100) + 1), crystal1Value = (Math.floor(Math.random() * 10) + 1), crystal2Value = (Math.floor(Math.random() * 10) + 1),
                crystal3Value = (Math.floor(Math.random() * 10) + 1), crystal4Value = (Math.floor(Math.random() * 10) + 1), currentScore = 0;
            $("#desiredScoreHTML").html(`Desired Score: ${desiredScore}`);
            $("#currentScoreHTML").html(`Current Score: ${currentScore}`);
        }
    })

    $("#crystal3").click(function () {
        currentScore += crystal3Value;
        $("#currentScoreHTML").html(`Current Score: ${currentScore}`);
        if (currentScore == desiredScore) {
            wins++;
            alert("you won!");
            $("#winsHTML").html(`Wins: ${wins}`);
            desiredScore = (Math.floor(Math.random() * 100) + 1), crystal1Value = (Math.floor(Math.random() * 10) + 1), crystal2Value = (Math.floor(Math.random() * 10) + 1),
                crystal3Value = (Math.floor(Math.random() * 10) + 1), crystal4Value = (Math.floor(Math.random() * 10) + 1), currentScore = 0;
            $("#desiredScoreHTML").html(`Desired Score: ${desiredScore}`);
            $("#currentScoreHTML").html(`Current Score: ${currentScore}`);
        }
        else if (currentScore > desiredScore) {
            losses++;
            $("#lossesHTML").html(`Losses: ${losses}`);
            desiredScore = (Math.floor(Math.random() * 100) + 1), crystal1Value = (Math.floor(Math.random() * 10) + 1), crystal2Value = (Math.floor(Math.random() * 10) + 1),
                crystal3Value = (Math.floor(Math.random() * 10) + 1), crystal4Value = (Math.floor(Math.random() * 10) + 1), currentScore = 0;
            $("#desiredScoreHTML").html(`Desired Score: ${desiredScore}`);
            $("#currentScoreHTML").html(`Current Score: ${currentScore}`);
        }
    })

    $("#crystal4").click(function () {
        currentScore += crystal4Value;
        $("#currentScoreHTML").html(`Current Score: ${currentScore}`);
        if (currentScore == desiredScore) {
            wins++;
            alert("you won!");
            $("#winsHTML").html(`Wins: ${wins}`);
            desiredScore = (Math.floor(Math.random() * 100) + 1), crystal1Value = (Math.floor(Math.random() * 10) + 1), crystal2Value = (Math.floor(Math.random() * 10) + 1),
                crystal3Value = (Math.floor(Math.random() * 10) + 1), crystal4Value = (Math.floor(Math.random() * 10) + 1), currentScore = 0;
            $("#desiredScoreHTML").html(`Desired Score: ${desiredScore}`);
            $("#currentScoreHTML").html(`Current Score: ${currentScore}`);
        }
        else if (currentScore > desiredScore) {
            losses++;
            $("#lossesHTML").html(`Losses: ${losses}`);
            desiredScore = (Math.floor(Math.random() * 100) + 1), crystal1Value = (Math.floor(Math.random() * 10) + 1), crystal2Value = (Math.floor(Math.random() * 10) + 1),
                crystal3Value = (Math.floor(Math.random() * 10) + 1), crystal4Value = (Math.floor(Math.random() * 10) + 1), currentScore = 0;
            $("#desiredScoreHTML").html(`Desired Score: ${desiredScore}`);
            $("#currentScoreHTML").html(`Current Score: ${currentScore}`);
        }
    })

});
