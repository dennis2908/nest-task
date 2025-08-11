# Using node, nest, docker, postman

# Instalation and running project in localhost: </br>

- git clone https://github.com/dennis2908/nest-task </br>
- change database environment in src/app.module </br>
- make sure your docker is running </br>
- open cmd and type docker compose up -d </br>
- import postman json "Task.postman_collection.json" and import it</br>
- Test method : 

POST /tasks

    Creates a new task.
    Request Body: { "title": "string", "description": "string" (optional) }
    Response:
        201 Created: Returns the created task object.
        400 Bad Request: If validation fails (e.g., title is missing or too long).

GET /tasks

    Retrieves a list of all tasks.
    Supports optional query parameters for filtering:
        status: (e.g., ?status=TO_DO)
    Supports optional query parameters for pagination:
        page: (e.g., ?page=1, default: 1)
        limit: (e.g., ?limit=10, default: 10)
    Response:
        200 OK: Returns an array of task objects (potentially paginated).

GET /tasks/:id

    Retrieves a single task by its ID.
    Response:
        200 OK: Returns the task object.
        404 Not Found: If the task with the given ID does not exist.

PATCH /tasks/:id

    Updates an existing task.
    Can update title, description, and/or status.
    Request Body: { "title": "string" (optional), "description": "string" (optional), "status": "string" (optional) }
    Response:
        200 OK: Returns the updated task object.
        400 Bad Request: If validation fails.
        404 Not Found: If the task with the given ID does not exist.


</br>