import React from "react";
export const ResearchInterest = () => {
  return (
    <>
      <h2>Research Interest</h2>
      <div>
        <p>
          <strong>Quantum Error Correction,</strong> I came across basic
          principles of quantum physics called superposition, entanglement, and
          Interference are the basis of quantum computing and give massive
          parallelism that is impossible on a conventional computer. Circuit
          (Gate) model is the most popular and understood so far. A quantum
          particle is susceptible to its surroundings. Any noise in the
          environment will destroy its quantum coherence. If a qubit is lost,
          this means an immediate error. How can we keep many of them in sync or
          maintain coherence between many quantum particles to build a real
          quantum computer? In general, it is tough to control quantum systems
          because the information starts leaking away if you have little
          interaction with the outside world. We want our qubits to be entangled
          with each other but don’t want them to be entangled with anything
          else. However, the trouble is that our qubits will be made of physical
          stuff, and our qubits are dumb; they will entangle with anything they
          can. So, we must design our qubits carefully to protect them from
          entangling with the environment; this is called decoherence. Then we
          need to shield our qubits from any noise. Furthermore, it gets worse
          the more qubits we have entangled with each other. Is it possible to
          make a working quantum computer with many qubits, or will decoherence
          and noise ruin everything? For each qubit, you must have a bunch of
          wires to manipulate and measure it. This is manageable for a small
          number of qubits, but as the number of qubits increases, the amount of
          extra stuff we need increases linearly, which is a massive engineering
          problem.
        </p>{" "}
        <p>
          So any quantum computer design needs to be able to entangle all of the
          qubits and then control and measure them in a scalable way. Problems
          of decoherence/noise affecting qubits take us to the need for Quantum
          Error Correction (QEC). This is an error correction scheme to make
          fault-tolerant quantum computers using many entangled qubits together
          to represent one noise-free qubit. How many we need depends on how
          good the qubits are, but estimates are in the range of 100 to 1000
          physical qubits to make one fault-tolerant qubit, which is many qubits
          brings us to scalability obstacles. Both algorithms and physical
          devices should be robust to make quantum computing and everyday
          reality. We need quantum computers with qubits in a million orders to
          break the current RSA encryption security using Shor’s algorithm,
          which is an essential concern worldwide. This application is itself
          enough to explain the importance of quantum error correction. Today we
          are in the Noisy intermediate-scale quantum (NISQ) era describes the
          current state of the art in fabricating quantum processors containing
          about 50 to a few 100 qubits. However, they are not advanced enough to
          reach fault tolerance nor large enough to profit sustainably from
          quantum supremacy. The term ’noisy’ refers to the fact that quantum
          processors are susceptible to the environment and may lose their
          quantum state due to quantum decoherence. In the NISQ era, quantum
          processors are not sophisticated enough to continuously implement
          quantum error correction. Intermediate-scale refers to the quantum
          volume related to the not-so-large number of qubits and moderate gate
          fidelity.
        </p>
      </div>
    </>
  );
};
export const NoiseSpectroscopy = () => {
  return (
    <>
      <h2>Noise Spectroscopy</h2>
      <div>
        <p>
          <strong>Decoherence is the</strong> uncontrolled interaction between
          system - environment degrees of freedom. For large scale quantum
          computation, developing robust quantum control techniques to mitigate
          the decoherence is imperative. For this, isolating the qubit from it’s
          environment is key. Understanding the spectrum of noise acting on a
          qubit can yield valuable information about its environment, as it
          crucially underpins the optimization of novel DD protocols that can
          mitigate such noise. In practice, the experimental noise spectrum
          varies significantly between different qubits in non-trivial ways to
          predict or accurately extract from the most common measurements. As a
          result, it is difficult to predict a priori which of the several
          possible DD protocols would provide optimal suppression of
          decoherence. Indeed, one could imagine constructing a decoupling
          protocol customized for a particular qubit, but this is only possible
          by knowing the actual qubit noise spectrum with sufficient accuracy.
          Also, it would be worth emphasizing that the knowledge of an obscured
          qubit environment is a valuable outcome of precise noise spectroscopy.
          As the number of qubits in a quantum computer grows, the complexity of
          the noise environment also increases. Rapid noise characterization
          techniques have become even more critical for managing these
          large-scale systems. Dynamical decoupling relies on tailoring pulse
          sequences to counteract specific noise frequencies. Rapid noise
          spectrum extraction allows for faster iteration and optimization of
          these protocols. It accelerates the development of robust quantum
          algorithms that enable real-time adjustments to error correction
          strategies based on the current noise environment. However, using
          standard methods, extracting accurate noise spectra from typical time
          dynamics measurements on qubits is intractable. Extracting the noise
          spectra rapidly for qubits presents several challenges. Conventional
          long-duration noise spectroscopy protocols require extended
          measurement times. These long measurement times contribute to
          decoherence, altering the noise they are trying to measure. The
          measured noise spectrum ends up being a distorted representation of
          the actual noise affecting the qubit.
        </p>{" "}
        <p>
          {" "}
          There are various sources of noise, each with varying frequencies and
          characteristics. Thus, our methods must be sensitive enough to capture
          this complexity without sacrificing speed. Many traditional methods
          prioritize accuracy over speed, requiring extensive data collection
          and analysis. Achieving rapid extraction often compromises the level
          of detail captured in the noise spectrum. This trade-off can limit the
          effectiveness of the extracted data for optimizing error correction
          protocols. Noise can fluctuate over time; this time dependence on
          noise creates problems for lengthy noise spectroscopy protocols,
          making them unsuitable for accurately characterizing the qubit’s noise
          environment. To practical achieve fault-tolerant quantum computing ,
          where errors can be effectively corrected, we need a deep
          understanding of the specific noise affecting the qubits, and rapid
          extraction of noise spectra becomes an imperative tool for overcoming
          noise challenges. Significant advances have been made in machine
          learning and specifically deep learning techniques, for example, in
          the fields of computer vision and natural language processing, and
          more recently, they have been applied to problems in physics and
          quantum engineering. Here, we propose to address this challenge of
          rapid noise spectroscopy using deep learning algorithms, motivated by
          past work on NV center qubits, a neural network-based methodology that
          allows for the extraction of the noise spectrum associated with any
          qubit surrounded by an arbitrary bath, with significantly greater
          accuracy than the current methods. While promising for rapid
          extraction, deep learning approaches require significant training
          data. Gathering this data can be time-consuming, especially for
          diverse noise environments. Our protocol effectively and efficiently
          addresses the challenges in accurately extracting qubit noise spectra
          from coherence decay measurements to understand and mitigate qubit
          noise environments and also outperforms conventional methods. This
          enables the customization of optimal DD protocols and improves the
          robustness of quantum control operations.
        </p>
      </div>
    </>
  );
};
export const ReadingAndEvents = () => {
  return (
    <>
      <section>
        <div>
          <div>
            <h2>Research Projects</h2>
            <div>
              I am currently reading the following topics.
              <ul>
                <li>Noise/Decoherence in Superconducting Qubits </li>
                <li>Adiabatic Quantum Computation Model</li>
                <li>Bosonic Codes and Topological Codes</li>
                <li>Approximate and Noise-Adapted QEC</li>
                <li>Basics of entanglement theory</li>
                <li>Gaussian quantum channel</li>
              </ul>
            </div>
          </div>
          <div>
            <h2>Books! I use for Learning</h2>
            <div>
              I am currently reading the following books.
              <ul>
                <li>QCQI by Neilsen and Chuang</li>
                <li>QEC by Lidar and burn</li>
                <li>QI by Mark Wilde</li>
                <li>QCQI lecture notes by Preskill</li>
                <li>Quantum optics by Garry and Knight</li>
                <li>Quantum Arxiv papers as daily newspaper</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <WorshopAttendent />
      <ConferenceAttendent />
    </>
  );
};

