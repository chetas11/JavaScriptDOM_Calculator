// Main Calculator Design -----------------------------------------------------------

const ManinDiv = document.createElement("div");
ManinDiv.classList.add("container");
document.body.append(ManinDiv);

const ManinRow = document.createElement("div");
ManinRow.classList.add("row");
ManinDiv.append(ManinRow);

const ManinCol = document.createElement("div");
ManinCol.classList.add(
  "main-div",
  "container",
  "col-md-12",
  "col-sm-12",
  "col-lg-12"
);
ManinRow.append(ManinCol);

// row-1  Calculator Display --------------------

const Row1 = document.createElement("div");
Row1.classList.add("row");
ManinCol.append(Row1);

const Row1Col1 = document.createElement("div");
Row1Col1.classList.add("col-sm-12", "col-lg-4", "col-md-12");
Row1.append(Row1Col1);

const Row1Col2 = document.createElement("div");
Row1Col2.classList.add("col-sm-12", "col-lg-4", "col-md-12");
Row1.append(Row1Col2);

const Row1Col3 = document.createElement("div");
Row1Col3.classList.add("col-sm-12", "col-lg-4", "col-md-12");
Row1.append(Row1Col3);

const Display = document.createElement("label");
Display.innerText = "";
Display.classList.add("form-control", "display");
Row1Col2.append(Display);

// row-2  Numbers 7 8 9 -------------

const Row2 = document.createElement("div");
Row2.classList.add("row");
ManinCol.append(Row2);

const Row2Col1 = document.createElement("div");
Row2Col1.classList.add("col-sm-12", "col-lg-4", "col-md-12");
Row2.append(Row2Col1);

const Row2Col2 = document.createElement("div");
Row2Col2.classList.add("col-sm-12", "col-lg-4", "col-md-12");
Row2.append(Row2Col2);

const Row2Col3 = document.createElement("div");
Row2Col3.classList.add("col-sm-12", "col-lg-4", "col-md-12");
Row2.append(Row2Col3);

const Num7 = document.createElement("button");
Num7.innerText = "7";
Num7.classList.add("btn", "left");
Row2Col2.append(Num7);

const Num8 = document.createElement("button");
Num8.innerText = "8";
Num8.classList.add("btn");
Row2Col2.append(Num8);

const Num9 = document.createElement("button");
Num9.innerText = "9";
Num9.classList.add("btn");
Row2Col2.append(Num9);

const Multiply = document.createElement("button");
Multiply.innerText = "*";
Multiply.classList.add("btn");
Row2Col2.append(Multiply);

// row-3 Numbers 4 5 6 -------------

const Row3 = document.createElement("div");
Row3.classList.add("row");
ManinCol.append(Row3);

const Row3Col1 = document.createElement("div");
Row3Col1.classList.add("col-sm-12", "col-lg-4", "col-md-12");
Row3.append(Row3Col1);

const Row3Col2 = document.createElement("div");
Row3Col2.classList.add("col-sm-12", "col-lg-4", "col-md-12");
Row3.append(Row3Col2);

const Row3Col3 = document.createElement("div");
Row3Col3.classList.add("col-sm-12", "col-lg-4", "col-md-12");
Row3.append(Row3Col3);

const Num4 = document.createElement("button");
Num4.innerText = "4";
Num4.classList.add("btn", "left");
Row3Col2.append(Num4);

const Num5 = document.createElement("button");
Num5.innerText = "5";
Num5.classList.add("btn");
Row3Col2.append(Num5);

const Num6 = document.createElement("button");
Num6.innerText = "6";
Num6.classList.add("btn");
Row3Col2.append(Num6);

const Divide = document.createElement("button");
Divide.innerText = "/";
Divide.classList.add("btn");
Row3Col2.append(Divide);

// row-4 Numbers 1 2 3 -------------

const Row4 = document.createElement("div");
Row4.classList.add("row");
ManinCol.append(Row4);

