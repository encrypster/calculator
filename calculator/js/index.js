$(document).ready(function () {
    value = "";
    memory = "";
    $("span").click(function () {
        button = $(this).text();

        // memory save button
        if (button == "MS") {
            memory = value;
            value = " ";
            $(".value").val(" ");
            return;
        }

        // memory use button
        if (button == "M") {
            value += memory;
            $(".value").val(value);
            return;
        }

        // memory remove button
        if (button == "MR") {
            memory = " ";
            return;
        }

        // clear button
        if (button == "C") {
            value = " ";
            $(".value").val(" ");
            return;
        }

        // backspace button
        if (button == " ") {
            value = value.substr(0, value.length - 1);
            $(".value").val(value);
            return;
        }

        // equal button
        if (button == "=") {
            $(".value").val(eval(value));
            value = eval(value);
            return;
        }

        value += button;
        $(".value").val(value);
    });
});
