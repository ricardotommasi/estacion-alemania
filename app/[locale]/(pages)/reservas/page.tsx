import MenuLink from "@/app/components/MenuLink";
import { Locale } from "@/constants/locales";
import Image from "next/image";

const RESERVATIONS_CONTENT = {
  es: {
    introTitle: "¿Viajás con un grupo entre Salta y Cafayate?",
    introText:
      "En Estación Alemania estamos estratégicamente ubicados a mitad de camino para que tu viaje sea más simple y cómodo. Contamos con la infraestructura necesaria para recibir grupos grandes con un servicio ágil y organizado.",

    sectionTitle: "Todo lo que necesitás en un solo lugar:",

    items: [
      {
        id: 1,
        icon: "/icons/cafe.svg",
        title: "Desayunos, almuerzos y meriendas",
        description:
          "Platos regionales, fiambres locales y opciones rápidas para grupos.",
      },
      {
        id: 2,
        icon: "/icons/reloj.svg",
        title: "Paradas técnicas",
        description:
          "Servicio rápido pensado para detenerse solo unos minutos y continuar el viaje sin demoras.",
      },
      {
        id: 3,
        icon: "/icons/tren.svg",
        title: "Estacionamiento privado",
        description:
          "Espacio amplio y seguro para colectivos, minibuses y combis.",
      },
      {
        id: 4,
        icon: "/icons/bano.svg",
        title: "Sanitarios para grupos",
        description:
          "Baños con gran capacidad para recibir muchas personas simultáneamente.",
      },
      {
        id: 5,
        icon: "/icons/wifi.svg",
        title: "Conexión WiFi",
        description:
          "Internet estable en un punto único de la ruta donde generalmente no hay señal de celular.",
      },
      {
        id: 6,
        icon: "/icons/accesibilidad.svg",
        title: "Accesibilidad",
        description: "Rampa de acceso para personas con movilidad reducida.",
      },
      {
        id: 7,
        icon: "/icons/eventos.svg",
        title: "Eventos e infraestructura",
        description:
          "Espacio ideal para coffee breaks, paradas de bodas, seminarios o caravanas de autos.",
      },
    ],

    closingText:
      "Además, ofrecemos un entorno único en plena Quebrada de las Conchas, junto al Museo de Interpretación de los Valles Calchaquíes, donde los visitantes pueden conocer la cultura, la historia y la geología de este lugar emblemático del noroeste argentino.",

    contactText:
      "No dudes en contactarnos para coordinar la próxima parada de tu grupo.",
  },

  en: {
    introTitle: "Traveling with a group between Salta and Cafayate?",

    introText:
      "At Estación Alemania, we are strategically located halfway along the route, making your journey easier and more comfortable. We have the facilities and infrastructure to accommodate large groups with efficient and well-organized service.",

    sectionTitle: "Everything you need in one place:",

    items: [
      {
        id: 1,
        icon: "/icons/cafe.svg",
        title: "Breakfast, lunch and snacks",
        description:
          "Regional dishes, local cold cuts, and quick options for groups.",
      },
      {
        id: 2,
        icon: "/icons/reloj.svg",
        title: "Quick stops",
        description:
          "Fast service designed for short stops, allowing groups to continue their journey without delays.",
      },
      {
        id: 3,
        icon: "/icons/tren.svg",
        title: "Private parking",
        description:
          "Spacious and secure parking area for buses, minibuses, and vans.",
      },
      {
        id: 4,
        icon: "/icons/bano.svg",
        title: "Group restrooms",
        description:
          "High-capacity restrooms designed to accommodate many people at the same time.",
      },
      {
        id: 5,
        icon: "/icons/wifi.svg",
        title: "WiFi connection",
        description:
          "Reliable internet access in a unique location along the route where cell phone service is usually unavailable.",
      },
      {
        id: 6,
        icon: "/icons/accesibilidad.svg",
        title: "Accessibility",
        description: "Ramp access for people with reduced mobility.",
      },
      {
        id: 7,
        icon: "/icons/eventos.svg",
        title: "Events & facilities",
        description:
          "An ideal space for coffee breaks, wedding stops, seminars, or classic car caravans.",
      },
    ],

    closingText:
      "We are also located in the stunning Quebrada de las Conchas, next to the Calchaquí Valleys Interpretation Museum, where visitors can learn about the culture, history, and geology of this unique region in northwestern Argentina.",

    contactText: "Feel free to contact us to organize your group's next stop.",
  },
};

const RESERVATIONS_MENU = [
  {
    id: 2,
    es: "Contactanos por WhatsApp",
    en: "Contact us on WhatsApp",
    url: "https://wa.me/5491131994491?text=Hola%21%20Quisiera%20consultar%20por%20una%20parada%20para%20un%20grupo%20en%20Estaci%C3%B3n%20Alemania.",
  },
];

export default async function Page({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  const validLocale: Locale =
    locale === "es" || locale === "en" ? locale : "es";

  const content = RESERVATIONS_CONTENT[validLocale];

  return (
    <div className="w-full overflow-y-auto pb-5">
      <div className="mx-5 mt-6 flex flex-col gap-6">
        <div className="flex flex-col gap-4 text-center">
          <h1 className="text-[22px] font-semibold leading-tight max-w-[420px] mx-auto">
            {content.introTitle}
          </h1>

          <p className="text-[14px] leading-relaxed text-black/80">
            {content.introText}
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <p className="text-sm font-medium text-center">
            {content.sectionTitle}
          </p>

          {content.items.map((item) => (
            <div key={item.id} className="flex items-start gap-4">
              <div className="relative mt-1 h-9 w-9 shrink-0">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="flex flex-col gap-1">
                <h2 className="text-[15px] font-semibold leading-snug">
                  {item.title}
                </h2>

                <p className="text-[14px] leading-relaxed text-black/70">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <p className="text-[14px] leading-relaxed text-black/80">
          {content.closingText}
        </p>
      </div>

      <div className="relative mt-6 h-[30vh] w-full">
        <Image
          src="/img/reservas.svg"
          alt="Reservas"
          fill
          className="object-cover"
        />
      </div>

      <div className="mx-5 mt-5 flex flex-col gap-4">
        <p className="text-[14px] leading-relaxed text-black/80 text-center">
          {content.contactText}
        </p>

        <MenuLink
          item={RESERVATIONS_MENU[0]}
          locale={validLocale}
          type={3}
          colorClass="bg-[rgba(224,175,145,1)] -ml-5"
        />
      </div>
    </div>
  );
}
