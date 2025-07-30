# EmailJS Setup Guide for CloudScan Contact Form

EmailJS allows you to send emails directly from your frontend without needing a backend server. Perfect for your Hostinger hosting setup!

## 🚀 Quick Setup Steps

### 1. Create EmailJS Account

1. Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

### 2. Add Email Service

1. **In EmailJS Dashboard**, click **"Add New Service"**
2. **Choose your email provider**:

   **Option A: Gmail (Recommended)**
   - Select "Gmail"
   - Click "Connect Account" 
   - Login with your Gmail account
   - Grant permissions

   **Option B: Outlook/Hotmail**
   - Select "Outlook"
   - Follow similar steps

   **Option C: Other SMTP**
   - Select "Other SMTP"
   - Enter your email provider's SMTP settings

3. **Note your Service ID** (e.g., `service_abc123`)

### 3. Create Email Template

1. **Click "Email Templates"** in dashboard
2. **Click "Create New Template"**
3. **Template settings**:
   - **Template Name**: `contact_form`
   - **Subject**: `New Contact Form Submission - {{subject}}`
   - **To Email**: Your business email (where you want to receive contact forms)

4. **Template Content** (copy this HTML):

```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #333; border-bottom: 2px solid #0066cc; padding-bottom: 10px;">
    New Contact Form Submission - CloudScan
  </h2>
  
  <div style="background-color: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
    <h3 style="color: #0066cc; margin-top: 0;">Contact Details</h3>
    <table style="width: 100%; border-collapse: collapse;">
      <tr>
        <td style="padding: 8px 0; font-weight: bold; width: 120px;">Name:</td>
        <td style="padding: 8px 0;">{{from_name}}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; font-weight: bold;">Email:</td>
        <td style="padding: 8px 0;">{{from_email}}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; font-weight: bold;">Company:</td>
        <td style="padding: 8px 0;">{{company}}</td>
      </tr>
      <tr>
        <td style="padding: 8px 0; font-weight: bold;">Subject:</td>
        <td style="padding: 8px 0;">{{subject}}</td>
      </tr>
    </table>
  </div>
  
  <div style="background-color: #fff; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
    <h3 style="color: #0066cc; margin-top: 0;">Message</h3>
    <p style="line-height: 1.6; color: #333;">{{message}}</p>
  </div>
  
  <div style="margin-top: 20px; padding: 15px; background-color: #e8f4f8; border-radius: 5px;">
    <p style="margin: 0; font-size: 12px; color: #666;">
      This message was sent from the CloudScan website contact form.
      <br>Reply directly to this email to respond to {{from_name}} at {{from_email}}.
    </p>
  </div>
</div>
```

5. **Save the template** and **note the Template ID** (e.g., `template_xyz789`)

### 4. Get Public Key

1. **Go to "Account"** in EmailJS dashboard
2. **Find "Public Key"** section
3. **Copy your Public Key** (e.g., `abcDEF123ghiJKL`)

### 5. Configure Your App

Update your `.env` file with the actual values:

```env
REACT_APP_EMAILJS_SERVICE_ID=service_abc123
REACT_APP_EMAILJS_TEMPLATE_ID=template_xyz789
REACT_APP_EMAILJS_PUBLIC_KEY=abcDEF123ghiJKL
```

### 6. Test Your Setup

1. **Start your development server**:
   ```bash
   npm run dev
   ```

2. **Fill out and submit the contact form**
3. **Check your email** for the contact form submission
4. **Check browser console** for any errors

## 🎯 Complete Configuration Example

After setup, your `.env` should look like:
```env
REACT_APP_EMAILJS_SERVICE_ID=service_1a2b3c4
REACT_APP_EMAILJS_TEMPLATE_ID=template_5d6e7f8
REACT_APP_EMAILJS_PUBLIC_KEY=ABCdef123GHIjkl
```

## 🔧 Advanced Template Variables

The template uses these variables from your contact form:
- `{{from_name}}` - User's name
- `{{from_email}}` - User's email
- `{{company}}` - User's company
- `{{subject}}` - Message subject
- `{{message}}` - User's message

## 📧 Email Delivery Settings

### Reply-To Configuration
To make replies go directly to the user who submitted the form:

1. **In your template settings**, set:
   - **Reply To**: `{{from_email}}`
   - **Reply To Name**: `{{from_name}}`

### Auto-Reply (Optional)
Create a second template for auto-replies to users:

1. **Create new template**: `contact_form_autoReply`
2. **To Email**: `{{from_email}}`
3. **Subject**: `Thank you for contacting CloudScan`
4. **Content**:
```html
<div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
  <h2 style="color: #0066cc;">Thank you for contacting CloudScan!</h2>
  
  <p>Dear {{from_name}},</p>
  
  <p>Thank you for your interest in our smart scanning solutions. We have received your message and will get back to you within 24 hours.</p>
  
  <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
    <h4>Your Message:</h4>
    <p><strong>Subject:</strong> {{subject}}</p>
    <p><strong>Message:</strong> {{message}}</p>
  </div>
  
  <p>Best regards,<br>
  The CloudScan Team</p>
</div>
```

Then update your React code to send both emails:
```typescript
// Send main notification
await emailjs.send(serviceId, templateId, templateParams, publicKey);

// Send auto-reply
await emailjs.send(serviceId, 'template_autoReply_id', templateParams, publicKey);
```

## 🚀 Production Deployment

### For Hostinger:
1. **Build your project**: `npm run build`
2. **Upload `dist` folder contents** to Hostinger's `public_html`
3. **EmailJS works directly from the browser** - no server-side configuration needed!

### Environment Variables in Production:
Since this runs in the browser, the variables will be embedded in your build. This is fine for EmailJS as they're designed to be public.

## 💰 EmailJS Pricing

- **Free Plan**: 200 emails/month
- **Personal Plan**: $15/month for 10,000 emails
- **Professional Plan**: $35/month for 50,000 emails

Perfect for most contact forms!

## 🔒 Security Considerations

1. **Rate Limiting**: EmailJS has built-in rate limiting
2. **Domain Restrictions**: You can restrict usage to specific domains in EmailJS dashboard
3. **Public Keys**: These are meant to be public, so it's safe to include in your frontend
4. **Spam Protection**: Consider adding a simple captcha if needed

## 🐛 Troubleshooting

### Common Issues:

1. **"Service not found"**
   - Check your Service ID is correct
   - Make sure service is active in EmailJS dashboard

2. **"Template not found"**
   - Verify Template ID
   - Ensure template is published

3. **"Authentication error"**
   - Check Public Key
   - Verify email service connection

4. **Emails not received**
   - Check spam folder
   - Verify template's "To Email" field
   - Test with a simple template first

### Testing Tips:
1. **Use browser console** to see EmailJS responses
2. **Check EmailJS dashboard** for email sending history
3. **Test with a simple message** first
4. **Verify all environment variables** are loaded

## 📊 Monitoring

EmailJS dashboard shows:
- Email sending statistics
- Success/failure rates  
- Monthly usage
- Error logs

## 🎉 Benefits of EmailJS

✅ **No backend required** - perfect for static hosting
✅ **Easy setup** - just a few clicks
✅ **Reliable delivery** - uses established email services
✅ **Real-time sending** - immediate email delivery
✅ **Built-in security** - rate limiting and domain restrictions
✅ **Great for contact forms** - designed specifically for this use case
✅ **Cost-effective** - free tier covers most small websites

Your contact form is now ready to send real emails! 🚀
