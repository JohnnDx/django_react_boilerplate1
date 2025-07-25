import Image from "next/image";
import PageIllustration from "@/components/Klientomat_LP/page-illustration";
import Avatar01 from "@/public/images/avatar-01.jpg";
import Avatar02 from "@/public/images/avatar-02.jpg";
import Avatar03 from "@/public/images/avatar-03.jpg";
import Avatar04 from "@/public/images/avatar-04.jpg";
import Avatar05 from "@/public/images/avatar-05.jpg";
import Avatar06 from "@/public/images/avatar-06.jpg";

export default function HeroHome() {
  return (
    <section className="relative">
      <PageIllustration />
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        {/* Hero content */}
        <div className="pb-12 pt-32 md:pb-20 md:pt-28">
          {/* Section header */}
          <div className="pb-12 text-center md:pb-16">
            <div
              className="mb-6 border-y [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]"
              data-aos="zoom-y-out"
            >
              <div className="-mx-0.5 flex justify-center -space-x-3">
              <div className="inline-flex mb-2 pt-2">
                <div className="flex items-center gap-2 text-sm text-gray-500 p-1 pr-3 rounded-full bg-white bg-opacity-80 shadow backdrop-blur">
                  <div className="flex -space-x-2 -ml-0.5">
                    <Image
                      className="box-content rounded-full border-2 border-gray-50"
                      src={Avatar01}
                      width={23}
                      height={23}
                      alt="Avatar 01"
                    />
                    <Image
                      className="box-content rounded-full border-2 border-gray-50"
                      src={Avatar02}
                      width={23}
                      height={23}
                      alt="Avatar 02"
                    />
                    <Image
                      className="box-content rounded-full border-2 border-gray-50"
                      src={Avatar03}
                      width={23}
                      height={23}
                      alt="Avatar 03"
                    />
                    <Image
                      className="box-content rounded-full border-2 border-gray-50"
                      src={Avatar04}
                      width={23}
                      height={23}
                      alt="Avatar 04"
                    />
                    <Image
                      className="box-content rounded-full border-2 border-gray-50"
                      src={Avatar05}
                      width={23}
                      height={23}
                      alt="Avatar 05"
                    />
                    <Image
                      className="box-content rounded-full border-2 border-gray-50"
                      src={Avatar06}
                      width={23}
                      height={23}
                      alt="Avatar 06"
                    />
                  </div>
                  <span>
                    Zaufało nam już <strong className="font-normal text-gray-900">1000+</strong> firm.
                  </span>
                </div>
              </div>
              </div>
            </div>
            <h1
              className="mb-6 border-y text-5xl font-bold [border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] md:text-6xl"
              data-aos="zoom-y-out"
              data-aos-delay={150}
            >
              30+ Rozmów Sprzedażowych Miesięcznie
              Na Autopilocie — <br className="max-lg:hidden" />Albo Nie Płacisz
            </h1>
            <div className="mx-auto max-w-3xl">
              <p
                className="mb-8 text-lg text-gray-700"
                data-aos="zoom-y-out"
                data-aos-delay={300}
              >
                Z Klientomatem zyskujesz nieograniczone możliwości w generowaniu leadów i <br className="max-lg:hidden" />wysyłce spersonalizowanych kampanii emailowych,
                <b> za 70% mniej niż koszt zatrudnienia pełnoetatowego specjalisty ds. sprzedaży</b>.
              </p>
              <div className="relative before:absolute before:inset-0 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1]">
                <div
                  className="relative mx-auto max-w-xs sm:flex sm:max-w-none sm:justify-center"
                  data-aos="zoom-y-out"
                  data-aos-delay={450}
                >
                  <a
                    className="btn group mb-4 w-full bg-gradient-to-t from-blue-600 to-blue-500 bg-[length:100%_100%] bg-[bottom] text-white shadow hover:bg-[length:100%_150%] sm:mb-0 sm:w-auto"
                    href="#0"
                  >
                    <span className="relative inline-flex items-center">
                    Rozpocznij za 1zł{" "}
                      <span className="ml-1 tracking-normal text-blue-300 transition-transform group-hover:translate-x-0.5">
                        -&gt;
                      </span>
                    </span>
                  </a>
                  <a
                    className="btn w-full bg-white text-gray-800 shadow hover:bg-gray-50 sm:ml-4 sm:w-auto"
                    href="#0"
                  >
                    Dowiedz się więcej
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* Hero image */}
          <div
            className="mx-auto max-w-3xl"
            data-aos="zoom-y-out"
            data-aos-delay={600}
          >
            <div className="relative aspect-video rounded-2xl bg-gray-900 px-5 py-3 shadow-xl before:pointer-events-none before:absolute before:-inset-5 before:border-y before:[border-image:linear-gradient(to_right,transparent,theme(colors.slate.300/.8),transparent)1] after:absolute after:-inset-5 after:-z-10 after:border-x after:[border-image:linear-gradient(to_bottom,transparent,theme(colors.slate.300/.8),transparent)1]">
              <div className="relative mb-8 flex items-center justify-between before:block before:h-[9px] before:w-[41px] before:bg-[length:16px_9px] before:[background-image:radial-gradient(circle_at_4.5px_4.5px,_theme(colors.gray.600)_4.5px,_transparent_0)] after:w-[41px]">
                <span className="text-[13px] font-medium text-white">
                  Klientomat
                </span>
              </div>
              <div className="font-mono text-sm text-gray-500 [&_span]:opacity-0">
                <span className="animate-[code-1_10s_infinite] text-gray-200">
                Kampania utworzona
                </span>{" "}
                <br />
                <span className="animate-[code-2_10s_infinite]">
                --klientomat rozpoczyna wysyłkę wiadomości
                </span>
                <br />
                <span className="animate-[code-3_10s_infinite]">
                --wysyłanie wiadomości do test@gmail.com
                </span>{" "}
                <br /><br />
                <span className="animate-[code-4_10s_infinite]">
                Pomyślnie wysłano
                </span>
                <br />
                <br />
                <span className="animate-[code-5_10s_infinite] text-gray-200">
                E-mail Otworzony
                </span>
                <br />
                <span className="animate-[code-6_10s_infinite]">
                Odbiorca kliknął link
                </span>
                <br />
                <span className="animate-[code-7_10s_infinite]">
                Odbiorca odpowiedział na Twoją wiadomość!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

