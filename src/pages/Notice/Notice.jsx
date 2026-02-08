import HeroSection from "../../components/Herosection";
import ContentCard from "../../components/Contencard";
import React from "react";

const notices = [
  {
    id: 1,
    title:
      "নিয়োগ বিজ্ঞপ্তি – International Center for Ocean Governance (ICOG), ঢাকা বিশ্ববিদ্যালয়",
    date: "July 17, 2025",
    link: "https://du.ac.bd/rb_notice_details/205/24609",
  },
  {
    id: 2,
    title: "Scholarship Award Notification (2024–2025)",
    date: "May 15, 2025",
    link: "https://du.ac.bd/rb_notice_details/205/24069",
  },
  {
    id: 3,
    title:
      "Call for Project Proposals for Ocean-Related Research (Fiscal Year 2024–2025)",
    date: "May 15, 2025",
    link: "https://du.ac.bd/rb_notice_details/205/24070",
  },
];

export default function Notice() {
  return (
    <>
      <HeroSection title="Notice" />

      <ContentCard>
        <h4 className="text-xl font-semibold mb-6">All Notices</h4>

        <div className="space-y-6">
          {notices.map((notice) => (
            <div
              key={notice.id}
              className="border-b pb-4 last:border-b-0"
            >
              <h5 className="font-medium text-lg leading-snug">
                <a
                  href={notice.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-800 hover:underline"
                >
                  {notice.title}
                </a>
              </h5>

              <div className="flex items-center justify-between mt-2 text-sm text-gray-600">
                <span>Published on: {notice.date}</span>

                <a
                  href={notice.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-blue-700 hover:text-blue-900"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </ContentCard>
    </>
  );
}
