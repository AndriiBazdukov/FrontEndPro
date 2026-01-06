let counter = 0;

const modal = new bootstrap.Modal("#taskModal");

$("#addBtn").on("click", () => {
    const text = $("#taskInput").val().trim();
    if (!text) return;

    counter++;

    const item = $("<li>")
        .addClass("list-group-item d-flex justify-content-between")
        .append(
            $("<span>")
                .addClass("task-text")
                .attr("role", "button")
                .text(`Task ${counter}: ${text}`),
            $("<button>")
                .addClass("btn btn-danger btn-sm delete-btn")
                .text("Delete")
        );

    $("#taskList").append(item);
    $("#taskInput").val("");
});

$("#taskList").on("click", ".delete-btn", function () {
    $(this).closest("li").remove();
});

$("#taskList").on("click", "li", function (event) {
    if ($(event.target).closest(".delete-btn").length) return;

    const text = $(this).find(".task-text").text();
    $("#modalTaskText").text(text);
    modal.show();
});