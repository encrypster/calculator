$(document).ready(function () {
    inputVal = "";
    memory = "";
    $("span").click(function () {
        button = $(this).text();

        // memory save button
        if (button == "MS") {
            memory = inputVal;
            inputVal = " ";
            $(".value").val(" ");
            return;
        }

        // memory use button
        if (button == "M") {
            inputVal += memory;
            $(".value").val(inputVal);
            return;
        }

        // memory remove button
        if (button == "MR") {
            memory = " ";
            return;
        }

        // backspace button
        if (button == " ") {
            inputVal = inputVal.substr(0, inputVal.length - 1);
            $(".value").val(inputVal);
            return;
        }

        inputVal += button;
        $(".value").val(inputVal);
    });
});
