import Testimonial from "@/components/Klientomat_LP/testimonial";
import TestimonialImg01 from "@/public/images/testimonial-01.jpg";
import TestimonialImg02 from "@/public/images/testimonial-02.jpg";
import TestimonialImg03 from "@/public/images/testimonial-03.jpg";
import TestimonialImg04 from "@/public/images/testimonial-04.jpg";

export default function TestimonialsCarousel() {
  const testimonials = [
    {
      img: TestimonialImg01,
      name: "Michał Kowalski",
      username: "@mich_kow",
      date: "19 maja 2027",
      content:
        "Klientomat zrewolucjonizował sposób, w jaki pozyskuję klientów. Automatyzacja i personalizacja emaili sprawiają, że moje kampanie są bardziej skuteczne niż kiedykolwiek!",
      channel: "Twitter",
    },
    {
      img: TestimonialImg02,
      name: "Katarzyna Nowak",
      username: "@kasi_now",
      date: "12 kwietnia 2027",
      content:
        "Dzięki Klientomatowi zwiększyłam swoje przychody o 70%! Intuicyjny interfejs i błyskawiczna automatyzacja to coś, czego wcześniej mi brakowało.",
      channel: "Twitter",
    },
    {
      img: TestimonialImg03,
      name: "Tomasz Zieliński",
      username: "@zielins_t",
      date: "4 marca 2027",
      content:
        "Nie wyobrażam sobie teraz pracy bez Klientomatu. Oszczędzam godziny każdego dnia, a generowanie leadów stało się prostsze niż kiedykolwiek.",
      channel: "Twitter",
    },
    {
      img: TestimonialImg04,
      name: "Anna Wiśniewska",
      username: "@anna_wis",
      date: "15 stycznia 2027",
      content:
        "Zimne maile zawsze wydawały mi się stratą czasu, ale Klientomat zmienił moje podejście. Dzięki niemu liczba nowych klientów wzrosła o 50%. Polecam każdemu!",
      channel: "Twitter",
    },

  ];

  return (
    <section className="relative before:pointer-events-none before:absolute before:inset-0 before:-z-10 before:h-[120%] before:bg-gradient-to-b before:from-gray-100">
      <div className="pt-12 md:pt-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-bold md:text-4xl">
              Opinie Naszych Klientów
            </h2>
          </div>
        </div>
        <div className="relative mx-auto flex max-w-[94rem] justify-center">
          <div
            className="absolute bottom-20 -z-10 -translate-x-36"
            aria-hidden="true"
          >
            <div className="h-80 w-80 rounded-full bg-gradient-to-tr from-blue-500 to-gray-900 opacity-30 blur-[160px] will-change-[filter]" />
          </div>
          <div className="absolute -bottom-10 -z-10" aria-hidden="true">
            <div className="h-80 w-80 rounded-full bg-blue-500 opacity-40 blur-[160px] will-change-[filter]" />
          </div>
          <div className="absolute bottom-0 -z-10" aria-hidden="true">
            <div className="h-56 w-56 rounded-full border-[20px] border-white blur-[20px] will-change-[filter]" />
          </div>
          {/* Row */}
          <div className="group inline-flex w-full flex-nowrap py-12 [mask-image:_linear-gradient(to_right,transparent_0,_black_10%,_black_90%,transparent_100%)] md:py-20">
            <div className="flex animate-[infinite-scroll_60s_linear_infinite] items-start justify-center group-hover:[animation-play-state:paused] md:justify-start [&>*]:mx-3">
              {/* Items */}
              {testimonials.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  testimonial={testimonial}
                  className="w-[22rem] transition-transform duration-300 group-hover:rotate-0"
                >
                  {testimonial.content}
                </Testimonial>
              ))}
            </div>
            {/* Duplicated element for infinite scroll */}
            <div
              className="flex animate-[infinite-scroll_60s_linear_infinite] items-start justify-center group-hover:[animation-play-state:paused] md:justify-start [&>*]:mx-3"
              aria-hidden="true"
            >
              {/* Items */}
              {testimonials.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  testimonial={testimonial}
                  cloned={true}
                  className="w-[22rem] transition-transform duration-300 group-hover:rotate-0"
                >
                  {testimonial.content}
                </Testimonial>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
