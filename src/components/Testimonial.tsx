import { Star } from "lucide-react";
import React from "react";

type Props = {};
const customers = [
  {
    name: "Sarah",
    comment: "The best experience I've had this year",
    rating: 5,
  },
  {
    name: "Ali",
    comment: "Best food steak is top notch But service is slow",
    rating: 4,
  },
  {
    name: "Jhonson",
    comment: "The ambious is perfect",
    rating: 5,
  },
];

const Testimonial = (props: Props) => {
  return (
    <section className="container mx-auto py-16 bg-secondary/10 ">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Guests Say</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {customers.map((item, index) => (
            <div key={index} className="bg-background p-6 rounded-lg shadow-sm">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i}
                    className={`h-5 w-5 ${
                      i < item.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "text-muted-foreground "
                    }`}
                  />
                ))}
              </div>
              <p className="text-muted-foreground mb-4 italic">
                "{item.comment}"
              </p>
              <p className="font-medium">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
