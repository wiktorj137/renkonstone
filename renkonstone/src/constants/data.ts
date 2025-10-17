import { Service, Testimonial, Stat, Project } from '@/types';

export const services: Service[] = [
  {
    id: 1,
    icon: 'fa-gem',
    title: 'Szlifowanie Marmuru',
    description: 'Profesjonalne szlifowanie marmuru przywracające naturalny blask i intensywność koloru.',
    features: [
      'Niwelacja klawiszowania - szlif agresywny posadzki na mokro niweluje uskoki między płytkami',
      'Usuwanie zarysowań - kolejne etapy szlifowania zmniejszające głębokość rys',
      'Krystalizacja – proces polegający na utwardzeniu powierzchni co powoduje jej wybłyszczenie',
      'Impregnacja - zapobiega wchłanianiu zabrudzeń',
    ],
  },
  {
    id: 2,
    icon: 'fa-layer-group',
    title: 'Szlifowanie Lastryko',
    description: 'Specjalistyczne czyszczenie lastryka z wykorzystaniem nowoczesnych technologii.',
    features: [
      'Szlifowanie agresywne - często powodujące odsłonięcie kruszywa oraz wypoziomowanie powierzchni',
      'Naprawa pęknięć i ubytków – uzupełnienie masami żywicznymi jak i zarówno cementowymi z odpowiednim kruszywem oraz dopasowanym odcieniem',
      'Szlif do połysku – kolejne etapy odnawiania lastriko przez szlifowanie',
      'Impregnacja',
    ],
  },
  {
    id: 3,
    icon: 'fa-tools',
    title: 'Naprawa Powierzchni Lastriko',
    description: 'Odbudowa uszkodzonego lastryka ze scaleniem kolorystycznym.',
    features: [
      'Ubicia stopni – flekowanie polegające na naprawie krawędzi stopni z ujednoliceniem koloru',
      'Pęknięcia, szczeliny – niwelacja głębokich rys (pęknięć) przez rozcięcie i uzupełnienie z scaleniem koloru',
      'Uzupełnienia po instalacjach – wykonanie nowego lastryka na bazie żywic lub cementu',
      'Wykonanie elementów dopasowanych do zastanego – dobranie odpowiedniego kruszywa oraz koloru bazowego',
    ],
  },
  {
    id: 4,
    icon: 'fa-shoe-prints',
    title: 'Paski Antypoślizgowe',
    description: 'Wykonywanie pasków antypoślizgowych za pomocą groszkowania dla bezpieczeństwa użytkowników.',
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
      '200m² posadzki marmurowej',
      'Polerowanie + Krystalizacja',
      'Budynek nr 5 na Wawelu'
    ],
    pdfLink: 'assets/documents/Zamek_Wawel.PDF'
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
      'Renowacja kompleksowa',
      'ul. Wielopole 17a, Kraków'
    ],
    pdfLink: 'assets/documents/Wielopole.pdf'
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
    ]
  },
  {
    id: 4,
    name: 'Aleksander M.',
    company: 'Klient indywidualny',
    location: '',
    icon: 'fa-stairs',
    text: 'Jestem bardzo zadowolony z efektów. Właściciel bardzo kontaktowy, zasugerował dobre rozwiązania. Schody wyglądają jak nowe!',
    shortText: 'Jestem bardzo zadowolony z efektów. Właściciel bardzo kontaktowy, zasugerował dobre rozwiązania. Schody wyglądają jak nowe!',
    rating: 5,
    details: [
      'Klient indywidualny',
      'Naprawa schodów lastryko',
      'Renowacja + Polerowanie'
    ]
  },
  {
    id: 5,
    name: 'Piotr G.',
    company: 'Klient indywidualny',
    location: '',
    icon: 'fa-thumbs-up',
    text: 'Solidnia robota w dobrej cenie. Polecam wszystkim szukającym profesjonalnej renowacji.',
    shortText: 'Solidnia robota w dobrej cenie. Polecam wszystkim szukającym profesjonalnej renowacji.',
    rating: 5,
    details: [
      'Klient indywidualny',
      'Usługi renowacyjne',
      'Solidna jakość + Dobra cena'
    ]
  },
  {
    id: 6,
    name: 'Damian W.',
    company: 'Klient indywidualny',
    location: '',
    icon: 'fa-award',
    text: 'Fachowo za rozsądną cenę. Profesjonalne podejście i terminowość wykonania.',
    shortText: 'Fachowo za rozsądną cenę. Profesjonalne podejście i terminowość wykonania.',
    rating: 5,
    details: [
      'Klient indywidualny',
      'Usługi fachowe',
      'Fachowość + Terminowość'
    ]
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
    title: 'Renowacja Marmuru - Lobby Biurowe',
    category: 'Marmur',
    location: 'Warszawa',
    area: '200m²',
    duration: '3 dni',
    description: 'Kompleksowa renowacja posadzki marmurowej w prestiżowym budynku biurowym',
  },
  {
    id: 2,
    title: 'Szlifowanie Lastryko - Centrum Handlowe',
    category: 'Lastryko',
    location: 'Kraków',
    area: '5000m²',
    duration: '14 dni',
    description: 'Odświeżenie posadzek lastrykowych w głównej hali galerii handlowej',
  },
  {
    id: 3,
    title: 'Krystalizacja - Hotel 5*',
    category: 'Marmur',
    location: 'Gdańsk',
    area: '350m²',
    duration: '5 dni',
    description: 'Krystalizacja i zabezpieczenie posadzek marmurowych w luksusowym hotelu',
  },
  {
    id: 4,
    title: 'Renowacja Zabytkowego Lastryko',
    category: 'Lastryko',
    location: 'Poznań',
    area: '180m²',
    duration: '7 dni',
    description: 'Przywrócenie blasku historycznym posadzkom w zabytkowej kamienicy',
  },
  {
    id: 5,
    title: 'Szlifowanie - Muzeum',
    category: 'Marmur',
    location: 'Wrocław',
    area: '450m²',
    duration: '10 dni',
    description: 'Renowacja posadzek w reprezentacyjnych salach muzealnych',
  },
  {
    id: 6,
    title: 'Kompleksowa Renowacja - Kościół',
    category: 'Lastryko',
    location: 'Kraków',
    area: '600m²',
    duration: '21 dni',
    description: 'Odnowienie zabytkowych posadzek w obiekcie sakralnym',
  },
];

export const navLinks = [
  { id: 'about', label: 'O Nas' },
  { id: 'services', label: 'Usługi' },
  { id: 'projects', label: 'Realizacje' },
  { id: 'references', label: 'Referencje' },
];
