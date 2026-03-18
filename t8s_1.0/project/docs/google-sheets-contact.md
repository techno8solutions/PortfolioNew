# Contact Form → Google Sheets (via Apps Script)

This project’s contact form can POST submissions to a Google Sheet using a Google Apps Script Web App.

## 1) Create the Sheet

Create a Google Sheet and add this header row in row 1:

- Timestamp
- Full Name
- Email
- Phone
- Company
- Service
- Budget
- Message
- Page URL
- User Agent

## 2) Create the Apps Script Web App

In your Google Sheet:

1. **Extensions → Apps Script**
2. Paste this code into `Code.gs`

```js
function doPost(e) {
  try {
    var body = {};
    if (e && e.postData && e.postData.contents) {
      body = JSON.parse(e.postData.contents);
    }

    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheets()[0]; // or ss.getSheetByName('Sheet1')

    sheet.appendRow([
      new Date(),
      body.fullName || '',
      body.email || '',
      body.phone || '',
      body.company || '',
      body.service || '',
      body.budget || '',
      body.message || '',
      body.pageUrl || '',
      body.userAgent || ''
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

3. **Deploy → New deployment**
4. Select type: **Web app**
5. **Execute as:** Me
6. **Who has access:** Anyone (or anyone in your org, as needed)
7. Click **Deploy** and copy the **Web app URL** (ends with `/exec`)

## 3) Configure this Vite app

Create `t8s_1.0/project/.env.local`:

```bash
VITE_GOOGLE_SHEETS_WEBAPP_URL="PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL_HERE"
```

Then restart the dev server.

## Notes (CORS)

Apps Script Web Apps often don’t return CORS headers. This project submits using `fetch(..., { mode: 'no-cors' })` so the request still reaches Sheets reliably.

