
// G
// CODE According to specification
function click_filter_element (event) {

  /*
    ARGUMENTS
      event: event-object created when user clicks on one of the filter elements.

    SIDE-EFFECTS
      Marks the clicked filter element as selected / unselected.
      Since a filter element will have changed after the click, the list of
      programmes must be updated.

      Attention VG
        Careful with the propagation of the click-event

    NO RETURN VALUE

  */
const marked_when_clicked = event.currentTarget; 
marked_when_clicked.classList.toggle("selected");

update_programmes ();

}


// G
// CODE according to specification
function create_filter_element (data) {

  /*
    ARGUMENTS
      data: object that contains the following keys:
        class (string): a class-name given to the created element
        textContent (string): the text that the element contains
        parent (reference to HTML-element): the HTML-element that is the parent of the created element

      No control of arguments.

    SIDE-EFFECTS
      Creates a new dom-element with the tag "li".
      Gives the new dom-element the class contained in data.class
      Appends the new dom-element to the element referenced in data.parent
      Sets the text content of the new dom-element to data.textContent
      Sets the function click_filter_element as a listener to "click" for the new dom-element

    RETURN VALUE
      Returns a reference to the new dom-element
  */

const parent = data.parent; 

const new_dom_element = document.createElement ("li");
new_dom_element.classList.add(data.class);
parent.appendChild(new_dom_element);
      
new_dom_element.textContent = data.textContent; 
new_dom_element.addEventListener("click", click_filter_element);

return new_dom_element;

}


// VG
// CODE according to specification
function add_group_toggling (filter_container_dom) {

  /*
    ARGUMENT
      filter_container_dom: reference to a HTML-element that contains a set of fliter_elements
            Exempel: the <ul> that contains the filters for Language.

    SIDE EFFECTS
      The function makes sure that when the user clicks on filter_container_dom, all the
      filter_elements that it contains are selected / unselected.
      Since some filter elements will have changed after the click, the list of
      programmes must be updated.

    NO RETURN VALUE

  */
  
}


// VG
// CODE according to specifications
function toggle_cities (event) {

  /*

    ARGUMENTS
      This function does not take any arguments

    SIDE EFFECTS
      This function checks the state of the first city-filter-element (Madrid).
      If it is selected then it de-selects ALL city-filter-elements
      If it is de-selected then it selects ALL city-filter-elements 

    NO RETURN VALUE

  */

}


// WRITE SPECIFICATION
// ATTENTION: You need to write the specification of all three functions:
//            create_countries_cities_filters, create_country and create_city
function create_countries_cities_filters () {
  /* 
    ARGUMETS
      - The function doesn??t take any argumets. 
    SIDE EFFECTS
      - When this function is running its making sure that the arguments that's called are all the country obejct in COUNTRIES in the function create_country.
    RETURN
    - nothing
  */
  function create_country (country) {
    /* 
    ARGUMETS
      country: objects from COUNTRIESthat contains the following keys,
      id: id of country
      name: country name 
      imagesNormal: image of country
      
    SIDE EFFECTS
      - This function creates a new dom element "div"
      - Gives the new dom element two classes which is "country" and "filter_container".
      - After this it changes the id to "country_" + "country.id".
      - Appends the new dom element to "#country_filter > ul". 

      - Sets the HTML content of the new dom element with the country name and the ul. 

      - When the function create_city is running this is making sure that the arguments are the cities in the array CITIES. 
    
    RETURN
    - nothing
  */
    const dom = document.createElement("div");
    dom.classList.add("country");
    dom.classList.add("filter_container");
    dom.id = "country_" + country.id;
    document.querySelector("#country_filter > ul").append(dom);
    
    dom.innerHTML = `
      <h1>${country.name}</h1>
      <ul class="filter_list"></ul>
    `;
    
    const cities = array_filter(CITIES, test_function);
    function test_function (city) {
    
      return city.countryID === country.id;
    }

    array_each(cities, create_city);
  }
  function create_city (city) {
  /* 
    ARGUMETS
      - city: objects from CITIES that contains the following keys,
      - id: id of city
      - name: city name 
      - imagesNormal: image of city
    SIDE EFFECTS
      - Creates a new dom element
      - Parent is `#country_$city.countryID} > ul`
      - A new class for the dom element is given "selected"
      - The textContent is set to city.name 
      
      - The dataset.id is changed to city.id
    RETURN
      - Nothing
  */
    const dom = create_filter_element({
      parent: document.querySelector(`#country_${city.countryID} > ul`),
      class: "selected",
      textContent: city.name,
    });
    dom.dataset.id = city.id;

  }

  array_each(COUNTRIES, create_country);
}

// G
// ABSTRACT AND WRITE SPECIFICATION
//    As you can see, all three functions below do basically the same thing.
//    Abstract them to one function, and write the specification of that function.
function create_levels_filter () {
  function create_level (level) {
    const dom = create_filter_element({
      parent: document.querySelector("#level_filter > ul"),
      class: "selected",
      textContent: level.name,
    });
    dom.dataset.id = level.id;
  }
  array_each(LEVELS, create_level);
}
// Create Subjects Filter
function create_subjects_filter () {
  function create_subject (subject) {
    const dom = create_filter_element({
      parent: document.querySelector("#subject_filter > ul"),
      class: "selected",
      textContent: subject.name,
    });
    dom.dataset.id = subject.id;
  }
  array_each(SUBJECTS, create_subject);
}
// Create Search Field
function create_language_filter () {
  function create_element (data) {
    const dom = create_filter_element({
      parent: document.querySelector("#language_filter > ul"),
      class: "selected",
      textContent: data.name,
    });
    dom.dataset.id = data.id;
  }
  array_each(LANGUAGES, create_element);
}


