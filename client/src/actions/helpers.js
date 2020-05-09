import { setState } from "statezero";

// Initialize all state paths used by your app as empty.
// These are the states that you can filter using filterState()
// as needed by specific components. All component classes that read
// from these state paths must extend BaseReactComponent class.
//
// - currentUser state path is used by the root App component
// - studentForm and message state paths are used by the StudentForm component
// - studentList state path is used by the StudentList component
export const setEmptyState = () => {
  setState("currentUser", null);
  setState("loginForm", { username: "", password: "" });
  setState("userID", null);

  // Snackbar login resources
  setState("loginFailed", false);
  setState("registered", false);
  setState("passwordShort", false);
  setState("invalidUsername", false);

  // Snackbar Cover resources
  setState("coverTitle", null);
  setState("coverShort", false);
  setState("coverSuccess", false);

  // Cover Resources
  setState("cover", null);
  setState("info", false);
  setState("deleteC", false)
  setState("userCovers", null);
  setState("saveSuccess", false);
  setState("deleteSuccess", false);

  setState("defaultCover", {
    data:
      "Begin by creating a new cover letter.\n\nThen you can create input forms with {_}.\n\nSelectors can be created with {Developer/Engineer/Researcher}.\n\nTreat this as you would `MarkDown`!"
  });
};