const Row4Col1 = document.createElement("div");
Row4Col1.classList.add("col-sm-12", "col-lg-4", "col-md-12");
Row4.append(Row4Col1);

const Row4Col2 = document.createElement("div");
Row4Col2.classList.add("col-sm-12", "col-lg-4", "col-md-12");
Row4.append(Row4Col2);

const Row4Col3 = document.createElement("div");
Row4Col3.classList.add("col-sm-12", "col-lg-4", "col-md-12");
Row4.append(Row4Col3);

const Num1 = document.createElement("button");
Num1.innerText = "1";
Num1.classList.add("btn", "left");
Row4Col2.append(Num1);

const Num2 = document.createElement("button");
Num2.innerText = "2";
Num2.classList.add("btn");
Row4Col2.append(Num2);

const Num3 = document.createElement("button");
Num3.innerText = "3";
Num3.classList.add("btn");
Row4Col2.append(Num3);

const Subtraction = document.createElement("button");
Subtraction.innerText = "-";
Subtraction.classList.add("btn");
Row4Col2.append(Subtraction);

// row-5 Number 0 -------------

const Row5 = document.createElement("div");
Row5.classList.add("row");
ManinCol.append(Row5);

const Row5Col1 = document.createElement("div");
Row5Col1.classList.add("col-sm-12", "col-lg-4", "col-md-12");
Row5.append(Row5Col1);

const Row5Col2 = document.createElement("div");
Row5Col2.classList.add("col-sm-12", "col-lg-4", "col-md-12");
Row5.append(Row5Col2);

const Row5Col3 = document.createElement("div");
Row5Col3.classList.add("col-sm-12", "col-lg-4", "col-md-12");
Row5.append(Row5Col3);

const Num0 = document.createElement("button");
Num0.innerText = "0";
Num0.classList.add("btn", "left");
Row5Col2.append(Num0);

const Clear = document.createElement("button");
Clear.innerText = "C";
Clear.classList.add("btn");
Row5Col2.append(Clear);

const Modulo = document.createElement("button");
Modulo.innerText = "%";
Modulo.classList.add("btn");
Row5Col2.append(Modulo);

const Addition = document.createElement("button");
Addition.innerText = "+";
Addition.classList.add("btn");
Row5Col2.append(Addition);

// row-6 -------------

const Row6 = document.createElement("div");
Row6.classList.add("row");
ManinCol.append(Row6);

const Row6Col1 = document.createElement("div");
Row6Col1.classList.add("col-sm-12", "col-lg-4", "col-md-12");
Row6.append(Row6Col1);

const Row6Col2 = document.createElement("div");
Row6Col2.classList.add("col-sm-12", "col-lg-4", "col-md-12");
Row6.append(Row6Col2);

const Row6Col3 = document.createElement("div");
Row6Col3.classList.add("col-sm-12", "col-lg-4", "col-md-12");
Row6.append(Row6Col3);

const LeftBracket = document.createElement("button");
LeftBracket.innerText = "(";
LeftBracket.classList.add("btn", "left");
Row6Col2.append(LeftBracket);

const RightBracket = document.createElement("button");
RightBracket.innerText = ")";
RightBracket.classList.add("btn");
Row6Col2.append(RightBracket);

const Decimal = document.createElement("button");
Decimal.innerText = ".";
Decimal.classList.add("btn");
Row6Col2.append(Decimal);

const Delete = document.createElement("button");
Delete.innerText = "<--";
Delete.classList.add("btn");
Row6Col2.append(Delete);

// row-7 Calculate Button -------------

const Row7 = document.createElement("div");
Row7.classList.add("row");
ManinCol.append(Row7);

const Row7Col1 = document.createElement("div");
Row7Col1.classList.add("col-sm-12", "col-lg-4", "col-md-12");
Row7.append(Row7Col1);

const Row7Col2 = document.createElement("div");
Row7Col2.classList.add("col-sm-12", "col-lg-4", "col-md-12");
Row7.append(Row7Col2);

