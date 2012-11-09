class AssessmentListView extends Backbone.View

  events:
    'keypress .new_assessment_name' : 'newAssessmentSave'
    'click .new_assessment_save'    : 'newAssessmentSave'
    'click .new_assessment_cancel'  : 'newAssessmentToggle'
    'click .new_assessment'         : 'newAssessmentToggle'
    'click .import'                 : 'import'
    'click .groups'                 : 'gotoGroups'

  gotoGroups: -> Tangerine.router.navigate "groups", true
  import:     -> Tangerine.router.navigate "import", true

  initialize:(options) ->
    @assessments = options.assessments
    @group       = options.group
    @curriculaListView = new CurriculaListView
      "curricula" : options.curricula
    @isAdmin = Tangerine.user.isAdmin()
    @views = []
    @publicViews = []
    @sections = [@group, "public"]
    @groupViews = []


    if Tangerine.settings.context == "server"
      # coffeescript nightmare, single line possible, but don't do it
      for group in @sections
        view = new AssessmentsView
          "group"          : group
          "allAssessments" : @assessments
          "parent"         : @
        @groupViews.push view
    else if Tangerine.settings.context == "mobile"
      @listView = new AssessmentsView
        "group"          : false # all
        "allAssessments" : @assessments
        "parent"         : @
    

  refresh: =>
    @assessments = new Assessments
    @assessments.fetch
      success: (assessments) =>
        for view, i in @groupViews
          assessmentCount = assessments.where({"group":@sections[i],"archived":false}).length
          groupName = if @sections[i] == "public" then "Public" else @sections[i]          
          @$el.find(".header_#{view.cid}").html "#{groupName} (#{assessmentCount})"
          view.allAssessments = assessments
          view.refresh true


  render: =>
    newButton    = "<button class='new_assessment command'>New</button>"
    importButton = "<button class='import command'>Import</button>"
    groupsButton = "<button class='navigation groups'>Groups</button>"


    html = "
      #{if Tangerine.settings.context == "server" then groupsButton else ""}
      <h1>Assessments</h1>
      "
    if @isAdmin
      html += "
        #{if Tangerine.settings.context == "server" then newButton else "" }
        #{if Tangerine.settings.context == "mobile" then importButton else ""}

        <div class='new_assessment_form confirmation'>
          <div class='menu_box_wide'>
            <input type='text' class='new_assessment_name' placeholder='Assessment Name'>
            <button class='new_assessment_save command'>Save</button> <button class='new_assessment_cancel command'>Cancel</button>
          </div>
        </div>
      "

    @$el.html html

    if Tangerine.settings.context == "server"
      for view, i in @groupViews
        assessmentCount = @assessments.where({"group":@sections[i],"archived":false}).length
        groupName = if @sections[i] == "public" then "Public" else @sections[i]          
        @$el.append "<h2 class='header_#{view.cid}'>#{groupName} (#{assessmentCount})</h2><ul id='group_#{view.cid}' class='assessment_list'></ul>"
        view.setElement(@$el.find("#group_#{view.cid}"))
        view.render()
        
    else if Tangerine.settings.context == "mobile"
      @$el.append "<ul class='assessment_list'></ul>"
      @listView.setElement(@$el.find("ul.assessment_list"))
      @listView.render()
    
    @trigger "rendered"

    return

  # Making a new assessment
  newAssessmentToggle: -> @$el.find('.new_assessment_form, .new_assessment').fadeToggle(250); false

  newAssessmentSave: (event) =>

    # this handles ambiguous events
    # the idea is to support clicks and the enter key
    # logic:
    # it it's a keystroke and it's not enter, act normally, just a key stroke
    # if it's a click or enter, process the form
    
    if event.type != "click" && event.which != 13
      return true
    
    name = @$el.find('.new_assessment_name').val()
  
    if name.length != 0
      newId = Utils.guid()
      newAssessment = new Assessment
        "name"         : name
        "group"        : @group
        "_id"          : newId
        "assessmentId" : newId
        "archived"     : false
      
      newAssessment.save( null, 
        success : => 
          @refresh() 
          @$el.find('.new_assessment_form, .new_assessment').fadeToggle(250, => @$el.find('.new_assessment_name').val(""))
      )

      

      Utils.midAlert "#{name} saved"
    else
      Utils.midAlert "<span class='error'>Could not save <img src='images/icon_close.png' class='clear_message'></span>"
    return false

  # ViewManager
  closeViews: ->
    @curriculaListView.close?()
    for view in @groupViews
      view.close()

  onClose: ->
    @closeViews()
