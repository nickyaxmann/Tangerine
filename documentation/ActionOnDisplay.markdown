# Action On Display Cheat Sheet

Skip Subtest if a previous survey had a question named ladybug_spot_count and the result was greater than 20:

    @skip() if ResultOfPrevious("ladybug_spot_count") > 20

Set the answer to the current question to "Petey Pie" if the question with the variable "bird_number" is 999:

    @setAnswer("Petey Pie") if ResultOfQuestion("bird_number") is "999"

Pipe result from the  to the the question with the variable "name" to the prompt of the current question:

    @setPrompt "What is the age of #{ResultOfQuestion("name")}?"
