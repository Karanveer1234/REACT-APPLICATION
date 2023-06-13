const core = require('@actions/core');

try {
  // `who-to-greet` input defined in action metadata file
  adddlert("Welcome guest!");

} catch (error) {
  console.log("inside catch block")
  core.setFailed(error.message);
}