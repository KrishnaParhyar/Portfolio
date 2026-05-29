# Contact form — real emails to your inbox

When someone fills **Hire Me / Contact**, you get an email at **srikrishnadevi47@gmail.com**.

We use [EmailJS](https://www.emailjs.com/) (free tier: ~200 emails/month). No backend server needed.

## Step 1 — Create account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up with **srikrishnadevi47@gmail.com**

## Step 2 — Connect Gmail

1. Dashboard → **Email Services** → **Add New Service**
2. Choose **Gmail**
3. Connect your Google account and save
4. Copy the **Service ID** (e.g. `service_xxxxxxx`)

## Step 3 — Email template

1. **Email Templates** → **Create New Template**
2. **To Email:** `srikrishnadevi47@gmail.com`
3. **Subject:** `Portfolio: {{subject}}`
4. **Content** (example):

```
New message from your portfolio (Hire Me form)

Name: {{from_name}}
Email: {{reply_to}}

Message:
{{message}}
```

5. **Reply-To:** `{{reply_to}}` (so you can reply directly to the visitor)
6. Save and copy the **Template ID** (e.g. `template_xxxxxxx`)

## Step 4 — Public key

1. **Account** → **General** → **API Keys**
2. Copy your **Public Key**

## Step 5 — Add keys to this project

1. In the portfolio folder, copy `.env.example` to `.env`:

```powershell
cd "C:\Users\hijaz trd\Projects\portfolio"
copy .env.example .env
```

2. Open `.env` and paste your three values:

```
VITE_EMAILJS_SERVICE_ID=service_xxxxx
VITE_EMAILJS_TEMPLATE_ID=template_xxxxx
VITE_EMAILJS_PUBLIC_KEY=xxxxxxxx
```

3. **Restart** the dev server (`Ctrl+C`, then `npm run dev`)

## Step 6 — Test

1. Open the site → **Contact** / **Hire Me**
2. Submit a test message
3. Check **srikrishnadevi47@gmail.com** (and spam folder once)

## Deploy (Vercel / Netlify)

Add the same three variables in your host’s **Environment Variables** settings, then redeploy.

**Important:** Never commit `.env` to GitHub — it stays only on your computer and hosting dashboard.
