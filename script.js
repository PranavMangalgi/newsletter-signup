const secondPage = $(".second-page");

const firstPage = $(".first-page");
const inputMail = $(".email input");
$("#show-error").hide();

$("document").ready(() => {
  const button = $(".email .button");
  let inputText = "";
  inputMail.on("input", (e) => {
    inputText = e.target.value;
  });
  const isValidEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  button.click(() => {
    if (isValidEmail(inputText) && inputText.trim() !== "") {
      firstPage.hide();
      secondPage.show();
      $("#emailId").textContent = inputText;
      $("#show-error").removeClass("error");
      inputMail.removeClass("error");
      $("#show-error").hide();
    } else {
      $("#show-error").show();
      $("#show-error").addClass("error");
      inputMail.addClass("error");
    }
  });

  const dismissBtn = $(".second-page button");
  dismissBtn.click(() => {
    window.location.reload();
  });
});
