import { SITE_URL } from "./constants";

export interface ContactEmailData {
    name: string;
    email: string;
    message: string;
}

export const getContactEmailTemplate = (data: ContactEmailData) => {
    const { name, email, message } = data;

    // Design constants based on the portfolio theme
    const primaryColor = "#12284c"; // Dark Blue from site
    const accentColor = "#ffc62c"; // Yellow from site
    const textColor = "#12284c";
    const mutedTextColor = "#64748b";
    const bgColor = "#f1f5f9"; // Muted background
    const cardBg = "#ffffff";
    const borderColor = "#e2e8f0";

    return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Message from Portfolio</title>
        <style>
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            background-color: ${bgColor};
            margin: 0;
            padding: 0;
            color: ${textColor};
          }
          .container {
            max-width: 600px;
            margin: 40px auto;
            background-color: ${cardBg};
            border-radius: 20px;
            overflow: hidden;
            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
            border: 1px solid ${borderColor};
          }
          .header {
            padding: 32px;
            display: flex;
            align-items: center;
            border-bottom: 1px solid ${borderColor};
          }
          .ps-logo {
            width: 40px;
            height: 40px;
            background: linear-gradient(135deg, ${primaryColor} 0%, ${accentColor} 100%);
            border-radius: 10px;
            display: inline-block;
            text-align: center;
            line-height: 40px;
            color: #ffffff;
            font-weight: 800;
            font-size: 18px;
            margin-right: 15px;
            box-shadow: 0 4px 6px rgba(18, 40, 76, 0.2);
            vertical-align: middle;
          }
          .brand-name {
            font-size: 20px;
            font-weight: 800;
            letter-spacing: -0.02em;
            color: ${primaryColor};
            vertical-align: middle;
            text-decoration: none;
          }
          .content {
            padding: 40px;
          }
          .greeting {
            font-size: 18px;
            font-weight: 600;
            margin: 0 0 20px 0;
          }
          .intro {
            font-size: 15px;
            color: ${mutedTextColor};
            margin-bottom: 30px;
            line-height: 1.5;
          }
          .field-card {
            background-color: #fafbfc;
            border: 1px solid ${borderColor};
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 16px;
          }
          .label {
            font-size: 11px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.1em;
            color: ${mutedTextColor};
            margin-bottom: 8px;
            display: block;
          }
          .value {
            font-size: 15px;
            font-weight: 500;
            color: ${textColor};
            margin: 0;
          }
          .message-box {
            background-color: #f8fafc;
            border-left: 4px solid ${primaryColor};
            padding: 20px;
            border-radius: 8px;
            margin-top: 10px;
          }
          .message-text {
            font-size: 15px;
            line-height: 1.6;
            color: ${textColor};
            margin: 0;
            white-space: pre-wrap;
          }
          .footer {
            padding: 30px;
            text-align: center;
            background-color: #fafafa;
            border-top: 1px solid ${borderColor};
          }
          .footer-text {
            font-size: 12px;
            color: ${mutedTextColor};
            margin: 0;
          }
          .footer-link {
            color: ${primaryColor};
            text-decoration: none;
            font-weight: 600;
          }
          @media screen and (max-width: 600px) {
            .container {
              margin: 0;
              width: 100% !important;
              border-radius: 0;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <table>
              <tr>
                <td style="padding-right: 12px;">
                  <div class="ps-logo">PS</div>
                </td>
                <td>
                  <a href="${SITE_URL}" class="brand-name">PRATHIN SAJITH</a>
                </td>
              </tr>
            </table>
          </div>
          
          <div class="content">
            <h2 class="greeting">Hi Prathin,</h2>
            <p class="intro">You've received a new message through your portfolio contact form. Here are the details:</p>
            
            <div class="field-card">
              <span class="label">Sender</span>
              <p class="value">${name}</p>
            </div>
            
            <div class="field-card">
              <span class="label">Email Address</span>
              <p class="value">
                <a href="mailto:${email}" style="color: ${primaryColor}; text-decoration: none; font-weight: 600;">${email}</a>
              </p>
            </div>
            
            <div style="margin-top: 30px;">
              <span class="label">Message Content</span>
              <div class="message-box">
                <p class="message-text">${message}</p>
              </div>
            </div>
          </div>
          
          <div class="footer">
            <p class="footer-text">
              © ${new Date().getFullYear()} <a href="${SITE_URL}" class="footer-link">${SITE_URL.replace("https://", "")}</a> • All rights reserved.
            </p>
          </div>
        </div>
      </body>
    </html>
  `;
};
