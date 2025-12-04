import { Service, Testimonial, Stat, Project } from '@/types';
import { getAssetPath } from '@/utils/helpers';

export const services: Service[] = [
  {
    id: 1,
    slug: 'szlifowanie-marmuru',
    icon: 'fa-gem',
    title: 'Szlifowanie <span class="text-renkon-orange">Marmuru</span>',
    titlePlain: 'Szlifowanie Marmuru',
    description: 'Profesjonalne szlifowanie marmuru przywracające naturalny blask i intensywność koloru.',
    image: getAssetPath('assets/images/services/marble-grinding-1.webp'),
    gallery: [
      {
        image: getAssetPath('assets/images/services/marble-grinding-1.webp'),
        description: 'Przed'
      },
      {
        image: getAssetPath('assets/images/services/marble-grinding-2.webp'),
        description: 'Po'
      }
    ],
    features: [
      'Niwelacja klawiszowania - szlif agresywny posadzki na mokro niweluje uskoki między płytkami',
      'Usuwanie zarysowań - kolejne etapy szlifowania zmniejszające głębokość rys',
      'Krystalizacja – proces polegający na utwardzeniu powierzchni co powoduje jej wybłyszczenie',
      'Impregnacja - zapobiega wchłanianiu zabrudzeń',
    ],
  },
  {
    id: 2,
    slug: 'szlifowanie-lastryko',
    icon: 'fa-layer-group',
    title: 'Szlifowanie <span class="text-renkon-orange">Lastryko</span>',
    titlePlain: 'Szlifowanie Lastryko',
    description: 'Specjalistyczne czyszczenie lastryka z wykorzystaniem nowoczesnych technologii.',
    image: getAssetPath('assets/images/services/terrazzo-grinding-1.webp'),
    gallery: [
      {
        image: getAssetPath('assets/images/services/terrazzo-grinding-1.webp'),
        description: 'Przed'
      },
      {
        image: getAssetPath('assets/images/services/terrazzo-grinding-2.webp'),
        description: 'Po'
      }
    ],
    features: [
      'Szlifowanie agresywne - często powodujące odsłonięcie kruszywa oraz wypoziomowanie powierzchni',
      'Naprawa pęknięć i ubytków – uzupełnienie masami żywicznymi jak i zarówno cementowymi z odpowiednim kruszywem oraz dopasowanym odcieniem',
      'Szlif do połysku – kolejne etapy odnawiania lastriko przez szlifowanie',
      'Impregnacja',
    ],
  },
  {
    id: 3,
    slug: 'naprawa-lastryko',
    icon: 'fa-tools',
    title: 'Naprawa Powierzchni <span class="text-renkon-orange">Lastriko</span>',
    titlePlain: 'Naprawa Powierzchni Lastriko',
    description: 'Odbudowa uszkodzonego lastryka ze scaleniem kolorystycznym.',
    image: getAssetPath('assets/images/services/terrazzo-repair-1.webp'),
    gallery: [
      {
        image: getAssetPath('assets/images/services/terrazzo-repair-1.webp'),
        description: 'Przed'
      },
      {
        image: getAssetPath('assets/images/services/terrazzo-repair-2.webp'),
        description: 'Po'
      }
    ],
    features: [
      'Ubicia stopni – flekowanie polegające na naprawie krawędzi stopni z ujednoliceniem koloru',
      'Pęknięcia, szczeliny – niwelacja głębokich rys (pęknięć) przez rozcięcie i uzupełnienie z scaleniem koloru',
      'Uzupełnienia po instalacjach – wykonanie nowego lastryka na bazie żywic lub cementu',
      'Wykonanie elementów dopasowanych do zastanego – dobranie odpowiedniego kruszywa oraz koloru bazowego',
    ],
  },
  {
    id: 4,
    slug: 'paski-antyposlizgowe',
    icon: 'fa-shoe-prints',
    title: 'Paski Antypoślizgowe',
    description: 'Wykonywanie pasków antypoślizgowych za pomocą groszkowania dla bezpieczeństwa użytkowników.',
    image: getAssetPath('assets/images/services/anti-slip-1.webp'),
    gallery: [
      {
        image: getAssetPath('assets/images/services/anti-slip-1.webp'),
        description: 'Estetyczny wygląd'
      },
      {
        image: getAssetPath('assets/images/services/anti-slip-2.webp'),
        description: 'Odtworzenie Detalu'
      },
      {
        image: getAssetPath('assets/images/services/anti-slip-3.webp'),
        description: 'Bezpieczeństwo'
      }
    ],
    features: [
      'Bezpieczeństwo w ruchu pieszym',
      'Zgodność z normami BHP',
      'Trwałe i estetyczne rozwiązanie',
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Zamek Królewski na Wawelu',
    company: 'Państwowe Zbiory Sztuki',
    location: 'Kraków',
    icon: 'fa-crown',
    text: 'Prace zostały wykonane w terminie i z należytą starannością.',
    shortText: 'Prace zostały wykonane w terminie i z należytą starannością.',
    rating: 5,
    featured: true,
    details: [
      'Państwowe Zbiory Sztuki',
      'Budynek nr 5 na Wawelu',
      '200m² posadzki marmurowej'
    ],
    pdfLink: getAssetPath('assets/documents/Zamek_Wawel.PDF')
  },
  {
    id: 2,
    name: 'Urząd Miasta Krakowa',
    company: 'Wydział Obsługi Urzędu',
    location: 'Kraków',
    icon: 'fa-building',
    text: 'Usługi zostały wykonane profesjonalnie, terminowo i z należytą starannością.',
    shortText: 'Usługi zostały wykonane profesjonalnie, terminowo i z należytą starannością.',
    rating: 5,
    featured: true,
    details: [
      'Wydział Obsługi Urzędu',
      '500m² posadzki lastrykowej',
      'Renowacja kompleksowa'
    ],
    pdfLink: getAssetPath('assets/documents/Wielopole.pdf')
  },
  {
    id: 3,
    name: 'Bartosz K.',
    company: 'Klient indywidualny',
    location: '',
    icon: 'fa-user',
    text: 'Kolejny raz renowacja marmuru wykonana perfekcyjnie. Polecam wszystkim zainteresowanym renowacją naturalnego kamienia.',
    shortText: 'Kolejny raz renowacja marmuru wykonana perfekcyjnie. Polecam wszystkim zainteresowanym renowacją naturalnego kamienia.',
    rating: 5,
    details: [
      'Klient indywidualny',
      'Renowacja posadzki marmurowej',
      'Polerowanie + Krystalizacja'
    ],
    pdfLink: 'https://share.google/PV8IyesIg5IZJhWGW'
  },
];

export const stats: Stat[] = [
  {
    id: 1,
    icon: 'fa-calendar-check',
    value: '15+',
    label: 'Lat Doświadczenia',
    subtitle: 'Międzynarodowe'
  },
  {
    id: 2,
    icon: 'fa-globe-europe',
    value: '3',
    label: 'Kraje Działalności',
    subtitle: 'PL, UK, IE'
  },
];

export const projects: Project[] = [
  {
    id: 1,
    title: 'Renowacja Marmuru - Hol Windowy',
    category: 'Marmur',
    location: 'Kraków',
    area: '500m²',
    duration: '2021',
    description: 'Kompleksowa renowacja posadzki marmurowej oraz ścian na holach windowych w szpitalu "Rydygiera"',
    image: 'assets/images/projects/project-1-4.webp',
    images: [
      'assets/images/projects/project-1-1.webp',
      'assets/images/projects/project-1-2.webp',
      'assets/images/projects/project-1-3.webp',
      'assets/images/projects/project-1-4.webp',
      'assets/images/projects/project-1-5.webp',
      'assets/images/projects/project-1-6.webp',
    ],
  },
  {
    id: 2,
    title: 'Szlifowanie Lastryko - Szkoła Masażu nr 2',
    category: 'Lastryko',
    location: 'Kraków',
    area: '500m²',
    duration: '2023',
    description: 'Odświeżenie posadzek i schodów wykonanych w technologii lastriko na korytarzach i klatce schodowej wraz z naprawą pęknięć.',
    image: 'assets/images/projects/project-2-4.webp',
    images: [
      'assets/images/projects/project-2-1.webp',
      'assets/images/projects/project-2-2.webp',
      'assets/images/projects/project-2-3.webp',
      'assets/images/projects/project-2-4.webp',
      'assets/images/projects/project-2-5.webp',
      'assets/images/projects/project-2-6.webp',
      'assets/images/projects/project-2-7.webp',
      'assets/images/projects/project-2-8.webp',
    ],
  },
  {
    id: 3,
    title: 'Krystalizacja - Rosso Verona',
    category: 'Marmur',
    location: 'Radziszów',
    area: '250m²',
    duration: '2020',
    description: 'Posadzka była przykryta wykładziną która została usunięta. Odkryty marmur został wszlifowany, wykrystalizowany oraz zaimpregnowany. Zamontowano też wycieraczkę systemową.',
    image: 'assets/images/projects/project-3-2.webp',
    images: [
      'assets/images/projects/project-3-1.webp',
      'assets/images/projects/project-3-2.webp',
      'assets/images/projects/project-3-3.webp',
      'assets/images/projects/project-3-4.webp',
      'assets/images/projects/project-3-5.webp',
      'assets/images/projects/project-3-6.webp',
    ],
  },
  {
    id: 4,
    title: 'Renowacja Lastriko - UMK ul. Wielopole',
    category: 'Lastryko',
    location: 'Kraków',
    area: '340m²',
    duration: '2022',
    description: 'Wykonano szlifowanie schodów wraz z groszkowaniem pasków antypoślizgowych. Odświeżono ściany z lastriko oraz wejście główne.',
    image: 'assets/images/projects/project-4-4.webp',
    images: [
      'assets/images/projects/project-4-1.webp',
      'assets/images/projects/project-4-2.webp',
      'assets/images/projects/project-4-3.webp',
      'assets/images/projects/project-4-4.webp',
    ],
  },
  {
    id: 5,
    title: 'Naprawa Lastriko - Uzupełnianie Ubytków',
    category: 'Lastryko',
    location: 'Bolesław/Starachowice/Kraków-Lubomirskiego',
    area: '30mb',
    duration: '2023/2024',
    description: 'Wykonałem uzupełnienie lastryka ze scaleniem kolorystycznym w miejscach brakujących oraz powstałych po przesunięciu drzwi. Odtworzyłem posadzkę z 1906 zgodnie z zaleceniami konserwatora.',
    image: 'assets/images/projects/project-5-6.webp',
    images: [
      'assets/images/projects/project-5-1.webp',
      'assets/images/projects/project-5-2.webp',
      'assets/images/projects/project-5-3.webp',
      'assets/images/projects/project-5-4.webp',
      'assets/images/projects/project-5-5.webp',
      'assets/images/projects/project-5-6.webp',
    ],
  },
  {
    id: 6,
    title: 'Naprawa Lastriko - Ubicia Schodów, Dziury po Barierce',
    category: 'Lastryko',
    location: 'Kraków - Szpital "Onkologii", AGH',
    area: '200 sztuk',
    duration: '2020/2025',
    description: 'Zdjęcia przedstawiają uzupełnianie ubytków powstałych po wymianie barierek oraz naprawy ubić schodów. Naprawy zostały ujednolicone kolorystycznie przez odpowiedni dobór kruszyw i masy uzupełniającej.',
    image: 'assets/images/projects/project-6-1.webp',
    images: [
      'assets/images/projects/project-6-1.webp',
      'assets/images/projects/project-6-2.webp',
      'assets/images/projects/project-6-3.webp',
      'assets/images/projects/project-6-4.webp',
      'assets/images/projects/project-6-5.webp',
      'assets/images/projects/project-6-6.webp',
    ],
  },
];

export const navLinks = [
  { id: 'about', label: 'O Nas', path: '/o-nas' },
  { id: 'services', label: 'Usługi', path: '/uslugi' },
  { id: 'projects', label: 'Realizacje', path: '/realizacje' },
  { id: 'contact', label: 'Kontakt', path: '/kontakt' },
];
