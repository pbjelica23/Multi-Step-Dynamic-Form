import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

i18n
  // detect user language
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  .init({
    debug: true,
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: {
          success: "You have successfully registered!",
          username: "Username",
          fname: "First Name",
          lname: "Last Name",
          email: "E-mail",
          birthdate: "Birthdate",
          gender: "Gender",
          male: "Male",
          female: "Female",
          password: "Password",
          password_confirm: "Password Confirmation",
          address: "Address",
          city: "City",
          countrycode: "Countrycode",
          phone: "Phone",
          submit: "Submit",
          nextBtn: "Next",
          backBtn: "Back",
          Montenegro: "Montenegro",
          Croatia: "Croatia",
          error: "You have to fill out required fields",
          minimum_length_4: "Minimum length 4",
          minimum_length_2: "Minimum length 2",
          minimum_length_8: "Minimum length 8",
          maximum_length_20: "Maximum length 20",
          maximum_length_25: "Maximum length 25",
          maximum_length_26: "Maximum length 26",
          password_too_weak: "Password Too Weak",
          email_not_valid: "Email not valid",
          required_field: "Required field",
          maximum_length: "Maximum length",
          older_than: "You are too young!",
          password_mismatch: "Password mismatch",
          register: "Register",
        },
      },
      me: {
        translation: {
          success: "Uspješno ste se registrovali!",
          username: "Korisničko ime",
          fname: "Ime",
          lname: "Prezime",
          email: "E-mail",
          birthdate: "Datum rođenja",
          gender: "Pol",
          male: "Muško",
          female: "Ženško",
          password: "Lozinka",
          password_confirm: "Lozinka potvrda",
          address: "Adresa",
          city: "Grad",
          countrycode: "Država",
          phone: "Telefon",
          submit: "Pošalji",
          nextBtn: "Sledeći",
          backBtn: "Nazad",
          Montenegro: "Crna Gora",
          Croatia: "Hrvatska",
          error: "Morate popuniti sva obavezna polja",
          minimum_length_4: "Minimum dužina 4",
          minimum_length_2: "Minimum dužina 2",
          minimum_length_8: "Minimum dužina 8",
          maximum_length_20: "Maksimum dužina 20",
          maximum_length_25: "Maksimum dužina 25",
          maximum_length_26: "Maksimum dužina 26",
          email_not_valid: "Email nije validan",
          required_field: "Obavezno polje",
          password_too_weak: "Slaba lozinka",
          older_than: "Premlad si",
          Maximum_length: "Maksimalna dužina",
          password_mismatch: "Lozinke se ne poklapaju",
          register: "Registracija",
        },
      },
    },
  });

export default i18n;
