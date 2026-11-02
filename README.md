# US Passport Photo

A single static page that turns a phone browser into a US passport photo camera.

**Live:** https://claytonkimber.github.io/us-passport-photo/

- Live camera preview with alignment guides (head oval, eye-line band, 2×2 crop box)
- Live checks: one face, size, centering, head tilt, facing the camera, no smile, mouth closed, eyes open, looking at the lens, plain and light background, even lighting, exposure
- Auto-capture with a 3-2-1 countdown once every check passes
- After capture: auto-crop to the State Dept. geometry (head 50–69% of the height, eyes 56–69% from the bottom), background replaced with white, then a second face check on the final image
- Saves a 1200×1200 JPEG, plus an optional 4×6 print sheet with two 2×2 photos

Runs fully on-device with [MediaPipe Tasks Vision](https://ai.google.dev/edge/mediapipe/solutions/vision/face_landmarker) (face landmarks and blendshapes, selfie multiclass segmentation). No photo leaves the phone.

Not checked automatically: glasses, hats, and head coverings. The page asks the user to check those.
