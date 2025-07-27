"use client";

import { IconRainy, IconBed, IconRuler } from "@intentui/icons";
import Image from "next/image";
import Link from "next/link";
import type { Property } from "../types/property";

interface PropertyListProps {
  data: Property[];
}

const PropertyList = ({ data }: PropertyListProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((item) => (
        <Link
          href={`/properties/${item.id}`}
          key={item.id}
          className="block group rounded-lg border overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 bg-white"
        >
          <figure>
            <div className="relative w-full h-52">
              <Image
                src={`https://placehold.co/600x400/E2E8F0/4A5568?text=${item.property_type}`}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover"
              />
            </div>
            <figcaption className="p-4">
              <p className="text-sm font-medium text-blue-600">
                {item.property_type}
              </p>
              <h3 className="text-lg font-bold text-gray-900 line-clamp-1 mt-1 group-hover:text-blue-700 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-gray-500 mt-1">{item.location_text}</p>
              <div className="flex items-center gap-4 mt-3 text-sm text-gray-600 border-t pt-3">
                <div className="flex items-center gap-1.5">
                  <IconBed className="w-4 h-4" />
                  <span>{item.specifications.bedrooms}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <IconRainy className="w-4 h-4" />
                  <span>{item.specifications.bathrooms}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <IconRuler className="w-4 h-4" />
                  <span>{item.specifications.building_area} m²</span>
                </div>
              </div>
              <div className="mt-4">
                <p className="text-xl font-extrabold text-gray-800">
                  {item.price_display}
                </p>
              </div>
            </figcaption>
          </figure>
        </Link>
      ))}
    </div>
  );
};

export default PropertyList;
