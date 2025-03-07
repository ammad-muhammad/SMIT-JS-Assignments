
        // Task 1: Addition, Subtraction, Multiplication, Division, Modulus
        var num1 = 10;
        var num2 = 5;
        var addition = num1 + num2;
        var subtraction = num1 - num2;
        var multiplication = num1 * num2;
        var division = num1 / num2;
        var modulus = num1 % num2;

        document.write("Addition: " + addition + "<br>");
        document.write("Subtraction: " + subtraction + "<br>");
        document.write("Multiplication: " + multiplication + "<br>");
        document.write("Division: " + division + "<br>");
        document.write("Modulus: " + modulus + "<br><br>");

        // Task 2: Mathematical Expressions
        var variable;
        document.write("Value after variable declaration is: " + variable + "<br>");
        variable = 5;
        document.write("Initial value: " + variable + "<br>");
        variable++;
        document.write("Value after increment is: " + variable + "<br>");
        variable += 7;
        document.write("Value after addition is: " + variable + "<br>");
        variable--;
        document.write("Value after decrement is: " + variable + "<br>");
        document.write("The remainder is: " + (variable % 3) + "<br><br>");

        // Task 3: Cost of Movie Tickets
        var ticketPrice = 600;
        var totalCost = ticketPrice * 5;
        document.write("Total cost to buy 5 tickets is: " + totalCost + " PKR<br><br>");

        // Task 4: Multiplication Table
        var tableNumber = 5;
        document.write("Multiplication Table of " + tableNumber + ":<br>");
        for (var i = 1; i <= 10; i++) {
            document.write(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
        }
        document.write("<br>");

        // Task 5: Temperature Converter
        var celsius = 25;
        var fahrenheit = (celsius * 9/5) + 32;
        document.write(celsius + "°C is " + fahrenheit + "°F<br>");
        fahrenheit = 77;
        celsius = (fahrenheit - 32) * 5/9;
        document.write(fahrenheit + "°F is " + celsius.toFixed(2) + "°C<br><br>");

        // Task 6: Shopping Cart
        var priceItem1 = 100, priceItem2 = 200, quantityItem1 = 2, quantityItem2 = 3, shippingCharges = 50;
        var totalCost = (priceItem1 * quantityItem1) + (priceItem2 * quantityItem2) + shippingCharges;
        document.write("Total cost of your order is: " + totalCost + " PKR<br><br>");

        // Task 7: Marks and Percentage
        var totalMarks = 500, marksObtained = 450;
        var percentage = (marksObtained / totalMarks) * 100;
        document.write("Percentage: " + percentage.toFixed(2) + "%<br><br>");

        // Task 8: Currency Converter
        var usdToPkr = 104.80, riyalToPkr = 28;
        var totalCurrencyInPkr = (10 * usdToPkr) + (25 * riyalToPkr);
        document.write("Total Currency in PKR: " + totalCurrencyInPkr + "<br><br>");

        // Task 9: Arithmetic Sequence
        var number = 10;
        var result = ((number + 5) * 10) / 2;
        document.write("Result of arithmetic sequence: " + result + "<br><br>");

        // Task 10: Age Calculator
        var currentYear = 2024, birthYear = 2000;
        var age1 = currentYear - birthYear;
        var age2 = age1 - 1;
        document.write("They are either " + age1 + " or " + age2 + " years old.<br><br>");

        // Task 11: Geometrizer
        var radius = 7;
        var circumference = 2 * 3.142 * radius;
        var area = 3.142 * radius * radius;
        document.write("The circumference is: " + circumference.toFixed(2) + "<br>");
        document.write("The area is: " + area.toFixed(2) + "<br><br>");

        // Task 12: Lifetime Supply Calculator
        var snack = "chips";
        var currentAge = 24, maxAge = 80, snacksPerDay = 2;
        var totalSnacks = (maxAge - currentAge) * 365 * snacksPerDay;
        document.write("You will need " + totalSnacks + " " + snack + " to last you until the ripe old age of " + maxAge + ".");
    







