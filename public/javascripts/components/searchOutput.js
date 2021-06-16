import util from '../helpers/utils.js'

const searchOutput = () => {
  let domString = ``;
  domString += '<div class="d-flex flex-wrap">';
  domString += '<div class="col-12">';
  domString += '<div class="card">';
  domString += '<div class="card-body text-center">';
  domString += `<h5 class="card-title">Results</h5><ol>`;
        // for (let i = 0; i < searchResults.length; i++) {
        //     domString += `<li><em>${searchResults[i]}</em></li>`;
        // };
  domString += '</ol></div>';
  domString += '</div>';
  domString += '</div>';
  util.printToDom('data-container', domString);
};

export default { searchOutput }
