# to install:  install ruby from rubyinstaller.org
# select global path option, (tick options 2 & 3)
# open cmd;  gem install --no-rdoc --no-ri selenium-webdriver capybara
# install chromedriver (NOT chromedriver2!!) from:
# https://code.google.com/p/chromedriver/downloads/detail?name=chromedriver_win_26.0.1383.0.zip&can=2&q=
# copy chromedriver.exe into C:\Ruby193\bin directory

# Capybara is a language for controlling your web browser
# The documentation for Capybara is here: https://github.com/jnicklas/capybara#the-dsl


require 'rubygems'
require 'selenium-webdriver'
require 'capybara'
require 'capybara/dsl'

Capybara.register_driver :selenium do |app|
  Capybara::Selenium::Driver.new(app, :browser => :chrome)
end

Capybara.run_server = false
Capybara.current_driver = :selenium

include Capybara::DSL

#
# This section is for common actions that can be reused
#
#
def login
  visit("http://databases.tangerinecentral.org/tangerine/_design/ojai/index.html")
  fill_in('User name', :with => 'tangerine')
  fill_in('Password', :with => 'tangytangerine')
  click_button('Login')
  # Checking for content causes the browser to wait until it's there
  has_content?("Groups")
end

def visit_group(group_name)
  # Note that #{} is how you insert a variable into a string
  visit("http://databases.tangerinecentral.org/group-#{group_name}/_design/ojai/index.html")
  has_content?("Assessments")
end

def run_assessment(assessment_name)
  # Executes javascript on the page
  # I could've done this with capybara functions but it was really slow
  # find a span element that contains the text [assessment_name] and click on it
  page.execute_script("$('span:contains(#{assessment_name})').click()")

  # find an image element with the class run that is visible and click on it
  page.execute_script("$('img.run:visible').click()")
end

def click_with_javascript(css_selector)
 page.execute_script("$('#{css_selector}').click()")
end


def home_location
#Completes the Home Location instrument
has_content? ("Home Location")
fill_in('Region', :with => 'Practice')
  fill_in('District', :with => 'District')
	fill_in('Village', :with => 'Village')
  click_button('Next')
end

def child_information
has_content? "How old are you?"
click_with_javascript("#question-age div[data-value=15]")
has_content? "What grade are you in"
click_with_javascript("#question-grade div[data-value=5]")
has_content? "Is the participant a girl?"
click_with_javascript("#question-female div[data-value=1]")
click_button "Next"
end

def grid_question
page.execute_script('$("button.start_time").click()')
click_with_javascript ("#prototype_wrapper div[data-index=4]")
sleep 1
click_button "Stop"
sleep 1
click_with_javascript ("#prototype_wrapper div[data-index=4]")
click_button "Next"
end


def reading_comprehension
#has_content? "EGRA 3b: Reading Comprehension"
click_with_javascript ("#question-read_comp1 div[data-value=0]")
click_with_javascript ("#question-read_comp2 div[data-value=0]")
click_with_javascript ("#question-read_comp3 div[data-value=0]")
click_with_javascript ("#question-read_comp4 div[data-value=0]")
click_with_javascript ("#question-read_comp5 div[data-value=0]")
click_button "Next"
end

# 
#
# This section is where the actual steps happen
#
#
login
visit_group "sweetgroup"
run_assessment "EGRA_demo" 
has_content? "Date and Time"
click_button "Next"
home_location
has_content? "Child ID"
click_button "Generate" 
click_button "Next" 
has_content? "Does the child consent?"
click_with_javascript("#consent_yes")
click_button "Next" 
child_information
has_content? "EGRA 1: Letter Sound Identification"
grid_question
has_content? "EGRA 2: Non-word Reading"
grid_question
has_content? "EGRA 3a: Oral Passage Reading"
grid_question
has_content? "EGRA 3b: Reading Comprehension"
reading_comprehension

sleep 2 
