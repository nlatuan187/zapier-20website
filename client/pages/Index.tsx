import { useState } from "react";
import AnnouncementBanner from "@/components/AnnouncementBanner";
import Header from "@/components/Header";
import CompanyLogos from "@/components/CompanyLogos";
import { ChevronLeft, ChevronRight, Play, Zap } from "lucide-react";

export default function Index() {
  const [activeTab, setActiveTab] = useState("AI Workflows");

  const tabs = [
    "AI Workflows",
    "AI Agents",
    "AI Chatbots",
    "Tables",
    "Interfaces",
    "Canvas",
    "Enterprise",
    "Functions",
    "8,000 apps",
  ];

  const templateCards = [
    {
      title: "Let AI handle your IT support tickets",
      apps: [
        {
          src: "https://api.builder.io/api/v1/image/assets/TEMP/8cba48ce41559f56762f1fd6aa68e79b265f8ce2?width=52",
          alt: "Jira",
        },
        {
          src: "https://api.builder.io/api/v1/image/assets/TEMP/75d25c8204720637a8de9e6f9dc214c582a4e76d?width=52",
          alt: "Slack",
        },
        {
          src: "https://api.builder.io/api/v1/image/assets/TEMP/4186bedd4f7f7d42b6db4d0da328495c7e45efaa?width=52",
          alt: "Clickup",
        },
      ],
    },
    {
      title: "Turn sales calls into coaching moments",
      apps: [
        {
          src: "https://api.builder.io/api/v1/image/assets/TEMP/83711a1869dcd2db50a30bb9a8fa2ac83daee68f?width=52",
          alt: "Gong",
        },
        {
          src: "https://api.builder.io/api/v1/image/assets/TEMP/75d25c8204720637a8de9e6f9dc214c582a4e76d?width=52",
          alt: "Slack",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-zapier-cream">
      <AnnouncementBanner />
      <Header />

      <main>
        <section className="border-l border-r border-zapier-border max-w-screen-xl mx-auto">
          <div className="px-6 md:px-14 py-12 md:py-16 flex flex-col lg:flex-row items-center gap-12 md:gap-16">
            <div className="flex-1 max-w-xl">
              <p className="text-xs font-normal text-zapier-dark uppercase tracking-wide mb-4">
                Scale AI agents with Zapier
              </p>
              <h1 className="text-4xl md:text-[52px] font-medium text-zapier-dark leading-tight md:leading-[57.6px] mb-8">
                The most connected AI orchestration platform
              </h1>
              <p className="text-lg text-zapier-dark leading-relaxed mb-10 max-w-md">
                Build and ship AI workflows in minutes—no IT bottlenecks, no
                complexity. Just results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="px-6 py-3.5 bg-zapier-orange text-zapier-cream text-lg font-semibold rounded border border-zapier-orange hover:bg-zapier-orange/90 transition-colors">
                  Start free with email
                </button>
                <button className="px-6 py-3.5 bg-zapier-cream text-zapier-dark text-lg font-semibold rounded border border-zapier-dark hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.2041 8.34888V12.3007H15.6958C15.4546 13.5716 14.731 14.6477 13.6456 15.3713L16.9573 17.9409C18.8868 16.1598 20 13.5438 20 10.4362C20 9.71263 19.9351 9.01683 19.8145 8.34898L10.2041 8.34888Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M4.48548 12.1462L3.73857 12.718L1.09473 14.7773C2.77377 18.1076 6.21509 20.4082 10.2039 20.4082C12.959 20.4082 15.2688 19.4991 16.9572 17.9407L13.6455 15.3711C12.7364 15.9833 11.5768 16.3544 10.2039 16.3544C7.55088 16.3544 5.29677 14.564 4.48966 12.1521L4.48548 12.1462Z"
                      fill="#34A853"
                    />
                    <path
                      d="M1.09454 5.63086C0.398843 7.00372 0 8.55292 0 10.2041C0 11.8553 0.398843 13.4045 1.09454 14.7773C1.09454 14.7865 4.4898 12.1428 4.4898 12.1428C4.28571 11.5306 4.16509 10.8812 4.16509 10.204C4.16509 9.52673 4.28571 8.87742 4.4898 8.26517L1.09454 5.63086Z"
                      fill="#FF4F00"
                    />
                    <path
                      d="M10.2042 4.0631C11.707 4.0631 13.0428 4.58257 14.1096 5.58444L17.0316 2.66238C15.2598 1.01119 12.9593 0 10.2042 0C6.2153 0 2.77377 2.29129 1.09473 5.63083L4.48987 8.26536C5.29688 5.85345 7.5511 4.0631 10.2042 4.0631Z"
                      fill="#EA4335"
                    />
                  </svg>
                  Start free with Google
                </button>
              </div>
            </div>

            <div className="flex-1 flex justify-center lg:justify-end">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/ef620c6f25027ea163e08c76b14685b96dc64801?width=1052"
                alt="AI orchestration illustration"
                className="w-full max-w-md lg:max-w-lg h-auto"
              />
            </div>
          </div>
        </section>

        <section className="bg-zapier-cream border-b border-zapier-border">
          <div className="max-w-screen-xl mx-auto px-6 md:px-80">
            <div className="border-l border-r border-zapier-border">
              <div className="flex items-center justify-center gap-4 py-8 px-5">
                <div className="w-2 h-2 rounded-full bg-zapier-orange opacity-75"></div>
                <h2 className="text-sm font-medium text-zapier-dark uppercase tracking-wide">
                  Your complete toolkit for AI automation
                </h2>
              </div>

              <div className="border-t border-b border-zapier-border overflow-x-auto">
                <div className="flex min-w-max">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-3 text-sm border-r border-l border-zapier-border transition-all ${
                        activeTab === tab
                          ? "font-semibold text-zapier-dark shadow-[inset_0_-4px_0_0_#FF4F00]"
                          : "font-normal text-gray-600 hover:bg-gray-50"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
              </div>

              <div
                className="py-20 px-6 md:px-40 bg-cover bg-center"
                style={{
                  backgroundImage:
                    "url('https://api.builder.io/api/v1/image/assets/TEMP/9bd8529063f16696ac7174c57df3b5240a6516a1?width=2556')",
                  backgroundSize: "100px 100px",
                }}
              >
                <div className="relative">
                  <img
                    src="https://api.builder.io/api/v1/image/assets/TEMP/fc84601c841c5c553423526f627741d39aacde17?width=1916"
                    alt="AI workflows demo"
                    className="w-full h-auto rounded"
                  />
                  <button className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center hover:bg-black/70 transition-colors">
                    <Play className="w-4 h-4 text-zapier-cream fill-zapier-cream" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row">
                <div className="lg:w-[33%] px-6 md:px-8 py-8 md:py-12 flex flex-col justify-between">
                  <div>
                    <div className="mb-11">
                      <Zap className="w-6 h-6 text-zapier-orange fill-zapier-orange mb-5" />
                      <h3 className="text-2xl font-semibold text-zapier-dark mb-9 tracking-tight">
                        AI Workflows
                      </h3>
                      <p className="text-base text-zapier-dark max-w-xs tracking-tight">
                        Automate advanced workflows with the full building power
                        of Zapier.
                      </p>
                    </div>
                  </div>
                  <button className="px-6 py-3.5 bg-zapier-orange text-zapier-cream text-lg font-semibold rounded border border-zapier-orange hover:bg-zapier-orange/90 transition-colors">
                    Explore AI Workflows
                  </button>
                </div>

                <div className="lg:w-[67%] border-l border-zapier-border px-6 md:px-8 py-8 md:py-12">
                  <p className="text-sm font-medium text-zapier-dark uppercase tracking-wide mb-6">
                    Get started fast with pre-built templates
                  </p>

                  <div className="flex flex-col md:flex-row gap-8 mb-8 overflow-x-auto">
                    {templateCards.map((card, index) => (
                      <div
                        key={index}
                        className="flex-1 min-w-[280px] border border-zapier-border rounded p-6 md:p-8 flex flex-col justify-between min-h-[192px] hover:shadow-md transition-shadow"
                      >
                        <h4 className="text-xl font-semibold text-zapier-dark mb-6 tracking-tight">
                          {card.title}
                        </h4>
                        <div className="flex gap-2">
                          {card.apps.map((app, appIndex) => (
                            <div
                              key={appIndex}
                              className="w-10 h-10 border border-zapier-border-dark rounded p-1.5 flex items-center justify-center"
                            >
                              <img
                                src={app.src}
                                alt={app.alt}
                                className="w-full h-full object-contain"
                              />
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                    <div className="flex-1 min-w-[280px] border border-zapier-border rounded p-6 md:p-8 min-h-[192px]"></div>
                  </div>

                  <div className="flex justify-end gap-3">
                    <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                      <ChevronLeft className="w-6 h-6 text-zapier-grey" />
                    </button>
                    <button className="p-2 hover:bg-gray-100 rounded transition-colors">
                      <ChevronRight className="w-6 h-6 text-zapier-dark" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <CompanyLogos />
      </main>
    </div>
  );
}
