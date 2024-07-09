# Zadanie

Celem zadania jest przygotowanie listingu ofert nieruchomości zawierającego mieszkania na sprzedaż. Do realizacji zadania należy wykorzystać framework Vue.js lub Nuxt.js (Nuxt.js nie jest wymagany, ale jest lepiej punktowany).

Dane, które należy wyświetlić należy pobrać z API GraphQL, znajdującego się pod adresem ---.

Jedynym warunkiem dotyczącym wyglądu listingu jest czytelne wyświetlenie danych. Można do tego celu wykorzystać samodzielnie napisany, podstawowy css/scss lub dowolną bibliotekę css - nie jest to istotne.

Listing powinien prezentować 32 oferty z Polski - jest to domyślny argument wyszukiwania w searchFilters. Oferty powinny zawierać dane (w przypadku braku wyświetlić "brak danych") o:

- lokalizacji (locationShort) w której znajduje się nieruchomość
- cenie w zł
- liczbie pokoi
- powierzchni w metrach kwadratowych (totalArea)

Listing powinien mieć możliwość dodania filtrowania do zapytania na podstawie:

- ceny pole od do
- liczby pokoi pole od do

Filtrowanie zostaje uruchomione po kliknięciu przycisku "szukaj".

W zadaniu należy z jak najlepszej strony pokazać swoje techniki pisania czystego kodu w dużej aplikacji.

Kolejne dodatkowe punkty można otrzymać za zrobienie paginacji. Oferty na listingu nie mają być podlinkowane.

## Setup

Copy `.env.example`:

```bash
cp .env.example .env
```

Make sure to install the dependencies:

```bash
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
