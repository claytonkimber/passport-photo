# Passport Photo

A free passport photo camera that lives in your phone's browser. You can keep it on your home screen like any other app, and you never need an app store.

**Try it:** https://claytonkimber.github.io/passport-photo/ (the camera itself is at [`/app/`](https://claytonkimber.github.io/passport-photo/app/))

## Your passport photo, and your face stays yours

Search an app store for "passport photo" and you'll find plenty of apps that want a little something from you first: an account, an email address, permission to follow you around, and a copy of your face on their servers. Many want a payment before you can download your own picture. And once your photo is sitting on someone else's computer, what happens to it next is up to them.

We do it differently. This app asks for just one thing: your camera.

| | Many app-store passport photo apps | This app |
|---|---|---|
| Your photo goes to a company's server | Often | **Never.** Everything happens right on your phone |
| Your photo is kept | Often, on their servers | **No.** It's only saved if you save it |
| Account, email or personal details | Often required | **None at all** |
| Tracking cookies, analytics, ads | Common | **None** |
| Paying to download your own photo | Common | **Free.** No watermark, no paywall |
| Rules for your country | Varies | **Checked against official government websites** for every country listed |
| Works without internet | Rarely | **Yes**, after the first use. Try it in airplane mode |
| Needs an app store | Yes | **No.** Just add it to your home screen |

