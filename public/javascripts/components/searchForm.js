import output from './searchOutput.js'

const searchEvent = (e) => {
  e.preventDefault();
  
  $("#search-form").trigger("reset");
  $("#collapseOne").removeClass("show");
};

export default { searchEvent }
