# Bitasmbl-Real-time-Polling-App-58b943-Nodar_Mebunia

## Description
Build a web application where users can create polls, vote in real-time, and view live results with dynamic charts. The project emphasizes interactive UI, real-time data updates, and social engagement.

## Tech Stack
- Vue.js
- Socket.IO

## Requirements
- Allow users to create, edit, and delete polls
- Support user interactions such as liking or commenting on polls
- Display poll results in dynamic charts
- Enable real-time voting updates for all users

## Installation
Follow these steps to set up the project locally.

1. Clone the repository (replace remote URL if needed):
   git clone https://github.com/MrBitasmblTester/Bitasmbl-Real-time-Polling-App-58b943-Nodar_Mebunia.git

2. Change into the project directory:
   cd Bitasmbl-Real-time-Polling-App-58b943-Nodar_Mebunia

3. The project is expected to contain separate frontend and backend/service folders. Install backend dependencies:
   cd server
   npm install

4. Install frontend dependencies:
   cd ../frontend
   npm install

5. Environment variables (Node backend):
   - Create a `.env` file in the `server` directory with at least the following variables configured for your environment:
     NODE_ENV=development
     PORT=3000
     DATABASE_URL=<your_database_connection_string>

   Adjust `PORT` and `DATABASE_URL` as required by your chosen persistence layer.

## Usage
Start the backend (Socket.IO server) and frontend (Vue.js app) to run the application locally.

1. Start the backend service:
   cd server
   npm start
   # or if your entry is index.js:
   # node index.js

2. Start the frontend app:
   cd ../frontend
   npm run serve
   # or the equivalent Vue start command configured in package.json

3. Open the frontend in your browser (commonly http://localhost:8080 or the address shown by the frontend dev server). The frontend will connect to the backend via Socket.IO to receive and emit real-time updates.

Note: Ensure the `DATABASE_URL` in the backend `.env` is set and the database (if used) is reachable before starting the backend.

## Implementation Steps
1. Initialize repository structure with two main folders: `server/` for the Socket.IO backend and `frontend/` for the Vue.js application.
2. Implement a Node-based backend that initializes a Socket.IO server to handle real-time connections from clients.
3. Define persistent storage access in the backend (configured via `DATABASE_URL`) to store polls, options, likes, and comments. Ensure basic CRUD operations for polls are implemented.
4. Create API routes in the backend to support poll CRUD: list polls, get poll by id, create, update, delete. Also add endpoints for likes and comments.
5. Implement backend logic to validate incoming poll data (title, options) and enforce basic constraints (e.g., unique option ids within a poll).
6. Add Socket.IO events in the backend for real-time actions: broadcasting vote updates, broadcasting newly created/updated/deleted polls, and broadcasting new comments/likes.
7. Build the Vue.js frontend with components for:
   - Poll list (show all polls)
   - Poll creation/edit form
   - Poll detail view with voting controls
   - Likes and comments UI
   - Dynamic chart components that render poll results and update when new data arrives
8. Connect the frontend to the backend over Socket.IO to listen for and emit real-time events (votes, poll changes, comments, likes). Update local UI state upon receiving events to reflect live data.
9. Implement client-side interactions: creating, editing, deleting polls via API; voting via API and emitting socket events; liking and commenting via API and emitting socket events. Ensure UI updates immediately and also reconciles with server-sent events.
10. Add error handling and input validation on both frontend and backend. Test concurrent voting flows to ensure real-time updates remain consistent across clients.
11. Iterate on UX: ensure charts update smoothly when new votes arrive and that likes/comments appear in real-time.

## API Endpoints (Optional)
The project implies a backend API for polls alongside Socket.IO real-time events. Example endpoints and socket events:

REST API Endpoints:
- GET /api/polls — Retrieve list of polls
- POST /api/polls — Create a new poll
- GET /api/polls/:id — Retrieve a single poll by id
- PUT /api/polls/:id — Update an existing poll
- DELETE /api/polls/:id — Delete a poll
- POST /api/polls/:id/vote — Submit a vote for a poll option
- POST /api/polls/:id/likes — Add a like to a poll
- GET /api/polls/:id/comments — Retrieve comments for a poll
- POST /api/polls/:id/comments — Add a comment to a poll

Socket.IO events (examples):
- server -> clients: "poll_created" — broadcast when a new poll is created
- server -> clients: "poll_updated" — broadcast when a poll is edited
- server -> clients: "poll_deleted" — broadcast when a poll is deleted
- server -> clients: "vote_updated" — broadcast when a vote is received (includes updated counts)
- server -> clients: "comment_added" — broadcast when a new comment is posted
- server -> clients: "like_updated" — broadcast when likes change
- client -> server: "cast_vote" — client emits when submitting a vote
- client -> server: "create_poll", "edit_poll", "delete_poll", "add_comment", "add_like" — client emits for corresponding actions

Keep API routes and socket events minimal and consistent with the requirements: create/edit/delete polls, like/comment, display dynamic chartable results, and enable real-time vote updates for all connected users.