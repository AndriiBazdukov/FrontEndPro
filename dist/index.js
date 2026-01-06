"use strict";

var counter = 0;
var modal = new bootstrap.Modal("#taskModal");
$("#addBtn").on("click", function () {
  var text = $("#taskInput").val().trim();
  if (!text) return;
  counter++;
  var item = $("<li>").addClass("list-group-item d-flex justify-content-between").append($("<span>").addClass("task-text").attr("role", "button").text("Task ".concat(counter, ": ").concat(text)), $("<button>").addClass("btn btn-danger btn-sm delete-btn").text("Delete"));
  $("#taskList").append(item);
  $("#taskInput").val("");
});
$("#taskList").on("click", ".delete-btn", function () {
  $(this).closest("li").remove();
});
$("#taskList").on("click", "li", function (event) {
  if ($(event.target).closest(".delete-btn").length) return;
  var text = $(this).find(".task-text").text();
  $("#modalTaskText").text(text);
  modal.show();
});