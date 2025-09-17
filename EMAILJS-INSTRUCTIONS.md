# PROMPT: Make Contact Form Fully Functional with EmailJS

Project root: `photozone-1.0.0` (static photography site)

Owner Info:
- Brand: **My Imagine Photography**
- Owner Email (recipient): **alpireddylokeshraj@gmail.com**

---

## TASK

Update the existing website so that the **Contact Us** form becomes fully functional using **EmailJS**.  
Currently, `contact.html` contains an inactive form with the note:  
*"The contact form is currently inactive. Get a functional and working contact form with Ajax & PHP in a few minutes."*  

Replace this completely with an **EmailJS-powered form** that actually sends mails to the owner.

---

## REQUIREMENTS

### 1. Replace Existing Contact Form
- File: **contact.html**  
- Replace the current inactive form with a **modern, accessible Bootstrap form** having these fields:
  - **Name** (required) → `id="name"`
  - **Phone Number** (required, 10 digits) → `id="phone"`, `pattern="[0-9]{10}"`
  - **Email** (required) → `id="email"`, `type="email"`
  - **Subject** (optional) → `id="subject"`
  - **Message** (required) → `id="message"`, `textarea`
  - Submit button with **id="contact-submit"`

- Remove the inactive form note.  
- Keep the Google Map embed and footer as-is.

---

### 2. Add EmailJS Integration
- Insert EmailJS SDK before closing `</body>`:
  ```html
  <script src="https://cdn.emailjs.com/dist/email.min.js"></script>
Initialize EmailJS with:

javascript
Copy code
emailjs.init("XvpIbLKXqIjsSbXpw"); // ✅ Public Key
Implement sendMail(event) JS function that:

Prevents default submit.

Validates required fields.

Sends mail using:

javascript
Copy code
emailjs.send("service_ov1kq3j", "template_d8d2kep", templateParams)
where templateParams are:

javascript
Copy code
from_name
phone_number
from_email
subject
message
Shows a success alert when email is sent.

Shows an error alert on failure.

Disables the submit button while sending and shows text "Sending...".

Resets the form on success.

Leave inline comments in contact.html where placeholders must be replaced:

// REPLACE: YOUR_SERVICE_ID

// REPLACE: YOUR_TEMPLATE_ID

// REPLACE: YOUR_PUBLIC_KEY

3. Create Template in EmailJS Dashboard
When creating a template in EmailJS, use exactly these values:

Service ID: service_ov1kq3j

Template ID: template_d8d2kep

Public Key: XvpIbLKXqIjsSbXpw

Template subject:

csharp
Copy code
New lead from My Imagine Photography — {{subject}}
Template body (plain text or HTML):

css
Copy code
You have a new contact submission from the website:

Name: {{from_name}}
Phone: {{phone_number}}
Email: {{from_email}}
Subject: {{subject}}
Message:
{{message}}

-- Website: My Imagine Photography
Recipient email: alpireddylokeshraj@gmail.com

4. Testing Instructions (add as EMAILJS-TESTS.md in root)
Create a new file EMAILJS-TESTS.md with:

markdown
Copy code
# EmailJS Contact Form Testing Guide

1. Run the website locally (e.g., Live Server or 127.0.0.1:5500/contact.html).
2. Fill in the contact form with:
   - Name
   - Phone number (10 digits)
   - Email
   - Subject
   - Message
3. Submit the form.

Expected:
- Success alert shows on page.
- Owner email inbox (alpireddylokeshraj@gmail.com) receives the mail.
- EmailJS dashboard → Email Logs shows the request/delivery.

If fails:
- Check browser console (F12) for errors.
- Verify correct SERVICE_ID, TEMPLATE_ID, PUBLIC_KEY.
- Ensure EmailJS service is active.
- Check spam folder.
5. Improvements (optional)
Add Google reCAPTCHA to prevent spam.

For production, consider logging submissions in a DB or Google Sheets.

Keep sensitive keys secure if backend is introduced later.

DELIVERABLES
Updated contact.html:

New Bootstrap form

EmailJS SDK + sendMail function

Inline comments for replacing EmailJS keys

EMAILJS-TESTS.md:

Step-by-step testing guide

No other files/pages should be changed.
