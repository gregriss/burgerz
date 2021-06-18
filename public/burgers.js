// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function () {
  $(".change-devoured").on("click", function (event) {
    event.preventDefault();
    let id = $(this).data("id");
    console.log(`id: ${id}`);
    let newDevour = $(this).data("newdevour");
    let newDevourState = {
      devoured: newDevour
    };
    console.log(newDevourState);
    // Send the PUT request
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevourState
    }).then(response => {
      console.log("changed devour to", newDevour);
      // Reload page to get updated list
      console.log(response);
      location.reload();
    }
    );
  });

  $(".devour-form").on("submit", function (event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    if ($("#bu").val() !== "") {
      const newBurger = {
        burger_name: $("#bu").val().trim(),
        devoured: 0
        // devoured: $("[name=devoured]:checked").val().trim()
      };
      // Send the POST request
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function () {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    } else {
      console.log('you need to add a burger name');
    }
  });

  $(".delete-button").on("click", function (event) {
    event.preventDefault();
    console.log("Buger Deleted");
    // console.log(this);
    let button = $(this);
    // get id from button
    let id = button.attr("data-id");
    $.ajax("/api/burger/" + id, {
      type: "DELETE"
    }).then(function (results) {
      console.log(results);
      location.reload();
    })
  })
});