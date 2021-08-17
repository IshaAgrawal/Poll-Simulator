# Poll-Simulator

The objective of the Poll Simulator is to separate Presentation and Business Logic. The .html and .css files represents the presentation and .js file represent the Business Logic.

- .index.html is the main page and from where we can perform different functionalities such as Add canddidates, Vote for Candidates, View poll result and View voting summary.
- To perform the above mentioned functionalities .html file is created for each functionality suchas addcandidate.html for adding candidates for the poll, vote.html to for 
  candidates, pollresult.html to view the pollresults and votesummaryy.html to view the voting summary.
- The style.css files is the style presentation for all the .html files.
- The script.js represents the business logic for all the functionalities to be performed and they are stored in the local storage of the browser.
- The script.js have below functions:
  1. addcandidate() : Here, the user can add the candidates for the voting process and those names will be stored in the local storage.
  2. vote() : The user can vote for any candidate of their choice.
  3. giveVote() : In this function the names for the voted candidates are record and stored in the local storage.
  4. voterid() : This functions gives you the confirmation that you have voted for the candidate of your choice and also checks that no user id have voted twice.
  5. count_votes() : This function counts the total votes for each candidate and display the poll summary.
  6. poll_result() : This function calculates the minimum and maximum vote for the candidates and diaplay the poll results.

