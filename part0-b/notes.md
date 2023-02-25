
```mermaid
sequenceDiagram
    participant client
    participant server

    client->>server: HTTP POST request to new_note
    activate server
    server-->>client: Responds with HTTP status code 302 (redirect)
    deactivate server
    client->>server: HTTP GET request to 'notes'
    activate server
    server-->>client: Sends notes page
    deactivate server
    client->>server: request main.css
    activate server
    server-->>client: Sends main.css
    deactivate server
    client->>server: request main.js
    activate server
    server-->>client: Sends main.js
    deactivate server
    client->>server: request data.json
    activate server
    server-->>client: Sends data.json
    deactivate server
