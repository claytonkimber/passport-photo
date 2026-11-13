# Passport Photo

A free passport photo camera that runs in the phone's browser, and installs like an app on Android and iPhone without an app store.

**Live:** https://claytonkimber.github.io/passport-photo/ (the camera itself is at [`/app/`](https://claytonkimber.github.io/passport-photo/app/))

## Your passport photo, without handing over your face

Search an app store for "passport photo" and you'll find apps that want an account, an email address, permission to track you, and an upload of your face to their servers, often with a paywall before you can download the result. Once your photo sits on someone else's server, what happens to it next is up to them.

This app asks for one thing: your camera.

| | Many app-store passport photo apps | This app |
|---|---|---|
| Your photo is uploaded to a company's server | Often | **Never.** Everything runs on your phone |
| Your photo is stored | Often, on their servers | **No.** It's only saved if you save it to your phone |
| Account, email or personal details | Often required | **None** |
| Tracking cookies, analytics, ads | Common | **None** |
| Pay to download your own photo | Common | **Free.** No watermark, no paywall |
| Rules for your country | Varies | **Checked against official government websites** for every listed country |
| Works with no internet | Rarely | **Yes**, after the first use. Try it in airplane mode |
| Install from an app store | Required | **Not needed.** Add it to your home screen |

**It works:** US passport photos made with this app have already been accepted. See [Confirmed accepted photos](#confirmed-accepted-photos).

Just good old passport photos: made on your phone, built to your country's rules, and never shared with anyone unless you share them.

> A free, best-effort tool provided as is, with no warranty: it can make mistakes, so check your photo before you submit it. See the [Disclaimer](#disclaimer).

## What it does

- Pick your passport country. Each listed country uses its own photo size, head size (and how it's measured), eye line, top margin and background color. "Other country" uses the ICAO international standard (35×45 mm, head 32–36 mm) that most passports follow, and the page says it hasn't been checked against that country's rules.
- Live camera preview with alignment guides in the photo's real shape (head oval, eye-line band, crop box)
- Live checks: one face, size, centering, head tilt, facing the camera, no smile, mouth closed, eyes open, looking at the lens, plain and light background, even lighting, exposure
- Light button: the back camera's LED torch, or a white screen for the front camera
- Auto-capture with a 3-2-1 countdown once every check passes
- After capture: crops to the country's geometry, shifts the wall to the required background color the way a photo booth's backdrop looks (edge-aware, so hair and ears aren't cut), then runs the face checks again on the final image
- Saves a JPEG at 600 dpi (or the country's online minimum, if larger)
- **Print it** tab: whether you need a print at all, the country's rules for printed photos (for example Australia's dye-sublimation rule or Singapore's matte finish), print sheets with as many true-size photos as fit (4×6 in / 10×15 cm, plus L size for Japanese convenience-store printers), and places to print. These links earn nothing.
- Installable web app (PWA): add it to the home screen from Chrome on Android or Safari on iPhone. After the first use it works offline, because the face-detection library and models are cached on the phone.

Runs fully on-device with [MediaPipe Tasks Vision](https://ai.google.dev/edge/mediapipe/solutions/vision/face_landmarker) (face landmarks and blendshapes, selfie multiclass segmentation). No photo leaves the phone.

## Country rules

Rules live in [`specs.js`](specs.js), one entry per country, in millimetres. A country is listed only when:

- every value was confirmed on an official government page (passport authority, ministry, or the country's own embassy), and
- the applicant supplies the photo and may take it themselves. Countries that photograph applicants at the office, or require a certified photographer or studio, are left out because this app can't help there.

[`evidence.json`](evidence.json) has the official page and the exact quoted wording behind each value. Corrections are welcome: edit the entry and cite the official page.

Not checked automatically: glasses, hats, and head coverings. The page asks the user to check those.

## Confirmed accepted photos

Countries where a passport office has accepted a photo made with this app. A confirmation shows the app can produce an accepted photo there; it doesn't guarantee every photo will be (see the [Disclaimer](#disclaimer)).

| Country | Status | Applied | Confirmed | Notes |
|---|---|---|---|---|
| Australia | Not yet confirmed | | | |
| Hong Kong | Not yet confirmed | | | |
| Italy | Not yet confirmed | | | |
| Japan | Not yet confirmed | | | |
| Netherlands | Not yet confirmed | | | |
| New Zealand | Not yet confirmed | | | |
| Poland | Not yet confirmed | | | |
| Singapore | Not yet confirmed | | | |
| Taiwan | Not yet confirmed | | | |
| United Kingdom | Not yet confirmed | | | |
| United States | ✅ Accepted | | November 2026 | |

"Applied" is how the photo was submitted (online with the digital file, or on paper with a print). Had a photo accepted? [Let us know](https://github.com/claytonkimber/passport-photo/issues/new?title=Photo%20accepted%3A%20&body=Country%3A%0AApplied%20online%20or%20on%20paper%3A%0AMonth%20it%20was%20accepted%3A%0AAnything%20else%20worth%20knowing%3A%0A%0A%28Please%20don%27t%20attach%20your%20photo%3A%20issues%20are%20public.%29) and we'll add it to the table.

## How the site is built

Plain static files, served by GitHub Pages; there is no build step to deploy.

| Path | What it is |
|---|---|
| `index.html` | Landing page (search-friendly description, install instructions, FAQ, disclaimer) |
| `app/` | The camera app |
| `<country>/` | One page per supported country, e.g. [`united-kingdom/`](united-kingdom/) |
| `<country>/<lang>/` | AI-assisted translation of that page for countries that search in another language: [`japan/ja/`](japan/ja/), [`italy/it/`](italy/it/), [`netherlands/nl/`](netherlands/nl/), [`poland/pl/`](poland/pl/), [`taiwan/zh-tw/`](taiwan/zh-tw/), [`hong-kong/zh-hk/`](hong-kong/zh-hk/) |
| `tools/i18n/` | Page text: `en.json` plus one file per translation, and `check.mjs`, which confirms a translation matches the English keys and placeholders |
| `specs.js`, `evidence.json` | Country rules and the official wording behind them |
| `print.js` | Per-country print guidance and places to print, shown in the app's Print it tab |
| `manifest.webmanifest`, `sw.js`, `install.js`, `icons/` | Installable app: manifest, offline cache, install buttons, icons |
| `tools/build-site.mjs` | Generates the country pages, the landing page's country list and `sitemap.xml` |

After editing `specs.js` or a text file in `tools/i18n/`, run `node tools/build-site.mjs` and commit the result. A translation that fails `check.mjs` is skipped, not published.

### Translations

The translated country pages were translated with AI assistance and have not been reviewed by a professional translator. Each one says so at the top, in its own language and in English, links to the English page as the reference, and notes that the official government rules always take precedence. The camera app's own screens are in English. Corrections from native speakers are very welcome: edit the language's file in `tools/i18n/` and open a pull request or an issue. If the site moves to its own domain, change `SITE` at the top of that script and the canonical and `og:` URLs in `index.html` and `app/index.html`.

## Report a bug

Found a problem? [File a bug](https://github.com/claytonkimber/passport-photo/issues/new) (needs a free GitHub account). The **Report a bug** buttons in the app open the same form pre-filled with your country, browser and the last photo's check results. Issues are public, so please don't attach photos of yourself unless you're happy for anyone to see them.

## Support

This app is free, has no ads, and never uploads your photo. If it saved you a trip to a photo shop, you can support it:

[Donate with PayPal or card](https://www.paypal.com/donate/?hosted_button_id=WKTVYE2X9UX4G), or scan with the PayPal app:

<img src="paypal-qr.png" alt="PayPal QR code" width="200">

The same PayPal link and QR code are in the app's **Support me** tab, next to your finished photo.

## This README in two voices

The same facts, written two ways, side by side. On the left, a warm, unhurried voice in the spirit of Bob Ross. On the right, [ASD-STE100 Simplified Technical English](https://www.asd-ste100.org/), the controlled language used for aircraft maintenance manuals: short sentences, one instruction per sentence, active voice and a limited vocabulary. Both follow the same plain-language rules: talk to the reader directly, use words a tired reader understands first time, and no idioms.

<table>
<tr><th width="50%">Bob Ross style</th><th width="50%">ASD-STE100 style</th></tr>

<tr><td colspan="2"><b>Why this app</b></td></tr>
<tr valign="top">
<td>

Getting a passport photo should feel easy, like a quiet afternoon by the lake. A lot of photo apps want an account, a few cookies and a copy of your face on their servers. You don't need any of that. Here, your picture stays right on your phone, where it belongs. No sign-up, no ads, no tracking. Just you, a plain wall, and a photo you can be proud of.

</td>
<td>

This app makes passport photos on your phone. Many passport photo apps send your photo to their servers. These apps also use tracking cookies and ask for personal data. This app does not send your photo to a server. This app does not keep your photo. This app does not use tracking cookies. This app does not ask for your name or email address. The app is free.

</td>
</tr>

<tr><td colspan="2"><b>What it does</b></td></tr>
<tr valign="top">
<td>

Pick your country, and the camera shows you gentle guides: an oval for your head and a soft green band for your eyes. As you settle in, it checks your expression, your tilt and your light. When everything looks just right, it takes the photo for you. Then it tidies up the background, so the photo looks like it came from a booth.

</td>
<td>

The app shows guides on the camera image. The guides show the correct position for your head and eyes. The app checks the size, position, expression, eyes, light and background. When all checks are correct, the app takes the photo. The app then changes the background to the color that your country requires.

</td>
</tr>

<tr><td colspan="2"><b>How to use it</b></td></tr>
<tr valign="top">
<td>

1. Find a plain, light wall and some soft light, maybe from a window.
2. Open the app and choose your country.
3. Ask a friend to hold the phone. It's nicer that way.
4. Relax your face, look at the lens, and let the app take the photo.
5. Save your photo, or the print sheet if you need paper.

</td>
<td>

1. Stand 60 cm in front of a plain, light wall.
2. Face a window or a soft light.
3. Remove your glasses, hat and headphones.
4. Open the app.
5. Select your country.
6. Look at the camera lens. Keep your mouth closed.
7. Wait until the app takes the photo.
8. Examine the photo.
9. Save the photo or the print sheet.

**NOTE:** Use the back camera if another person can hold the phone.

</td>
</tr>

<tr><td colspan="2"><b>Your privacy</b></td></tr>
<tr valign="top">
<td>

Your face is yours. The app does all its work right there on your phone. Nothing gets uploaded, nothing gets kept, and nobody's watching. After the first time, it even works in airplane mode, so you can see for yourself.

</td>
<td>

The app does all processing on your phone. The app does not send your photo to the internet. The app does not keep a copy of your photo. The app does not use cookies. After the first use, the app operates without an internet connection.

</td>
</tr>

<tr><td colspan="2"><b>Getting it printed</b></td></tr>
<tr valign="top">
<td>

Need a paper copy? The Print it tab shows your country's rules, a sheet sized for the printers near you, and a few friendly places to print it. We don't earn anything from those links. We just want you to get your photo.

</td>
<td>

If your application needs a printed photo, open the Print it tab. The tab shows the print rules for your country. Save the print sheet. Print the sheet at 100% size. Measure one photo. Make sure that the photo has the correct size.

**NOTE:** The site gets no money from the print links.

</td>
</tr>

<tr><td colspan="2"><b>The fine print</b></td></tr>
<tr valign="top">
<td>

We've worked hard to get this right, but it's a free tool, and every tool makes a mistake now and then. Take a good look at your photo before you send it in. The passport office always has the final say.

</td>
<td>

**CAUTION:** The app can make errors. Examine your photo before you send it. The passport office makes the final decision. The author gives no warranty. Refer to the Disclaimer.

</td>
</tr>
</table>

## License

[MIT](LICENSE): free to use, copy, modify and share, provided the copyright and license notice stay with it. The code is provided as is, without warranty of any kind.

## Disclaimer

This app is a free, best-effort helper, provided "as is" and "as available". It can make mistakes. Face detection, measurements, background replacement and the live checks can be wrong; phones, cameras, lighting and browsers vary; and passport rules change without notice. Any of these can stop it from producing a photo that meets the rules, or make it report a photo as passing when it does not.

You are responsible for checking that your photo meets your passport office's current requirements before you submit it. The country rules in this project were gathered from official sources at one point in time and may be out of date or incomplete.

To the fullest extent permitted by law, the author gives no warranties of any kind, express or implied, including any warranty of merchantability, fitness for a particular purpose, accuracy, non-infringement, or freedom from defects, and is not liable for any loss, cost, delay, rejected or refused application, or other damage or harm arising from using, or being unable to use, this app. Where the law does not allow some of these exclusions, they apply to the maximum extent it allows.

Your photos are processed on your device and are not uploaded by this app. Links to PayPal and GitHub go to those services, which have their own terms.
