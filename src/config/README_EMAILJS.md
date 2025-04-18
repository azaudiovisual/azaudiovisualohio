# EmailJS Setup Guide for A-Z Audiovisual Contact Form

This guide will help you set up EmailJS to make your contact form fully functional. EmailJS allows you to send emails directly from JavaScript without needing a backend server.

## Step 1: Create an EmailJS Account

1. Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account
2. The free plan includes 200 emails per month, which should be sufficient for most small business needs

## Step 2: Connect Your Email Service

1. Once logged in, go to "Email Services" in the dashboard
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the instructions to connect your email account
5. Give your service a name and note the **Service ID** (it will look like `service_xxxxxxx`)

## Step 3: Create an Email Template

1. Go to "Email Templates" in the dashboard
2. Click "Create New Template"
3. Design your email template using the visual editor
4. Make sure to include the following template variables that match your form fields:
   - `{{name}}` - Sender's name
   - `{{organization}}` - Sender's organization
   - `{{email}}` - Sender's email
   - `{{phone}}` - Sender's phone
   - `{{service}}` - Service they're interested in
   - `{{message}}` - Their message
5. Save the template and note the **Template ID** (it will look like `template_xxxxxxx`)

## Step 4: Get Your Public Key

1. Go to "Account" in the dashboard
2. Look for your **Public Key** (it will look like `xxxxxxxxxxxxxx`)

## Step 5: Update Configuration in Your Website

1. Open the file `src/config/emailjs.ts`
2. Replace the placeholder values with your actual EmailJS information:
   ```typescript
   export const EMAILJS_CONFIG = {
     serviceId: 'your_service_id_here',  // Your EmailJS service ID
     templateId: 'your_template_id_here', // Your EmailJS template ID
     publicKey: 'your_public_key_here', // Your EmailJS public key
   };
   ```

## Step 6: Test Your Contact Form

1. After making these changes, run your website locally or deploy it
2. Test the contact form by filling it out and submitting
3. Check that you receive the email at your connected email service

## Important Notes

- EmailJS has a free tier, but if you need more emails per month, they offer paid plans
- The contact form includes validation and error handling
- For additional security, you can implement reCAPTCHA with EmailJS to prevent spam submissions

If you have any questions or need further assistance, please refer to the [EmailJS Documentation](https://www.emailjs.com/docs/).
