// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devoured").on("click", function(event) {
      event.preventDefault();
      let id = $(this).data("id");
      console.log(id);
      let newDevour = $(this).data("newdevour");
  
      let newDevourState = {
        devoured: newDevour
      };
      console.log(newDevourState);
      // Send the PUT request
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevourState
      }).then(
        function() {
          console.log("changed devour to", newDevour);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $(".devour-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
  
      var newBurger = {
        burger_name: $("#bu").val().trim(),
        devoured: 0
        // devoured: $("[name=devoured]:checked").val().trim()
      };
  
      // Send the POST request
      $.ajax("/api/burgers", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          console.log("created new burger");
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

    $(".delete-button").on("click", function(event) {
      console.log("Buger Deleted");
      console.log(this);
      let button = $(this);
      // get id from button
      let id = button.attr("data-id");
      $.ajax("/api/burger/" + id, {
        type: "DELETE"
      }).then(function(results) {
        console.log(results);
        location.reload();
      })
    })
});