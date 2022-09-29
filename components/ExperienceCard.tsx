import React from "react";
import { motion } from "framer-motion";

type Props = {};

function ExperienceCard({}: Props) {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.img
        initial={{ y: -100, opacity: 0 }}
        transition={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="w-32 h-32 rounded-full md:rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
        src="https://scontent.fbey4-2.fna.fbcdn.net/v/t1.18169-9/22449698_1698992046800393_2729797884601132761_n.png?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6KE7i3yIOqQAX_kCj9B&_nc_ht=scontent.fbey4-2.fna&oh=00_AT-dpAMeQOH8SfwxaOzSOr9JiAcZ-imeyGpXHKbyXNHScA&oe=635BE002"
      />
      <div className="px-0 md:px-10">
        <h4 className="text-4xl font-light">Android Developer</h4>
        <p className="font-bold text-2xl mt-1">Azkatech</p>
        <div className="flex space-x-2 my-2">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="h-10 w-10 rounded-full"
            src="https://scontent.fbey4-2.fna.fbcdn.net/v/t1.18169-9/22449698_1698992046800393_2729797884601132761_n.png?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6KE7i3yIOqQAX_kCj9B&_nc_ht=scontent.fbey4-2.fna&oh=00_AT-dpAMeQOH8SfwxaOzSOr9JiAcZ-imeyGpXHKbyXNHScA&oe=635BE002"
            alt=""
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="h-10 w-10 rounded-full"
            src="https://scontent.fbey4-2.fna.fbcdn.net/v/t1.18169-9/22449698_1698992046800393_2729797884601132761_n.png?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6KE7i3yIOqQAX_kCj9B&_nc_ht=scontent.fbey4-2.fna&oh=00_AT-dpAMeQOH8SfwxaOzSOr9JiAcZ-imeyGpXHKbyXNHScA&oe=635BE002"
            alt=""
          />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="h-10 w-10 rounded-full"
            src="https://scontent.fbey4-2.fna.fbcdn.net/v/t1.18169-9/22449698_1698992046800393_2729797884601132761_n.png?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=6KE7i3yIOqQAX_kCj9B&_nc_ht=scontent.fbey4-2.fna&oh=00_AT-dpAMeQOH8SfwxaOzSOr9JiAcZ-imeyGpXHKbyXNHScA&oe=635BE002"
            alt=""
          />
        </div>
        <p className="uppercase py-5 text-gray-300">
          Started Work... - Ended...
        </p>
        <ul className="list-disc space-y-4 ml-5 text-lg">
          <li>
            Summary points Summary pointsSummary pointsSummary pointsSummary
            pointsSummary pointsSummary pointsSummary pointsSummary points
          </li>
          <li>
            Summary points Summary pointsSummary pointsSummary pointsSummary
            pointsSummary pointsSummary pointsSummary pointsSummary points
          </li>
          <li>
            Summary points Summary pointsSummary pointsSummary pointsSummary
            pointsSummary pointsSummary pointsSummary pointsSummary points
          </li>
          <li>
            Summary points Summary pointsSummary pointsSummary pointsSummary
            pointsSummary pointsSummary pointsSummary pointsSummary points
          </li>
        </ul>
      </div>
    </article>
  );
}

export default ExperienceCard;
