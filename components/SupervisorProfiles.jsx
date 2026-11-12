import Link from "next/link";
import ImageLoader from "./imageLoader";

const Supervisor1 = () => {
  return (
    <>
      <div>
        <section>
          <ImageLoader
            mainImageSrc={"/img/supervisor/sup1.jpg"}
            altImageSrc={"/img/loading.jpg"}
            altText="Dr. Prabha Mandayam"
            classValue="research-image"
          />
        </section>
        <section>
          <h2>Dr. Prabha Mandayam {"(Associate Professor)"}</h2>
          <div>Department of Physics, IITM</div>
          <p>
            Research interests are in the area of quantum computing and quantum
            information theory. In particular, interested in quantum error
            correction, understanding the interplay between quantum foundations
            and quantum cryptography, and, using quantum information as a tool
            to explore fundamental questions in theoretical physics.
          </p>
          <div>
            <Link href={"https://physics.iitm.ac.in/~prabhamd/index.html"}>
              Visit website
              <svg
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

const Supervisor2 = () => {
  return (
    <>
      <div>
        <section>
          <ImageLoader
            mainImageSrc={"/img/supervisor/sup2.jpg"}
            altImageSrc={"/img/loading.jpg"}
            altText="Dr. Siddharth Dhomkar"
            classValue="research-image"
          />
        </section>
        <section>
          <h2>Dr. Siddharth Dhomkar {"(Assistant Professor) "}</h2>
          <div>Department of Physics, IITM</div>
          <p>
            My research interests are optical spins, magnetic resonance, machine
            learning for quantum control, and scanning confocal fluorescence
            microscopy. The following topics are currently being explored:
          </p>
          <ul>
            <li>T1-based quantum sensing with NV-nanodiamonds</li>
            <li>
              Investigating decoherence-free sub-spaces in diamond and hBN
            </li>
            <li>
              Understanding electron-nuclear dynamics for high-fidelity readout
              and nuclear hyperpolarization
            </li>
            <li>
              Developing methods for efficient simulation of superconducting
              qubits
            </li>
            <li>Defect generation and characterization</li>
            <li>
              Employing ML-based techniques for noise spectroscopy and
              mitigation
            </li>
            <li>Vector AC-magnetometry with NVs in diamond</li>
            <li>Optimal surface passivation of diamond</li>
          </ul>
          <div>
            <Link
              href={"https://physics.iitm.ac.in/faculty-inner.php?fuid=120"}
            >
              Visit website
              <svg
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default function SupervisorProfiles() {
  return (
    <>
      <article className="supervisor-profile">
        <p className="eyebrow">Supervisor</p>
        <Supervisor1 />
      </article>
      <article className="supervisor-profile">
        <p className="eyebrow">Co-supervisor</p>
        <Supervisor2 />
      </article>
    </>
  );
}
