"use client";

import { IconRainy, IconBed, IconRuler } from "@intentui/icons";
import Image from "next/image";
import Link from "next/link";
import type { Property } from "../types/property";

import placeholderImage from "/public/placeholder.webp";

interface PropertyListProps {
  data: Property[];
}

const PropertyList = ({ data }: PropertyListProps) => {
  return (
    <>
      {data.map((item) => (
        <Link
          href={`/properties/${item.id}`}
          key={item.id}
          className="block group overflow-hidden rounded-4xl border  transition-all duration-300  dark:border-gray-800"
        >
          <figure className="flex flex-col h-full">
            <div className="relative w-full h-56">
              <Image
                src={placeholderImage}
                alt={`Placeholder image for a property`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-101 transition-transform duration-300"
                placeholder="blur"
              />
            </div>

            <figcaption className="p-5 flex flex-col flex-grow">
              <p className="text-xs font-seibold text-blue-600 bg-blue-100 dark:bg-blue-900/50 dark:text-blue-300 rounded-full px-3 py-1 self-start">
                {item.property_type}
              </p>

              <h3 className="text-xl ont-bold text-gray-900 dark:text-gray-50 line-clamp-2 mt-3 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                {item.title}
              </h3>

              <p className="text-sm text-gra-600 dark:text-gray-400 mt-1">
                {item.location_text}
              </p>

              <div className="flex-grow"></div>

              <div className="flex itemscenter gap-5 mt-4 text-sm text-gray-700 dark:text-gray-300 border-t border-gray-200 dark:border-gray-800 pt-4">
                <div className="flex items-center gap-2">
                  <IconBed className="w-5 h-5" />
                  <span>{item.specifications.bedrooms} Beds</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconRainy className="w-5 h-5" />
                  <span>{item.specifications.bathrooms} Baths</span>
                </div>
                <div className="flex items-center gap-2">
                  <IconRuler className="w-5 h-5" />
                  <span>{item.specifications.building_area} m²</span>
                </div>
              </div>

              <div className="mt4">
                <p className="text-2xl font-extrabold text-gray-900 dark:text-white">
                  {item.price_display}
                </p>
              </div>
            </figcaption>
          </figure>
        </Link>
      ))}
    </>
  );
};

export default PropertyList;
