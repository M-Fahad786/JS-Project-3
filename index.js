                                                            // START OF CODE

                                                            //  Question No 1

let name = [];

                                                          //  Question No 2

let studentnames = new Array();

                                                          //  Question No 3

let str = ["String array"];

                                                         //  Question No 4

let number = new Array(1,2,3,4,5);

                                                         //  Question No 5

let boolean = [true,false,true,false];

                                                          //  Question No 6

let mixarray  = new Array(1,"string",undefined,Boolean);

                                                         //  Question No 7

let Networks = ["Jazz", "Zong", "Warid", "Ufone"];

                                                         //  Question No 8

let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
document.write("<h1>Qualifications:</h1>");
for (let i = 0; i < qualifications.length; i++ ){
    document.write(i + 1 + ") " + qualifications [i] + "<br />");
}

                                                          //  Question No 9

 document.write("<h1>Top movies of 2015:</h1>");
let movies = [];
movies.push("Avengers: Age Of Ultron");
movies.push("Spectre");
movies.push("Jurrasic World");
movies.push("Inside Out");

for (var i = 0; i < movies.length; i++ ){
    document.write(i + 1 + ") " + movies[i] + "<br />");
}
document.write("<br /><h3>Length of the array: " + movies.length + "</h3>");

                                                            // Question 10

let studentScores = [320, 23,55]
 document.write("<br />Scores of Students: " + studentScores);
 document.write("<br />Ordered Scores of Students: " + studentScores.sort());

                                                           // Question 11
document.write("<h1>Names of Cities:</h1>");
let cities =["Karachi", "Islamabad", "Quetta", "Lahore", "Peshawer"];
let numbercities=[];
numbercities.push(cities[0],cities[1],cities[3]);
document.write("cities: -"+cities+"<br/>");
document.write("Selected cities: -"+numbercities+"<br/>");

                                                        //    END OF CODE