// G / VG (see details in specification)
// CODE according to specifications
function create_programme (programme) {
  
  /*

    ARGUMENT
      programme (object): One of the objects from PROGRAMMES

    SIDE-EFFECTS
      This function creates the HTML-element that contains all the information
      about one programme, as seen in the video / image.
      
      VG: The background image is a random image from among the images of the city
          in which the programme is (via the university)
      G:  No background image required.


      VG: The "see more" interaction must be included.
      G:  The "see more" element is not required. And that information needs not be in place.

    NO RETURN VALUE

  */  

const new_element = document.createElement ("div"); 
const parent = document.querySelector ("#programmes > ul");
parent.appendChild (new_element); 

new_element.classList.add ("programme");
new_element.innerHTML = `
<div> 
  <h5>${programme.name}</h5>
  <p>${UNIVERSITIES[programme.universityID].name} </p>
  <p>${CITIES[UNIVERSITIES[programme.universityID].cityID].name}, ${LANGUAGES[programme.languageID].name} </p>
    <div> 
      <p>${LEVELS[programme.levelID-1].name}, ${SUBJECTS[programme.subjectID].name}, ${LANGUAGES[programme.languageID].name}</p>
  </div>
</div>

<div class="bottom_programme">
  <p> ${CITIES[UNIVERSITIES[programme.universityID].cityID].name}, sun-index: ${CITIES[UNIVERSITIES[programme.universityID].cityID].sun} (${percenter(CITIES[UNIVERSITIES[programme.universityID].cityID].sun,365)})%</p>
</div> 
`
}

// G
// CODE according to the specification
function update_programmes () {

  /*
      NO ARGUMENTS

      SIDE EFFECTS
        This function updates the programmes shown on the page according to
        the current filter status (which filter elements are selected / unselected).
        It uses the function read_filters to know which programmes need to be included.

        VG: The top images (header) need to be updated here

      NO RETURN VALUE

  */
 const update_box = document.querySelector ("#programmes > ul");
  update_box.innerHTML = ``;

let programmes = read_filters(); 
  if (programmes.length !== 0){
    let text = document.querySelector("#programmes > p");
    text.innerHTML = ``; 
  } else {
    let text = document.querySelector ("#programmes > p");
    text.innerHTML = `Inga program upfyller nuvarande filter.`; 
  }

  array_each(programmes, create_programme);
}

// G
// WRITE SPECIFICATION
// You must understand how this function works. There will be questions about it
// in the code review (kodredovisning)

// Optional VG: Which parts of the function's code could be abstracted?
//              Implement it
function read_filters () {
  
/*
  ARGUMENT
    - This function does not take any arguments 

  SIDE-EFFECT
    -The function creates an array (programmes) that includes all programmes from PROGRAMMES which includes the selected city, level, subject and any possible value in the search-field.

  RETURN
    - Programmes
  */
  const city_selected_dom = document.querySelectorAll("#country_filter li.selected");

  const city_id_selected = [];
  function callback_add_cityID (dom_element) {
    const id_as_integer = parseInt(dom_element.dataset.id);
    city_id_selected.push(id_as_integer);
  }
  array_each(city_selected_dom, callback_add_cityID);

  const universities = [];
  for (let i = 0; i < city_id_selected.length; i++) {
    const city_id = city_id_selected[i];
    for (let ii = 0; ii < UNIVERSITIES.length; ii++) {
      const university = UNIVERSITIES[ii];
      if (university.cityID === city_id) {
        universities.push(university);
      }
    }
  }

  let programmes = [];
  function callback_add_programmes (university) {
    const university_id = university.id;
    for (let i = 0; i < PROGRAMMES.length; i++) {
      const programme = PROGRAMMES[i];
      if (programme.universityID === university_id) {
        programmes.push(programme);
      }
    }
  }
  array_each(universities, callback_add_programmes);



  const level_selected_dom = document.querySelectorAll("#level_filter li.selected");
  const level_id_selected = [];
  function callback_add_levelID (dom_element) {
    const id_as_integer = parseInt(dom_element.dataset.id);
    level_id_selected.push(id_as_integer);
  }
  array_each(level_selected_dom, callback_add_levelID);

  function test_function_level (programme) {
    return level_id_selected.includes(programme.levelID);
  }
  programmes = array_filter(programmes, test_function_level);



  const language_selected_dom = document.querySelectorAll("#language_filter li.selected");
  const language_id_selected = [];
  function callback_add_languageID (dom_element) {
    const id_as_integer = parseInt(dom_element.dataset.id);
    language_id_selected.push(id_as_integer);
  }
  array_each(language_selected_dom, callback_add_languageID);



  function test_function_language (programme) {
    return language_id_selected.includes(programme.languageID);
  }
  programmes = array_filter(programmes, test_function_language);



  const subject_selected_dom = document.querySelectorAll("#subject_filter li.selected");
  const subject_id_selected = [];
  function callback_add_subjectID (dom_element) {
    const id_as_integer = parseInt(dom_element.dataset.id);
    subject_id_selected.push(id_as_integer);
  }
  array_each(subject_selected_dom, callback_add_subjectID);



  function test_function_subject (programme) {
    return subject_id_selected.includes(programme.subjectID);
  }
  programmes = array_filter(programmes, test_function_subject);



  const search_string = document.querySelector("#search_field input").value;
  if (search_string !== "") {
    function test_function (programme) {
      return programme.name.includes(search_string);
    }
    programmes = array_filter(programmes, test_function);
  }

  return programmes;
}
