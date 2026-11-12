import { getAssetPath } from "../lib/assets";
export default function Quotes() {
  return (
    <section className="quotes" aria-labelledby="quotes-title">
      <h2 className="quotes-heading" id="quotes-title">
        Quotes & a workshop reflection
      </h2>
      <figure className="quote-featured">
        <blockquote>
          Nature isn’t classical, dammit, and if you want to make a simulation
          of nature, you’d better make it quantum mechanical, and by golly it’s
          a wonderful problem, because it doesn’t look so easy.
        </blockquote>
        <figcaption>
          <img
            src={getAssetPath("/img/testimonial/richard.jpg")}
            alt=""
            loading="lazy"
            decoding="async"
          />
          <span>
            Richard Feynman<small>Theoretical physicist</small>
          </span>
        </figcaption>
      </figure>
      <figure>
        <blockquote>
          Quantum computation is a distinctively new way of harnessing nature.
          It will be the first technology that allows useful tasks to be
          performed in collaboration between parallel universe.
        </blockquote>
        <figcaption>
          <img
            src={getAssetPath("/img/testimonial/david.jpg")}
            alt=""
            loading="lazy"
            decoding="async"
          />
          <span>
            David Deutsch<small>Physicist</small>
          </span>
        </figcaption>
      </figure>
      <figure>
        <blockquote>
          Best part was the description of concepts along with codes. People who
          have little/weak background of quantum information can also benefit
          from the workshop. For the rest of the queries, mentors were always
          available.
        </blockquote>
        <figcaption>
          <img
            src={getAssetPath("/img/testimonial/qworld.jpg")}
            alt=""
            loading="lazy"
            decoding="async"
          />
          <span>
            Workshops, 2020<small>QBronze</small>
          </span>
        </figcaption>
      </figure>
    </section>
  );
}
