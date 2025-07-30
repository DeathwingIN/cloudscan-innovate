# 🚀 Complete CloudScan Deployment Guide with EmailJS

This guide will help you deploy your CloudScan website to Hostinger with a working contact form using EmailJS.

## 📋 Overview

- **Frontend**: React app hosted on Hostinger
- **Email Service**: EmailJS (no backend required!)
- **Cost**: Hostinger hosting + EmailJS free tier (200 emails/month)
- **Time to Deploy**: ~30 minutes

## 🎯 Step 1: Setup EmailJS (15 minutes)

### 1.1 Create EmailJS Account
1. Go to [https://dashboard.emailjs.com/](https://dashboard.emailjs.com/)
2. Sign up with your email
3. Verify your email address

### 1.2 Add Email Service
1. Click **"Add New Service"**
2. Choose **Gmail** (recommended) or your email provider
3. **For Gmail**: Click "Connect Account" and authorize
4. **Copy the Service ID** (looks like `service_abc123`)

### 1.3 Create Email Template
1. Go to **"Email Templates"**
2. Click **"Create New Template"**
3. **Template Name**: `contact_form`
4. **Subject**: `New Contact from CloudScan - {{subject}}`
5. **Content**: Copy this HTML:

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #0066cc; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">
    New Contact Form Submission - CloudScan
  </h2>
  
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 8px; font-weight: bold; width: 100px;">Name:</td>
        <td style="padding: 8px;">{{from_name}}</td>
      </tr>
      <tr>
        <td style="padding: 8px; font-weight: bold;">Email:</td>
        <td style="padding: 8px;">{{from_email}}</td>
      </tr>
      <tr>
        <td style="padding: 8px; font-weight: bold;">Company:</td>
        <td style="padding: 8px;">{{company}}</td>
      </tr>
      <tr>
        <td style="padding: 8px; font-weight: bold;">Subject:</td>
        <td style="padding: 8px;">{{subject}}</td>
      </tr>
    </table>
  </div>
  
  <div style="background-color: #ffffff; padding: 20px; border: 1px solid #ddd; border-radius: 8px;">
    <h3 style="color: #0066cc; margin-top: 0;">Message:</h3>
    <p style="line-height: 1.6;">{{message}}</p>
  </div>
  
  <div style="margin-top: 20px; padding: 15px; background-color: #e8f4f8; border-radius: 8px; font-size: 12px; color: #666;">
    Sent from CloudScan website contact form.<br>
    Reply to this email to respond directly to {{from_name}}.
  </div>
</div>
```

6. **Settings**:
   - **To Email**: Your business email (where you want to receive contacts)
   - **Reply To**: `{{from_email}}` (so you can reply directly to customers)
   - **Reply To Name**: `{{from_name}}`

7. **Save** and **copy the Template ID** (looks like `template_xyz789`)

### 1.4 Get Public Key
1. Go to **"Account"** section
2. Find **"Public Key"**
3. **Copy the Public Key** (looks like `ABCdef123GHIjkl`)

## 🔧 Step 2: Configure Your App (5 minutes)

### 2.1 Update Environment Variables
Edit your `.env` file:

```env
REACT_APP_EMAILJS_SERVICE_ID=service_your_actual_id_here
REACT_APP_EMAILJS_TEMPLATE_ID=template_your_actual_id_here
REACT_APP_EMAILJS_PUBLIC_KEY=your_actual_public_key_here
```

**Replace the values** with your actual EmailJS IDs from Step 1!

### 2.2 Test Locally (Optional but Recommended)
```bash
npm run dev
```

1. Go to your contact form
2. Fill it out and submit
3. Check your email for the contact form submission
4. Check browser console for any errors

## 📦 Step 3: Build for Production (2 minutes)

```bash
npm run build
```

This creates a `dist` folder with all your website files.

## 🌐 Step 4: Deploy to Hostinger (10 minutes)

### 4.1 Access Hostinger
1. Login to your **Hostinger account**
2. Go to **hPanel**
3. Find your domain and click **"Manage"**

### 4.2 Upload Files
1. Click **"File Manager"**
2. Navigate to **`public_html`** folder
3. **Delete existing files** (index.html, etc.)
4. **Upload all files** from your `dist` folder:
   - Select all files in `dist` folder
   - Upload to `public_html`
   - Make sure `index.html` is in the root of `public_html`

### 4.3 Set Permissions (if needed)
- Make sure files have proper permissions (usually 644 for files, 755 for folders)

## ✅ Step 5: Test Your Live Website

1. **Visit your website** URL
2. **Navigate to Contact page**
3. **Fill out the contact form**
4. **Submit** and check for success message
5. **Check your email** for the contact form submission

## 🔍 Troubleshooting

### Contact Form Not Working?

1. **Check browser console** (F12) for JavaScript errors
2. **Verify .env values** are correct (no quotes, no spaces)
3. **Test EmailJS directly** using the test component:
   
   Add this to your App.tsx temporarily:
   ```tsx
   import EmailJSTest from './components/EmailJSTest';
   
   // Add <EmailJSTest /> somewhere in your JSX
   ```

### Email Not Received?

1. **Check spam folder**
2. **Verify template "To Email"** in EmailJS dashboard
3. **Check EmailJS dashboard** for sending history
4. **Try a different email address**

### Build/Upload Issues?

1. **Clear browser cache**
2. **Check file permissions** on Hostinger
3. **Make sure all files uploaded** correctly
4. **Verify index.html is in public_html root**

## 📊 What You've Accomplished

✅ **Professional contact form** with real email delivery  
✅ **No backend required** - all client-side  
✅ **Secure and reliable** - using EmailJS infrastructure  
✅ **Mobile responsive** - works on all devices  
✅ **Professional email formatting** - branded emails  
✅ **Direct reply capability** - customers can reply directly  
✅ **Cost effective** - free for 200 emails/month  

## 🎉 Next Steps (Optional Enhancements)

### Add Auto-Reply
Create a second template to send confirmation emails to customers.

### Add Captcha
Prevent spam by adding a simple captcha (hCaptcha or reCAPTCHA).

### Analytics
Track form submissions with Google Analytics.

### Custom Domain Email
Set up professional email addresses (info@yourcompany.com) with your domain.

## 💰 Costs Summary

- **Hostinger**: Your existing hosting plan
- **EmailJS**: Free (up to 200 emails/month)
- **Total additional cost**: $0/month 🎉

## 🆘 Need Help?

Common issues and solutions:

1. **"Service not found"** → Check Service ID in .env
2. **"Template not found"** → Check Template ID in .env  
3. **"Authentication error"** → Check Public Key in .env
4. **No emails received** → Check spam folder and EmailJS dashboard
5. **Form not submitting** → Check browser console for errors

Your CloudScan website is now live with a fully functional contact form! 🚀

---

**📧 Questions?** Feel free to test the contact form on your own website! 😊
