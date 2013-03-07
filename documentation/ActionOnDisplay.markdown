# Subtest Editor

### Cheat Sheet (TLDR)

Skip Subtest:

    @skipSubtest() if subtest("LadyBugSurvey").getAnswer("spotsCounted") > 20 TODO implement convenience method called skipSubtest() that maps to next()

Set Answer:

    @set "Petey Pie" if @getPreviousResult is "Other" TODO implement getPreviousResult to return answer from previous question

Pipe result from previous answer to prompt of current question:

    @setPrompt "What is the age of #{@getPreviousResult("name")}?"



## Questions

### Display Code

Any code you supply in this field will execute when this question is shown. **Focus Mode** must be set to **on**, as the execution is tied to the `Question`'s `"show"` event. 

The code is executed within the scope of the `QuestionView` using `.apply(@, [yourCode])`. So while you have access to all global window objects, and in particular the `ViewManager` through `window.vm`, all references to `this` / `@` will refer to the current question.

Handling skipping should not be necessary since if a question is skipped, its **display code** will not be executed.

#### Member variables

##### @answer

Comes in two flavors, a `String` and an `Object`. When the `Question.type` is set to `"single"` or `"open"`, `@answer` is the string value of the option selected (`option[i].value`). When `Question.type` is set to `"multiple"` `@answer` is an `Object` with the following structure

    {
      "option1" : "checked",
      "option2" : "unchecked"
    }

##### @options

An `Array` of `name`, `value` `Objects`.

    [
      {
        "name"  : "True",
        "value" : "1"
      },
      {
        "name"  : "False",
        "value" : "0" 
      }
    ] 

##### @model

Is a reference to the `Question` object itself.

##### @parent

references the `SurveyView`, which has spawned `QuestionView`s, one of which is our current scope.
  
  * `questionViews` is an array of question views
  * `questionIndex` which `QuestionView` is currently being displayed.

##### @type

`"single"`, `"multiple"`, or `"open"`.

#### Methods

#####setAnswer( answer )

`answer` must either be a string (if `Question.type` is `"open"` or `"single"`) or an `Object` if 

  setOptions: (options) =>

  setAnswer: (answer) =>

  setMessage: (message) =>

  setPrompt: (prompt) =>

  setHint: (hint) =>

### Syntax verification

When you finish writing code in either the **custom validation** or the **display code** field, Tangerine will attempt to compile the code and report back if any errors occur. 

