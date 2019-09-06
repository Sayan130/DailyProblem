# DailyProblem
A microservice for daily problem for(math, English, Programming)

//Create two mongodatabase in your local directory - named 1.question
                                                           2. user
Only three categories are avaliable currently
      1.Math
      2.English
      3.Programming

Two sepearate terminal is needed 1. for local server
                                 2. for sending questions in a interval
            
Got to src/sendqstn/sendqstn.js and set .env file path for your emailId and password

To add Question send post request /register in a json format.
