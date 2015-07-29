     // Example unit test function
     function divide( a, b ) {
        // To see the test pass, uncomment the following line
        return a / b;
     }

     // Write a function that takes a single argument (a string) and returns the string reversed.
     function reverseString(str) {
         // FILL THIS IN
         var strArray = str.split('');
         var revStrArray = strArray.reverse();
         var revStr = revStrArray.join();
         return revStr;
     }

     // Write a function that takes an array of numbers and returns the minimum value
     function findMinValue(values) {
         // FILL THIS IN
         var minValue = values[0];
         var valuesLength = values.length;
         for ( var i = 0; i < valuesLength; i++ ) {
            if ( values[i] < minValue ) { minValue = values[i]; }
         }
         return minValue;
     }

     // Write a function that takes an array and returns the distinct values only (i.e. removes duplicates)
     function findDistinctValues(values) {
         // FILL THIS IN
         var distinctValuesArray = [],
             flags = [];
         
         for ( var i = 0; i < values.length; i++ ) {
            if ( flags[values[i]] ) continue;
            flags[ values[i] ] = true;
            distinctValuesArray.push( values[i] );
         }
     }

     // Write a function that logs the numbers from 1 to 100 to the console.
     // For multiples of three print "Fizz" instead of the number.
     // For multiples of five print "Buzz".
     // For numbers which are multiples of both three and five print "FizzBuzz".
     function doFizzBuzz() {
         // FILL THIS IN
         for ( var i = 1; i <= 100; i++, msg = "" ) {
            if ( !(i%3) ) msg += "Fizz";
            if ( !(i%5) ) msg += "Fizz";
            console.log ( msg || i );
         }
         return msg; 
     }

     // You have a master array of strings, where each element is a fruit name.
     // You have a second array of fruit name strings, that is a list of fruits that should be removed from the fruits specified in the master array.
     // For the purpose of the exercise, we will call the master array fruits and the second array fruitsToRemove.
     // Write the function that will remove the values contained in fruitsToRemove from the array fruits.
     function removeFruits(fruits, fruitsToRemove) {
         // FILL THIS IN
         for ( var i = 0; i < fruitsToRemove.length; i++ ) {
             for ( var j = fruits.length; j > -1; j-- ) {
                if ( fruits[j] == fruitsToRemove[i] ) { fruits.splice(j, 1); }
             }
         }
         return fruits;
     }

     // Write a function to push either a simple value or an array of values onto a specified array.
     // For the purpose of the exercise, we will call the target array simply array and the stuff to push onto it (either a simple value or array) simply toPush.
     // If toPush is a simple value, it should be pushed onto array as an element.
     // If toPush is an array, all of its elements should be pushed onto array. Your solution should modify array (ie. not return a new array).
     function pushOntoArray(array, toPush) {
         // FILL THIS IN
         if ( typeof toPush == "array" ) {
            for (var i = 0; i < toPush.length; i++){
                array.push(toPush[i]);
            }
         }
         else {
            array.push(toPush);
         }
     }

     // Given a string, sourceStr, write some code that will split this string using comma as your delimiter, and producing an empty array if the string is empty.
     function splitListStrUsingComma(sourceStr) {
         // FILL THIS IN
        var splitSourceArray = [];
        splitSourceArray = sourceStr.split(',');
        return splitSourceArray;
     }

     // Write a function that will take any number of arguments and return their sum
     function sum() {
         // FILL THIS IN
        var sumValue = 0;
        for (var i = 0; i < arguments.length; i++) {
            sumValue += arguments[i];
        }
     }

     // Write a function that will return true if a specified string consists of only whitespace.
     function isOnlyWhitespace(sourceStr) {
         // FILL THIS IN
        var msg = false;
        if (!String.prototype.trim) { // make sure older browsers have trim
            (function() {
                // Make sure we trim BOM and NBSP
                var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
                String.prototype.trim = function() {
                    return this.replace(rtrim, '');
                };
            })();
        }
        if (sourceStr.trim() === "") {
            msg = true;
        } else {
            msg = false;
        }
        return msg;
     }

     // write an example of a javascript closure

    function displayName(firstName, lastName) { 
        ​var nameStartTag = "Full Name is ";
        // this inner function has access to the outer function's variables, including the parameter​
        ​function createFullName() {         
        ​  return nameStartTag + firstName + " " + lastName;     
        }
    ​
    ​   return createFullName(); 
    } 
    ​
     // define a json object that represents a collection of people.
     // each person should have the following properties
     // - first name
     // - last name
     // - city
     // - state
     // - zip
     // - a collection of phone numbers (home, work, mobile)
     var people_json_obj = {
            "person_count" : 2,
            "person" : [
                {
                    "first_name" : "David",
                    "last_name" : "Cuna",
                    "city" : "Indianapolis",
                    "state" : "Indiana",
                    "zip" : "46205",
                    "phone_number" : {
                        "home" : "317-553-5675",
                        "work" : "317-123-4567",
                        "mobile" : "317-765-4321"
                    }
                },
                {
                    "first_name" : "John",
                    "last_name" : "Justin",
                    "city" : "Norfolk",
                    "state" : "Virginia",
                    "zip" : "23508",
                    "phone_number" : {
                        "home" : "757-277-6734",
                        "work" : "757-348-6520",
                        "mobile" : "757-442-8482"
                    }
                }
            ]
         };

     // Create a javascript object (DataTable) with the following:
     // A private columns property (string array)
     // A private rows property (string array)
     // A public method addRows that adds an item to the rows array
     // A public method addColumns that adds an item to the columns array
     // A public method getData that returns the a json object representation of the DataTable
     // Note: the row object should be a hash of the column name and row item value
     // Example:
     // .addColumns('column1', 'column2', 'column3');
     // .addRow('value1A', 'value1B', 'value1C');
     // .addRow('value2A', 'value2B', 'value2C');

     var DataTable = function(){
        var columns = [];
        var rows = [];
        
        return {
            addRow : function(){
                var rowObj = {};
                for (var i = 0; i < arguments.length; i++){
                    if ( i < columns.length ){
                        rowObj[columns[i]] = arguments[i];
                    }
                }
                rows.push(rowObj);
            },
            addColumns : function(){
                for (var j = 0; j < arguments.length; j++){
                    columns.push(arguments[j]);
                }
            },
            getData : function(){
                return rows;
            }
        }
     };

     // within div1, programatically create a
     // SELECT element (with multiple items) and a button.
     // when the button is clicked write out the name and value of the selected item to the console.
     function create_select(){
        var html_select_obj = '<select id="select_obj">';
        html_select_obj += '<option value="option1"> Value 1 </option>';
        html_select_obj += '<option value="option2"> Value 2 </option>';
        html_select_obj += '<option value="option3"> Value 3 </option>';
        html_select_obj += '</select>';
        $('#div1').append(html_select_obj);

        var html_button_obj = '<input type="button" value="Click To See Selected Values In Console" onclick="onButtonClick();" />';
        $('#div1').append(html_button_obj);
     }

     function onButtonClick() {
        console.log(" Selected Text = " + $("#select_obj option:selected").text() + " Selected Value = " + $("#select_obj").val() );
     }

     // Write 5 different jQuery selectors to retrieve the
     // sample anchor in the markup below.
    function getAnchorTagsFromMarkup () {
        $('a');
        $('.link');
        $('[href="#"]');
        $('#fizz > *');
        $('#foo *:not(div)');
     }

     // Programatically create an array with 5 items.  Create a list item for each item in the array
     // and add the list items to the unordered list with an id of "list1".
     function createProgrammaticalJSArray (){
        var temp_array = [];
        for (var i = 0; i < 5; i++){
            temp_array.push(i);
        }
        
        for (var j = 0; j < temp_array.length; j++) {
            $('#list1').append('<li>'+temp_array[j]+'</li>');
        }
     }

     // Use javascript to add a list of checkboxes and 2 links
     // to the div with an id of "foobar"
     // When the first link is clicked, all the checkboxes should be checked (i.e. check all)
     // When the second link is clicked, all the checkboxes should be unchecked (i.e. uncheck all)

     function addCheckboxAndLinks(){
        var html_checkbox_obj = "";
        
        for (var i = 0; i < 10; i++){
            html_checkbox_obj += '<input type="checkbox" id="checkbox' + i + ' " />';
        }
        
        $('#foobar').append(html_checkbox_obj);
        
        var html_link_obj = '<a href="#" onclick="checkOrUncheckBox(true); return false;">Check All</a>';
        html_link_obj += '<a href="#" onclick="checkOrUncheckBox(false); return false;">Uncheck All</a>';
        
        $('#foobar').append(link_html);
     }

    function checkOrUncheckBox( is_checked ){
        $('#foobar input[type = "checkbox"]').each(function(){
            $(this).prop('checked', is_checked);
        });
     }
