import output from "../components/searchOutput.js";
import input from "../components/searchForm.js";

const webEvents = () => {
  output.searchOutput();
  $("#submit-keyword").click(input.searchEvent);
};

export default { webEvents };
