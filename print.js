// Where and how to get a passport photo printed, per supported country. Shown in the app's "Print it" tab.
// These links earn nothing (no affiliate links). Gathered November 2026; stores and prices change, and the
// app tells people to check with the store.
//   digital: when a print isn't needed because the application takes the digital photo
//   paper:   rules and tips for printed photos (worded as a rule only where the passport office states it)
//   sheets:  print sheet sizes to offer, first one highlighted (see SHEETS in the app)
//   places:  { name, url, kind: "pickup" | "mail" | "machine", note }

export const PRINT = {
  US: {
    digital: "Renewing online? You upload the digital photo, so you don't need a print. First passports and paper applications need a printed 2×2 in photo.",
    paper: ["Print on photo-quality paper, matte or glossy."],
    sheets: ["4x6"],
    places: [
      { name: "Walmart Photo", url: "https://photos3.walmart.com/about/prints", kind: "pickup", note: "4×6 prints from $0.18, usually ready for pickup in about an hour." },
      { name: "CVS Photo", url: "https://www.cvs.com/photo", kind: "pickup", note: "Same-day 4×6 prints at many stores." },
      { name: "Mpix", url: "https://www.mpix.com/", kind: "mail", note: "Printed and mailed. Shipping costs more than a single print." },
    ],
  },
  GB: {
    digital: "Applying online? You can use the digital photo, so you don't need a print. Paper application forms need printed photos.",
    paper: ["Print on good-quality photo paper, with no marks or creases."],
    sheets: ["4x6"],
    places: [
      { name: "Asda Photo", url: "https://photo.asda.com/product/6x4-photo-prints", kind: "pickup", note: "6×4 prints, small orders usually ready to collect in about 20 minutes." },
      { name: "Max Photo (Max Spielmann)", url: "https://www.maxphoto.co.uk/", kind: "pickup", note: "Prints usually ready to collect within an hour during opening hours." },
      { name: "Boots Photo", url: "https://www.boots.com/photo", kind: "pickup", note: "Collection in about an hour at larger stores." },
    ],
  },
  IE: {
    digital: "Applying online? You upload the digital photo, so you don't need a print. Paper application forms need 4 identical printed photos.",
    paper: [
      "Print on photo-quality paper at a high resolution. The back of each photo must be white and unglazed.",
      "Photos can be 35×45 mm up to 38×50 mm. Black-and-white prints are recommended because the passport shows the photo in black and white, but colour is accepted.",
      "Your witness writes the form number on the back of two of the four photos, then signs and stamps them.",
    ],
    sheets: ["4x6"],
    places: [
      { name: "Boots Photo Ireland", url: "https://www.bootsphoto.ie/", kind: "machine", note: "Print 6×4 photos in store at a CEWE Photostation in selected Boots stores." },
      { name: "Snapfish Ireland", url: "https://www.snapfish.ie/", kind: "mail", note: "Printed and delivered." },
      { name: "Photobox Ireland", url: "https://www.photobox.ie/", kind: "mail", note: "Printed and delivered." },
    ],
  },
  AU: {
    digital: "Australian passport applications usually need printed photos.",
    paper: [
      "The Australian Passport Office requires a dye-sublimation print on glossy paper of at least 200 gsm. Inkjet prints are not accepted.",
      "Many photo-lab prints are not dye-sublimation (for example prints on silver-halide paper such as Fujifilm Crystal Archive). Ask the store how it prints before you pay.",
    ],
    sheets: ["4x6"],
    places: [
      { name: "Kmart photo centres", url: "https://www.kmart.com.au/photo-centres", kind: "machine", note: "Kodak kiosks, reported to print by dye sublimation. Ask in store to confirm." },
      { name: "Officeworks photo printing", url: "https://www.officeworks.com.au/print-copy/c/pcc/photo-printing", kind: "pickup", note: "Ask whether the print is dye-sublimation before ordering." },
    ],
  },
  NZ: {
    digital: "Most adults apply online and upload the digital photo, so no print is needed. Paper applications need printed photos.",
    paper: ["Printed photos must not be on matte or thermal paper, and must not be inkjet prints."],
    sheets: ["4x6"],
    places: [
      { name: "Harvey Norman Photo Centre", url: "https://www.harveynormanphotos.co.nz/products/6-x-4-photo-print-15x10cm", kind: "pickup", note: "Order 6×4 prints in the app or online and collect in store." },
      { name: "Snapfish NZ", url: "https://www.snapfish.co.nz/", kind: "mail", note: "Printed and delivered." },
    ],
  },
  JP: {
    digital: "Applying online through Mynaportal? The photo is taken inside the application, so you don't need this print. Paper applications need a printed 35×45 mm photo.",
    paper: [
      "Convenience-store printers use L size (89×127 mm), which is smaller than 10×15 cm. Use the L-size sheet so each photo prints at exactly 35×45 mm.",
      "Print on photo paper. Passport counters may refuse home-printed photos if the print quality is poor, so check it closely.",
    ],
    sheets: ["L", "4x6"],
    places: [
      { name: "Seven-Eleven (netprint)", url: "https://www.printing.ne.jp/", kind: "machine", note: "Upload in the netprint app, then print an L-size photo at any Seven-Eleven." },
      { name: "Lawson and FamilyMart (Network Print)", url: "https://networkprint.ne.jp/", kind: "machine", note: "Upload in the Network Print app and print an L-size photo in store." },
      { name: "Kitamura Camera", url: "https://www.kitamura.jp/", kind: "pickup", note: "Order prints in the Kitamura app and collect them in store." },
    ],
  },
  HK: {
    digital: "Applying online or in the app? You upload the digital photo (at least 1200×1600 px), so you don't need a print.",
    paper: ["Each photo prints at 40×50 mm. Print on photo paper."],
    sheets: ["4x6"],
    places: [
      { name: "Fotomax", url: "https://www.fotomax.com/", kind: "pickup", note: "4R prints with free pickup at 50+ stores; same day at some stores." },
    ],
  },
  TW: {
    digital: "Renewing online needs a digital photo and a Citizen Digital Certificate. First-time applicants apply in person with printed photos.",
    paper: [
      "Printed photos must be on glossy photo paper.",
      "7-ELEVEN ibon machines print on laser postcard paper, which may not count as photo paper. A photo kiosk or photo shop is safer.",
    ],
    sheets: ["4x6"],
    places: [
      { name: "7-ELEVEN ibon", url: "https://www.ibon.com.tw/", kind: "machine", note: "Convenient, but see the paper warning above." },
    ],
  },
  SG: {
    digital: "Applying online? You upload the digital photo (400×514 px), so you don't need a print.",
    paper: ["Printed photos must be matte or semi-matte, not glossy."],
    sheets: ["4x6"],
    places: [
      { name: "Photojaanic", url: "https://www.photojaanic.sg/", kind: "mail", note: "4×6 prints from S$0.45, delivered. Choose a matte finish." },
    ],
  },
  IT: {
    digital: "Passport applications at the Questura need printed photos.",
    paper: ["Print on photo paper."],
    sheets: ["4x6"],
    places: [
      { name: "Rikorda", url: "https://www.rikorda.it/", kind: "pickup", note: "Order in the app and collect at one of 5,000+ partner shops." },
      { name: "Pixum", url: "https://www.pixum.it/", kind: "mail", note: "Printed and delivered." },
    ],
  },
  NL: {
    digital: "You bring a printed photo to your town hall (gemeente).",
    paper: ["Print on glossy photo paper at 400 dpi or more."],
    sheets: ["4x6"],
    places: [
      { name: "HEMA Foto", url: "https://foto.hema.nl/", kind: "pickup", note: "Order online, free pickup in store." },
      { name: "Kruidvat Foto", url: "https://www.kruidvat.nl/fotoservice/fotos-en-vergrotingen/foto-afdrukken.html", kind: "pickup", note: "Free pickup in store; many stores also have a photo machine." },
    ],
  },
  PL: {
    digital: "Adults bring a printed photo. The online route with a digital photo is only for children under 12.",
    paper: ["Print on photo paper."],
    sheets: ["4x6"],
    places: [
      { name: "Rossmann", url: "https://www.rossmann.pl/", kind: "machine", note: "Print from the Rossmann app at the in-store photo machine." },
      { name: "Empik Foto", url: "https://www.empikfoto.pl/", kind: "pickup", note: "Order online, or print at Empik photo kiosks in a few minutes." },
    ],
  },
  ICAO: {
    digital: "Many countries take a digital photo for online applications. Check whether yours asks for a print at all.",
    paper: ["Print on photo paper, and check your country's rules for paper finish (matte or glossy)."],
    sheets: ["4x6"],
    places: [],
  },
};
