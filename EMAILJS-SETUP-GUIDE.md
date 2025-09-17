# EmailJS Setup Guide for My Imagine Photography

## ⚠️ CRITICAL FIX NEEDED: Email Template Configuration

### The 412 Error Issue
Your error shows: `SMTP: Mail command failed: 451 4.0.0 Invalid from`

This means your EmailJS template has an invalid "from" email configuration.

### ✅ CORRECT EmailJS Template Setup

**1. Go to EmailJS Dashboard → Templates → Edit your template**

**2. Set the Email Template Content:**
```
Subject: New Contact Form - {{subject}}

Dear My Imagine Photography,

You have received a new contact form submission:

Name: {{from_name}}
Email: {{customer_email}}
Phone: {{phone}}
Subject: {{subject}}

Message:
{{message}}

---
Reply to this customer at: {{reply_to}}

Best regards,
My Imagine Photography Contact System
```

**3. CRITICAL: Email Settings Configuration**

In your EmailJS template settings:
- **To Email**: `alpireddylokeshraj@gmail.com`
- **From Name**: `My Imagine Photography`
- **From Email**: Use your VERIFIED email domain (NOT customer email)
- **Reply To**: `{{reply_to}}` (this will be the customer's email)

### 🔧 Required EmailJS Service Configuration

**Option A: If you have Gmail service configured**
- From Email: `your-gmail@gmail.com` (your actual Gmail)
- Reply To: `{{reply_to}}`

**Option B: If using custom domain**
- From Email: `noreply@yourdomain.com`
- Reply To: `{{reply_to}}`

### 🚨 Template Variables You Must Include:
- `{{to_name}}` - Your business name
- `{{to_email}}` - Your receiving email
- `{{from_name}}` - Customer's name
- `{{reply_to}}` - Customer's email (for replies)
- `{{phone}}` - Customer's phone
- `{{subject}}` - Email subject
- `{{message}}` - Customer's message
- `{{customer_email}}` - Customer's email (separate field)

### 📧 Service Configuration Steps:

1. **EmailJS Dashboard → Services**
2. **Select your email service**
3. **Configure these settings:**
   - Service ID: `service_ov1kq3j`
   - Set a verified "From Email" (your email, not customer's)
   - Enable proper authentication

### ⚡ Quick Fix Steps:

1. Change template "From Email" to your verified email
2. Use `{{reply_to}}` for customer's email
3. Update template content as shown above
4. Test the form again

The issue is that EmailJS cannot send emails "from" random customer email addresses. It must use a verified sender address.