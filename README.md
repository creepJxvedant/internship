# Intern Design Assignment

This is a React + TypeScript project that demonstrates a spreadsheet-like interface for managing job request data. It includes:

- 🔍 A searchable header with toast notifications
- ✏️ Custom editable cells for status, priority, and general inputs
- 🧾 Auto-generated row indexing and padded rows for UI completeness

---

## ✨ Features

- **Search bar** in header that triggers a toast on Enter key
- **Data table** with:
  - Sorting and filtering
  - Custom cell editors (`EditableCell`, `EditableStatusCell`, `EditablePriorityCell`)
  - Vertical and horizontal grid lines
  - Auto-numbered row index (`#`)
  - Extra empty rows for consistent appearance
- **Tailwind CSS** for styling
- **Lucide Icons** and **React Hot Toast** for interactivity

---

## 📁 Project Structure

```
src/
│
├── components/
│   ├── Header.tsx              # Header with search and profile
│   ├── DataTable.tsx           # Table with editable rows
│   ├── EditableCell.tsx        # Generic editable cell
│   ├── EditableStatusCell.tsx  # Dropdown for status
│   ├── EditablePriorityCell.tsx# Dropdown for priority
│
├── hooks/
│   └── useEditableData.ts      # Custom hook to manage editable row state
│
├── types/
│   └── TableData.ts            # Type definition for table rows
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js ≥ 16
- npm or yarn

### Install

```bash
npm install
```

### Run the App

```bash
npm run dev
```

Open your browser and visit `http://localhost:5173`

---

## 🧩 Technologies Used

- **React** + **TypeScript**
- **Tailwind CSS**
- **react-hot-toast**
- **lucide-react**

---

## 📌 Notes

- The `id` column is auto-generated and not editable.
- The search bar triggers toast notification on pressing Enter.
- You can edit any cell by clicking on it.
- The table auto-adds empty rows to ensure a minimum of 10 rows displayed.
- Vertical and horizontal borders create a clear grid layout.

---
