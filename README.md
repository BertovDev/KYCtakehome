## Multi-Step Signup Form

This application implements a multi-step signup process using the **Next.js App Router**, where each step is a separate route with its own form. The steps are sequential and state is preserved across them using context and `localStorage`.

---

### Routes Overview

| Route                 | Description                                                   |
| --------------------- | ------------------------------------------------------------- |
| `/signup/`            | **Step 0:** Account creation (email & password)               |
| `/signup/step-1`      | **Step 1:** Personal Information (name, address, etc.)        |
| `/signup/step-2`      | **Step 2:** File Upload (ID and profile photo)                |
| `/signup/step-3`      | **Step 3:** Review & confirmation                             |
| `/signup/wallet-init` | **Final Step:** Confirmation and wallet initialization (mock) |

---

### How It Works

- Each step is implemented on a **separate URL**, improving modularity and maintainability.
- **Progressive Data Collection:**  
   Data from each step is passed to the next using a centralized context (`SignupStepContext.tsx`).
- **Access Control:**  
   A user **cannot access a step** unless the previous step has been completed and its data is available.
- **Persistence with localStorage:**  
   All form data is saved to `localStorage` after each step, allowing users to resume the signup process in case of accidental reloads or navigation away from the page.

---

### `SignupStepContext.tsx`

This React context manages state across the signup flow and handles persistence:

#### Provided Values:

`{   data,         // Collected form data from all previous steps   
setData,      // Function to append new step data   
isHydrated    // Boolean flag indicating if localStorage has been restored }`

#### Responsibilities:

- **State Sharing:** Shares form state across routes (`/signup/step-1` → `/signup/step-2`, etc.).
- **Persistence:** Automatically saves and restores data from `localStorage`.
- **Hydration Awareness:** Uses `isHydrated` to delay rendering until client-side state is available, avoiding hydration mismatch or blank form issues.

---

### Flow Summary

1. User starts at `/signup/` and submits email & password.
2. Redirected to `/signup/step-1` to provide personal info.
3. Continues to `/signup/step-2` to upload ID and photo.
4. Proceeds to `/signup/step-3` to review and confirm details.
5. Final step `/signup/wallet-init` performs confirmation and mock wallet setup.
6. At each step:

   - Data is stored in `SignupStepContext` and persisted to `localStorage`.
   - Navigation to the next step is allowed only if prior steps are completed.

## Upload from Mobile Session

This flow enables a user to upload a file from a mobile device using a QR code-generated session. The upload is temporary and can later be retrieved from the desktop session.

---

### Session Handling

#### `GET /api/session/status`

**Description:**  
Check if a given `sessionId` is still active.

**Query Parameters:**
`sessionId: string
`
**Response:**
`boolean // true if the session is active, false otherwise`

---

### Upload Endpoint

#### `POST /api/upload`

**Description:**  
Receives a file upload via `FormData` from the mobile session and stores it temporarily.

**Request Body:**

- `FormData` with file(s)
- Must include a valid `sessionId`

**Behavior:**

- Saves the uploaded file(s) associated with the given `sessionId`
- Marks the session as inactive (disabling further uploads)

---

#### `GET /api/upload`

**Description:**  
Fetch the uploaded file(s) associated with a session.

**Query Parameters:**
`sessionId: string`

**Response (Mocked for Testing):**
`{ name: string;   url: string;   size: number;   type: string; }`

---

### Frontend Behavior

#### `ConnectMobileComponent.tsx` (Desktop)

1. **On Mount:**
   - Generates a new `sessionId` and embeds it into a QR code along with the current URL.
2. **Starts Polling:**
   - Calls `/api/session/status?sessionId=...` every 2 seconds to check if the mobile has uploaded a file.
3. **When Session Becomes Inactive:**
   - Fetches the uploaded file(s) using `GET /api/upload?sessionId=...`
   - Appends the files to the main form data

---

#### Mobile Upload Page

**Path:**
`/signup/upload/[sessionId]`

**Behavior:**

- Reads the `sessionId` from the URL
- Uploads the file using `POST /api/upload`
- Once the file is uploaded, the session is deactivated to prevent multiple uploads

---

### Flow Summary

1. Desktop user opens a page with `ConnectMobileComponent.tsx`
2. A QR code is shown, containing a new `sessionId` and upload URL
3. Mobile user scans the QR code and navigates to `/signup/upload/[sessionId]`
4. Mobile user uploads a file
5. The session is marked as inactive after upload
6. Desktop client detects the change and fetches the uploaded file

### Schema Validation

The App use zod for schema creation and validation. Each step of the form has ir own schema and validation process.
