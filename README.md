# Passport Photo

A single static page that turns a phone browser into a passport photo camera for any country.

**Live:** https://claytonkimber.github.io/passport-photo/

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
