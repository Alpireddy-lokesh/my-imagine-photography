# EmailJS Contact Form Testing Guide

## Testing Instructions

1. **Run the website locally** (e.g., Live Server or 127.0.0.1:5500/contact.html).
2. **Fill in the contact form** with:
   - Name (required)
   - Phone number (10 digits, required)
   - Email (required)
   - Subject (optional)
   - Message (required)
3. **Submit the form**.

## Expected Results

- **Success alert** shows on page after submission
- **Owner email inbox** (alpireddylokeshraj@gmail.com) receives the mail
- **EmailJS dashboard** → Email Logs shows the request/delivery

## If Test Fails

### Common Error Codes:
- **412 Error**: Precondition Failed - Most common issue!
  - **Service ID `service_ov1kq3j` does not exist** in EmailJS dashboard
  - **Template ID `template_d8d2kep` does not exist** in EmailJS dashboard
  - Service or template is not properly saved/activated
  - **Solution**: Create the service and template with exact IDs mentioned

- **418 Error**: Service configuration issue
  - Check if Service ID `service_ov1kq3j` exists in EmailJS dashboard
  - Verify service is active and properly configured
  - Ensure email service (Gmail, Outlook, etc.) is connected
  - Check if daily/monthly email limits are exceeded

- **400 Error**: Invalid request format
  - Verify Template ID `template_d8d2kep` exists
  - Check template variable names match exactly
  - Ensure all required template variables are defined

- **403 Error**: Access denied
  - Verify Public Key `XvpIbLKXqIjsSbXpw` is correct
  - Check if domain is allowed in EmailJS settings
  - Ensure account is active and not suspended

- **422 Error**: Template variables mismatch
  - Template variables in EmailJS don't match code variables
  - Check template uses: `{{from_name}}`, `{{phone_number}}`, `{{from_email}}`, `{{subject}}`, `{{message}}`

### General Troubleshooting:
- Check **browser console** (F12) for detailed error messages
- Verify correct **SERVICE_ID**, **TEMPLATE_ID**, **PUBLIC_KEY** in contact.html
- Ensure **EmailJS service** is active in dashboard
- Check **spam folder** in email inbox
- Verify internet connection
- Try testing from EmailJS dashboard first
- Clear browser cache and try again

## EmailJS Dashboard Setup (IMPORTANT!)

**⚠️ The 418 error typically means the EmailJS service is not properly configured. Follow these steps:**

### Step 1: Create EmailJS Account
1. Go to [emailjs.com](https://www.emailjs.com)
2. Sign up for a free account
3. Verify your email address

### Step 2: Add Email Service
1. Go to **Email Services** in dashboard
2. Click **Add New Service**
3. Choose your email provider (Gmail recommended)
4. Follow authentication steps to connect your email
5. **CRITICAL**: After creating, click on the service and manually set Service ID to: `service_ov1kq3j`
   - If you can't change the ID, note the auto-generated ID and update it in contact.html

### Step 3: Create Email Template
1. Go to **Email Templates** in dashboard
2. Click **Create New Template**
3. **CRITICAL**: Set Template ID to: `template_d8d2kep`
4. Set **Subject** to:
   ```
   New lead from My Imagine Photography — {{subject}}
   ```
5. Set **Content** to:
   ```
   You have a new contact submission from the website:

   Name: {{from_name}}
   Phone: {{phone_number}}
   Email: {{from_email}}
   Subject: {{subject}}
   Message:
   {{message}}

   -- Website: My Imagine Photography
   ```
6. **SAVE** the template
7. **TEST** the template from EmailJS dashboard

### Step 4: Get Public Key
1. Go to **Account** → **General**
2. Find your Public Key (should be `XvpIbLKXqIjsSbXpw`)
3. Ensure it matches the one in contact.html

### Step 5: Test Configuration
1. In EmailJS dashboard, go to **Email Templates**
2. Click **Test** on your template
3. Send a test email to verify setup

## EmailJS Configuration Required

Before testing, ensure the following are set up in EmailJS dashboard:

- **Service ID**: `service_ov1kq3j`
- **Template ID**: `template_d8d2kep`
- **Public Key**: `XvpIbLKXqIjsSbXpw`
- **Recipient Email**: alpireddylokeshraj@gmail.com

## Template Configuration

**Template Subject**:
```
New lead from My Imagine Photography — {{subject}}
```

**Template Body**:
```
You have a new contact submission from the website:

Name: {{from_name}}
Phone: {{phone_number}}
Email: {{from_email}}
Subject: {{subject}}
Message:
{{message}}

-- Website: My Imagine Photography
```

## Form Validation

The form includes the following validations:
- Name: Required field
- Phone: Required, must be exactly 10 digits
- Email: Required, must be valid email format
- Message: Required field
- Subject: Optional field

## Browser Requirements

- Modern browsers with JavaScript enabled
- Internet connection for EmailJS service
- No blocking of external scripts or CORS restrictions