const WorshopAttendent = () => {
  return (
    <>
      <div>
        <div>
          <h2>Workshop Attendent</h2>
          <div
            className="table-scroll"
            tabIndex={0}
            role="region"
            aria-label="Event details"
          >
            <table>
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Date</th>
                  <th scope="col">Mode</th>
                  <th scope="col">Location</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    Training Program on Quantum Cryptography and Quantum
                    Algorithms
                  </th>
                  <td>17th to 21st October 2022</td>
                  <td> Offline </td>
                  <td>IIT Madras</td>
                </tr>
                <tr>
                  <th scope="row">
                    ACM Winter School on Advanced Quantum Computing
                  </th>
                  <td> 5th to 16th October 2022 </td>
                  <td>Offline</td>
                  <td>IIT Madras</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

const ConferenceAttendent = () => {
  return (
    <>
      <div>
        <div>
          <h2>Conference Attendent</h2>
          <div
            className="table-scroll"
            tabIndex={0}
            role="region"
            aria-label="Event details"
          >
            <table>
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Date</th>
                  <th scope="col">Mode</th>
                  <th scope="col">Location</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">
                    Progress in Quantum Science and Technologies
                  </th>
                  <td>23-27 January 2023</td>
                  <td>Offline</td>
                  <td>IIT Madras</td>
                </tr>
                <tr>
                  <th scope="row">
                    International Conference on Quantum Communication,
                    Measurement and Computing
                  </th>
                  <td>26-30 August 2024</td>
                  <td>Offline</td>
                  <td>IIT Madras</td>
                </tr>
                <tr>
                  <th scope="row">
                    Quantum Technology International Conference
                  </th>
                  <td>10-12 September 2024</td>
                  <td>Offline</td>
                  <td>University of Berlin</td>
                </tr>
                <tr>
                  <th scope="row">ICTS Quantum Trajectories 2025</th>
                  <td>20 January 2025 to 07 February 2025</td>
                  <td>Offline</td>
                  <td>ICTS Banglore</td>
                </tr>
                <tr>
                  <th scope="row">20th TQC Conference 2025</th>
                  <td>September 15th – 19th, 2025</td>
                  <td>Offline</td>
                  <td>IISc Banglore</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