const Row7Col3 = document.createElement("div");
Row7Col3.classList.add("col-sm-12", "col-lg-4", "col-md-12");
Row7.append(Row7Col3);

const Calculate = document.createElement("button");
Calculate.innerText = "Calculate";
Calculate.classList.add("btn", "calculate");
Row7Col2.append(Calculate);

const Footer = document.createElement("footer");
Footer.innerHTML = "&#169; ChetanBirmole";
Footer.classList.add("center");
ManinCol.append(Footer);

//Keyboard Press Events --------------------------------------------------------------------

document.addEventListener("keypress", function (event) {
  console.log(event.key);
});

document.addEventListener("keypress", function (event) {
  if (
    (event.key >= 0 && event.key <= 9) ||
    event.key == "(" ||
    event.key == ")" ||
    event.key == "+" ||
    event.key == "-" ||
    event.key == "/" ||
    event.key == "*" ||
    event.key == "%" ||
    event.key == "."
  ) {
    let key = event.key;

    Display.innerText = Display.innerText + event.key;
  }
});

//Calculate Button -----------------------------------------------------------

Calculate.addEventListener("click", function Cal(event) {
  if (Display.innerText) {
    try {
      Display.innerText = eval(Display.innerText);
      Display.classList.remove("error");
    } catch (e) {
      if (e instanceof SyntaxError) {
        Display.innerText = "";
        alert("Invalid Expression");
      }
    }
  } else {
    Display.classList.add("error");
  }
});

Display.addEventListener("click", function () {
  Display.classList.remove("error");
});

// Numbers -----------------------------------------------------------

Num0.addEventListener("click", function () {
  Display.innerText = Display.innerText + Num0.innerText;
});

Num1.addEventListener("click", function () {
  Display.innerText = Display.innerText + Num1.innerText;
});

Num2.addEventListener("click", function () {
  Display.innerText = Display.innerText + Num2.innerText;
});

Num3.addEventListener("click", function () {
  Display.innerText = Display.innerText + Num3.innerText;
});

Num4.addEventListener("click", function () {
  Display.innerText = Display.innerText + Num4.innerText;
});

Num5.addEventListener("click", function () {
  Display.innerText = Display.innerText + Num5.innerText;
});

Num6.addEventListener("click", function () {
  Display.innerText = Display.innerText + Num6.innerText;
});

Num7.addEventListener("click", function () {
  Display.innerText = Display.innerText + Num7.innerText;
});

Num8.addEventListener("click", function () {
  Display.innerText = Display.innerText + Num8.innerText;
});

Num9.addEventListener("click", function () {
  Display.innerText = Display.innerText + Num9.innerText;
});

//Operators -----------------------------------------------------------

Addition.addEventListener("click", function () {
  Display.innerText = Display.innerText + Addition.innerText;
});

Modulo.addEventListener("click", function () {
  Display.innerText = Display.innerText + Modulo.innerText;
});

Subtraction.addEventListener("click", function () {
  Display.innerText = Display.innerText + Subtraction.innerText;
});

Divide.addEventListener("click", function () {
  Display.innerText = Display.innerText + Divide.innerText;
});

Multiply.addEventListener("click", function () {
  Display.innerText = Display.innerText + Multiply.innerText;
});

// Brackets and Decimal -----------------------------------------------------------

LeftBracket.addEventListener("click", function () {
  Display.innerText = Display.innerText + LeftBracket.innerText;
});

RightBracket.addEventListener("click", function () {
  Display.innerText = Display.innerText + RightBracket.innerText;
});

Decimal.addEventListener("click", function () {
  Display.innerText = Display.innerText + Decimal.innerText;
});

//Clear and Delete button -----------------------------------------------------------

Clear.addEventListener("click", function () {
  Display.innerText = "";
});

Delete.addEventListener("click", function () {
  Display.innerText = Display.innerText.slice(0, -1);
});
