const API_URL = "http://localhost:8080/api/todos";
const modal = new bootstrap.Modal("#taskModal");

async function loadTodos() {
    const res = await fetch(API_URL);
    const todos = await res.json();

    $("#taskList").empty();

    todos.forEach(todo => {
        const item = $("<li>")
            .addClass("list-group-item d-flex justify-content-between")
            .attr("data-id", todo._id)
            .append(
                $("<span>")
                    .addClass("task-text")
                    .attr("role", "button")
                    .text(todo.text),
                $("<button>")
                    .addClass("btn btn-danger btn-sm delete-btn")
                    .text("Delete")
            );

        $("#taskList").append(item);
    });
}

$("#addBtn").on("click", async () => {
    const text = $("#taskInput").val().trim();
    if (!text) return;

    await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text })
    });

    $("#taskInput").val("");
    loadTodos();
});

$("#taskList").on("click", ".delete-btn", async function () {
    const id = $(this).closest("li").data("id");

    await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    loadTodos();
});

$("#taskList").on("click", "li", function (event) {
    if ($(event.target).closest(".delete-btn").length) return;

    const text = $(this).find(".task-text").text();
    $("#modalTaskText").text(text);
    modal.show();
});

loadTodos();