# Passport Photo

A single static page that turns a phone browser into a passport photo camera for any country.

**Live:** https://claytonkimber.github.io/passport-photo/

> A free, best-effort tool provided as is, with no warranty: it can make mistakes, so check your photo before you submit it. See the [Disclaimer](#disclaimer).

- Pick your passport country. Each listed country uses its own photo size, head size (and how it's measured), eye line, top margin and background color. "Other country" uses the ICAO international standard (35×45 mm, head 32–36 mm) that most passports follow, and the page says it hasn't been checked against that country's rules.
- Live camera preview with alignment guides in the photo's real shape (head oval, eye-line band, crop box)
- Live checks: one face, size, centering, head tilt, facing the camera, no smile, mouth closed, eyes open, looking at the lens, plain and light background, even lighting, exposure
- Light button: the back camera's LED torch, or a white screen for the front camera
- Auto-capture with a 3-2-1 countdown once every check passes
- After capture: crops to the country's geometry, shifts the wall to the required background color the way a photo booth's backdrop looks (edge-aware, so hair and ears aren't cut), then runs the face checks again on the final image
- Saves a JPEG at 600 dpi (or the country's online minimum, if larger), plus a 4×6 in / 10×15 cm print sheet with as many photos as fit

Runs fully on-device with [MediaPipe Tasks Vision](https://ai.google.dev/edge/mediapipe/solutions/vision/face_landmarker) (face landmarks and blendshapes, selfie multiclass segmentation). No photo leaves the phone.

## Country rules

Rules live in [`specs.js`](specs.js), one entry per country, in millimetres. A country is listed only when:

- every value was confirmed on an official government page (passport authority, ministry, or the country's own embassy), and
- the applicant supplies the photo and may take it themselves. Countries that photograph applicants at the office, or require a certified photographer or studio, are left out because this app can't help there.

[`evidence.json`](evidence.json) has the official page and the exact quoted wording behind each value. Corrections are welcome: edit the entry and cite the official page.

Not checked automatically: glasses, hats, and head coverings. The page asks the user to check those.

## Report a bug

Found a problem? [File a bug](https://github.com/claytonkimber/passport-photo/issues/new) (needs a free GitHub account). The **Report a bug** buttons in the app open the same form pre-filled with your country, browser and the last photo's check results. Issues are public, so please don't attach photos of yourself unless you're happy for anyone to see them.

## Support

This app is free, has no ads, and never uploads your photo. If it saved you a trip to a photo shop, you can support it:

- [Support me on Ko-fi](https://ko-fi.com/wiseaddon)
- [Donate with PayPal or card](https://www.paypal.com/donate/?hosted_button_id=WKTVYE2X9UX4G), or scan with the PayPal app:

<img src="paypal-qr.png" alt="PayPal QR code" width="200">

The same links are in the app's **Support me** tab, next to your finished photo.

## Disclaimer

This app is a free, best-effort helper, provided "as is" and "as available". It can make mistakes. Face detection, measurements, background replacement and the live checks can be wrong; phones, cameras, lighting and browsers vary; and passport rules change without notice. Any of these can stop it from producing a photo that meets the rules, or make it report a photo as passing when it does not.

You are responsible for checking that your photo meets your passport office's current requirements before you submit it. The country rules in this project were gathered from official sources at one point in time and may be out of date or incomplete.

To the fullest extent permitted by law, the author gives no warranties of any kind, express or implied, including any warranty of merchantability, fitness for a particular purpose, accuracy, non-infringement, or freedom from defects, and is not liable for any loss, cost, delay, rejected or refused application, or other damage or harm arising from using, or being unable to use, this app. Where the law does not allow some of these exclusions, they apply to the maximum extent it allows.

Your photos are processed on your device and are not uploaded by this app. Links to Ko-fi, PayPal and GitHub go to those services, which have their own terms.