**And it works.** US passport photos made with this app have already been accepted. You can see the list in [Confirmed accepted photos](#confirmed-accepted-photos).

Just good old passport photos: made on your phone, built to your country's rules, and shared with nobody unless you choose to share them.

> This is a free tool made with care, but it can make mistakes. Take a good look at your photo before you send it in. The [Disclaimer](#disclaimer) has the details.

## What the app does

- **Country selection:** Each country has its own photo size, head size, eye line, space above the head and background color. The app also uses the method that each country uses to measure the head. For other countries, select "Other country". This option uses the ICAO international standard (35×45 mm photo, 32–36 mm head). Most passports use this standard. The app tells you that this standard is not checked against the rules of your country.
- **Guides:** The camera image shows the shape of the photo, an oval for the head and a band for the eyes.
- **Live checks:** The app checks the position of the face: one face only, size, center position, head tilt and face direction. The app also checks the expression and the eyes: no smile, closed mouth, open eyes and eyes on the lens. The app also checks the background and the light: a plain light background, equal light and correct exposure.
- **Light:** The Light button turns on the LED of the back camera. With the front camera, the screen becomes white.
- **Automatic photo:** When all checks are correct, a 3-2-1 countdown starts. Then the app takes the photo.
- **Processing:** The app cuts the photo to the dimensions of your country. The app changes the wall to the background color that your country requires. Hair and ears stay in the photo. Then the app does the face checks again on the final photo.
- **File:** The app saves a JPEG file at 600 dpi. If your country requires more pixels for online applications, the file is larger.
- **Print it tab:** This tab tells you if you must have a print. It shows the rules for printed photos in your country, for example dye-sublimation prints in Australia and matte prints in Singapore. It makes print sheets with photos at the correct size: 4×6 in (10×15 cm), and L size (89×127 mm) for convenience-store printers in Japan. It also shows places that print photos. The site gets no money from these links.
- **Installation:** Add the app to your home screen from Chrome on Android or from Safari on iPhone. After the first use, the app operates without an internet connection. The phone keeps the face-detection library and models.

The app uses [MediaPipe Tasks Vision](https://ai.google.dev/edge/mediapipe/solutions/vision/face_landmarker) (face landmarks and blendshapes, selfie multiclass segmentation) on your phone. Your photo does not go to the internet.

## Country rules

The file [`specs.js`](specs.js) contains the rules for each country, in millimeters. A country is in the list only when these two conditions are true:

- An official government page shows each value. Official pages are pages of the passport office, the ministry or the embassy of the country.
- The applicant supplies the photo and can take the photo. Some countries take the photo at their office, or require a certified photographer or studio. This app cannot help in these countries. Thus, these countries are not in the list.

The file [`evidence.json`](evidence.json) shows the official page and the exact text for each value. To correct a value, edit the entry and give the address of the official page.

**NOTE:** The app does not check for glasses, hats or head coverings. The app tells you to remove them.

**NOTE:** The rules for Ireland do not give a head size. They tell you to show your head and the top part of your body ("head to mid torso"). Thus, for Ireland, the app uses the head size and the space above the head in the example photos on the official page. These example photos show a smaller head than most countries.

## Confirmed accepted photos

This table shows the countries where a passport office accepted a photo from this app. An accepted photo shows that the app can make a correct photo for that country. It does not guarantee that each photo will be accepted. Refer to the [Disclaimer](#disclaimer).

| Country | Status | Applied | Confirmed | Notes |
|---|---|---|---|---|
| Australia | Not yet confirmed | | | |
| Hong Kong | Not yet confirmed | | | |
| Ireland | Not yet confirmed | | | |
| Italy | Not yet confirmed | | | |
| Japan | Not yet confirmed | | | |
| Netherlands | Not yet confirmed | | | |
| New Zealand | Not yet confirmed | | | |
| Poland | Not yet confirmed | | | |
| Singapore | Not yet confirmed | | | |
| Taiwan | Not yet confirmed | | | |
| United Kingdom | Not yet confirmed | | | |
| United States | ✅ Accepted | | November 2026 | |

The "Applied" column shows how the applicant sent the photo: online with the digital file, or on paper with a print. If a passport office accepted your photo, [tell us](https://github.com/claytonkimber/passport-photo/issues/new?title=Photo%20accepted%3A%20&body=Country%3A%0AApplied%20online%20or%20on%20paper%3A%0AMonth%20it%20was%20accepted%3A%0AAnything%20else%20worth%20knowing%3A%0A%0A%28Please%20don%27t%20attach%20your%20photo%3A%20issues%20are%20public.%29). We will add it to the table.

## How the site is built

The site has only static files. GitHub Pages supplies the files. You do not need a build step to publish.

| Path | Contents |
|---|---|
| `index.html` | Landing page: description for search engines, installation instructions, questions and answers, disclaimer |
| `app/` | The camera app |
| `<country>/` | One page for each country in the list, for example [`united-kingdom/`](united-kingdom/) |
| `<country>/<lang>/` | AI-assisted translation of the country page, for countries where people search in a different language: [`japan/ja/`](japan/ja/), [`italy/it/`](italy/it/), [`netherlands/nl/`](netherlands/nl/), [`poland/pl/`](poland/pl/), [`taiwan/zh-tw/`](taiwan/zh-tw/), [`hong-kong/zh-hk/`](hong-kong/zh-hk/) |
| `tools/i18n/` | Text of the pages: `en.json`, one file for each translation, and `check.mjs`. `check.mjs` makes sure that each translation has the same keys and placeholders as the English file |
| `specs.js`, `evidence.json` | Rules for each country, and the official text for each rule |
| `print.js` | Print instructions and print locations for each country, for the Print it tab of the app |
| `manifest.webmanifest`, `sw.js`, `install.js`, `icons/` | Files for installation: manifest, offline cache, install buttons, icons |
| `tools/build-site.mjs` | Makes the country pages, the country list on the landing page and `sitemap.xml` |

To change the rules or the text of the pages:

1. Edit `specs.js` or a text file in `tools/i18n/`.
2. Run `node tools/build-site.mjs`.
3. Commit the result.

**NOTE:** If a translation does not pass `check.mjs`, the build does not publish it.

If the site moves to a different domain, change `SITE` at the top of `tools/build-site.mjs`. Also change the canonical and `og:` addresses in `index.html` and `app/index.html`.

### Translations

AI helped to translate the country pages. A professional translator did not examine the translations. Each translated page shows this information at the top, in its language and in English. Each translated page has a link to the English page. The English page is the reference. The official government rules always have priority. The screens of the camera app are in English.

If you speak one of these languages, you can correct the translation. Edit the file for the language in `tools/i18n/`. Then open a pull request or an issue.

## Report a bug

To report a problem, [file a bug](https://github.com/claytonkimber/passport-photo/issues/new). You must have a free GitHub account. The **Report a bug** buttons in the app open the same form. The form shows your country, your browser and the check results of the last photo. Issues are public.

**CAUTION:** Do not attach photos of yourself to an issue unless you agree that all persons can see them.

## Support

This app is free. It has no advertisements, and it does not send your photo to the internet. To support the app, use one of these:

- [Donate with PayPal or card](https://www.paypal.com/donate/?hosted_button_id=WKTVYE2X9UX4G).
- Scan this QR code with the PayPal app:

<img src="paypal-qr.png" alt="PayPal QR code" width="200">

The **Support me** tab of the app shows the same link and QR code.

## License

[MIT](LICENSE): You can use, copy, change and share the code. You must keep the copyright notice and the license notice with it. The code is supplied as is, without warranty.

## Disclaimer

This app is a free, best-effort helper, provided "as is" and "as available". It can make mistakes. Face detection, measurements, background replacement and the live checks can be wrong; phones, cameras, lighting and browsers vary; and passport rules change without notice. Any of these can stop it from producing a photo that meets the rules, or make it report a photo as passing when it does not.

You are responsible for checking that your photo meets your passport office's current requirements before you submit it. The country rules in this project were gathered from official sources at one point in time and may be out of date or incomplete.

To the fullest extent permitted by law, the author gives no warranties of any kind, express or implied, including any warranty of merchantability, fitness for a particular purpose, accuracy, non-infringement, or freedom from defects, and is not liable for any loss, cost, delay, rejected or refused application, or other damage or harm arising from using, or being unable to use, this app. Where the law does not allow some of these exclusions, they apply to the maximum extent it allows.

Your photos are processed on your device and are not uploaded by this app. Links to PayPal and GitHub go to those services, which have their own terms.
