# LetCode — QA Automation Practice Platform

> The ultimate interactive playground for QA automation engineers.  
> Practice **Selenium**, **Playwright**, and **Cypress** with 21+ real sandbox environments.

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://letcode.in)
![Build](https://github.com/ortoniKC/letcode-2025/actions/workflows/deploy.yml/badge.svg)

---

## 🚀 Tech Stack

| Layer | Technology |
|---|---|
| Framework | [React 18](https://react.dev/) + [Vite](https://vitejs.dev/) |
| Language | TypeScript |
| Styling | [Tailwind CSS v3](https://tailwindcss.com/) + [shadcn/ui](https://ui.shadcn.com/) tokens |
| Routing | [React Router v6](https://reactrouter.com/) |
| Icons | [Lucide React](https://lucide.dev/) + Font Awesome |
| Deployment | [Netlify](https://netlify.com/) via GitHub Actions |

---

## ✨ Features

- **21+ Practice Sandboxes** — Inputs, buttons, dropdowns, tables, frames, alerts, drag & drop, file uploads, waits, and more
- **Playwright Quiz** — Timed interactive quiz with instant feedback and score tracking
- **GitHub User Search** — Search any GitHub user, browse repos with glassmorphic cards
- **Interview Q&A** — Common test automation interview questions with detailed answers
- **Test Practice Scenarios** — Real-world testing scenarios with learning points
- **Free Courses** — Video-based learning with progress tracking
- **Fake Store** — Full e-commerce sandbox (login, products, cart) for end-to-end test practice
- **Open Source Products** — [Ortoni Report](https://www.npmjs.com/package/ortoni-report), [LetXPath](https://chromewebstore.google.com/detail/letxpath/bekehlnepmijedippfibbmbglglbmlgk), [Playwright Runner](https://marketplace.visualstudio.com/items?itemName=ortoni.ortoni)

---

## 🛠️ Getting Started

### Prerequisites
- Node.js 20+
- npm

### Install & Run

```sh
# Clone the repo
git clone https://github.com/ortoniKC/letcode-2025.git
cd letcode-2025

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📜 Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start Vite development server with HMR |
| `npm run build` | Type-check + production build → `dist/` |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint across all `.ts` / `.tsx` files |

---

## 🚢 Deployment

The project deploys automatically to **Netlify** via GitHub Actions.

| Trigger | Action |
|---|---|
| Push / merge to `main` | Production deploy |
| Pull request to `main` | Preview deploy (`pr-<number>` alias) |

### Required GitHub Secrets

Go to **Settings → Secrets and variables → Actions** and add:

| Secret | Where to find it |
|---|---|
| `NETLIFY_AUTH_TOKEN` | Netlify → User Settings → Personal access tokens |
| `NETLIFY_SITE_ID` | Netlify → Site Settings → General → Site ID |

---

## 📁 Project Structure

```
src/
├── components/        # Shared UI — Header, Footer, PageLayout, PageHeader, ScrollToTop
├── context/           # React context — FakeStoreContext
├── hooks/             # Custom hooks — usePageMeta
├── pages/
│   ├── courses/       # Course list, detail, video player
│   ├── fakestore/     # Home, product detail, cart, login
│   ├── grooming/      # Interview Q&A, test practice scenarios
│   ├── main/          # Home, workspace, contact, 404
│   ├── practice/      # 22 interactive automation sandboxes
│   ├── products/      # Ortoni Report, LetXPath, Playwright Runner
│   └── quiz/          # Playwright quiz
├── assets/            # Static assets + quiz JSON data
└── services/          # Course data service
```

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!  
Feel free to open a [GitHub Issue](https://github.com/ortoniKC/letcode-2025/issues) or submit a PR.

---

## 👨‍💻 Created By

- **[Koushik Chatterjee](https://www.linkedin.com/in/ortoni/)** — SDET Architect & Open Source Creator
- **[Bollineni Lakshmi Yaswanth](https://www.linkedin.com/in/bollineni-lakshmi-yaswanth-14472a199)**

📺 YouTube: [LetCode (English)](https://www.youtube.com/@letcode) · [Kurimurai (Tamil)](https://www.youtube.com/@kurimurai)  
💬 Telegram: [LetCode Community](https://t.me/letcode_with_koushik)  
☕ Support: [Buy me a Pizza](https://buymeacoffee.com/letcode)

---

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
